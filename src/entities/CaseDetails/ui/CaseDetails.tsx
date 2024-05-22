import { memo, useLayoutEffect } from 'react'
import { useUnit } from 'effector-react'
import { classNames } from '@/shared/lib/common'
import { Column, RippleLoader, Row } from '@/shared/ui'
import { Card, QRCode } from 'antd'
import { Testimonial } from '@/entities/Testimonial'
import { Categories, Features, Header, ImagesBlock } from './components'
import { getContrastColor } from '@/shared/lib/helpers'
import { $case, getCaseFx } from '../model/services/getCaseById'
import cls from './CaseDetails.module.scss'
import type { CommonFields } from '@/shared/api/commonTypes'

interface CaseDetailsProps {
  className?: string
  caseId: string
}

const getSplittedText = (array: CommonFields[], seperator: string) => {
  return array.map(i => i.Name).join(seperator)
}

export const CaseDetails = memo((props: CaseDetailsProps) => {
  const { className, caseId } = props
  const [_case, getCase, isLoading] = useUnit([$case, getCaseFx, getCaseFx.pending])

  useLayoutEffect(() => {
    getCase(caseId)
  }, [caseId, getCase])

  if (!_case || isLoading) {
    return (
      <Column vAlign='center' align='center'>
        <RippleLoader />
      </Column>
    )
  }

  return (
    <Column
      className={classNames(cls.caseDetails, {}, [className])}
      gap={64}
    >
      <Header title={_case.Title} />
      <Row align='between'>
        {
          _case?.Filters?.length > 0 && (
            <Categories filters={getSplittedText(_case.Filters, ', ')}/>
          )
        }
        <QRCode
          value={_case.ShortQrCode || 'https://it-cron.ru'}
          bgColor='#fff'
          bordered={false}
        />
      </Row>
      {
        _case?.Images?.length > 0 && (
          <ImagesBlock
            caseColor={_case.CaseColor}
            images={_case.Images}
            title={_case.Title}
          />
        )
      }
      <Column gap={32}>
        <div className={cls.subtitle}>Задача</div>
        <div className={cls.text}>{_case.Task}</div>
      </Column>
      {
        (_case?.Technologies || _case?.Platforms) && (
          <Card
            className={cls.card}
            style={{
              color: getContrastColor(_case.CaseColor),
              backgroundColor: `#${_case.CaseColor}`
            }}
            bordered={false}
          >
            <Column gap={64}>
              {
                _case.Technologies.length > 0 && (
                  <Column gap={32}>
                    <div className={cls.subtitle}>Технология</div>
                    <div className={cls.text}>
                      {getSplittedText(_case.Technologies, ' ')}
                    </div>
                  </Column>
                )
              }
              {
                _case.Platforms.length > 0 && (
                  <Column gap={32}>
                    <div className={cls.subtitle}>Платформа</div>
                    <div className={cls.text}>
                      {getSplittedText(_case.Platforms, ' ')}
                    </div>
                  </Column>
                )
              }
            </Column>
          </Card>
        )
      }
      {
        _case?.Stages?.length > 0 && (
          <Column gap={32}>
            <div className={cls.subtitle}>Этапы</div>
            <div className={cls.text}>
              {getSplittedText(_case.Stages, ', ')}
            </div>
          </Column>
        )
      }
      {
        _case?.FeaturesDone?.length > 0 && (
          <Features
            caseColor={_case.CaseColor}
            featuresTitle={_case.FeaturesTitle}
            featuresDone={_case.FeaturesDone}
          />
        )
      }
      <Column gap={32}>
        <div className={cls.subtitle}>Целевая аудитория</div>
        <div className={cls.text}>{_case.Audience}</div>
      </Column>
      {
        _case.TestimonialId && (
          <Testimonial id={_case.TestimonialId}/>
        )
      }
    </Column>
  )
})
