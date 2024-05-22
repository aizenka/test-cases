import { memo, useLayoutEffect } from 'react'
import { useUnit } from 'effector-react'
import { classNames } from '@/shared/lib/common'
import { AppLink, Column, LazyImage, RippleLoader, Row } from '@/shared/ui'
import NavigateIcon from '@/shared/assets/icons/icon-navigate.svg'
import CheckIcon from '@/shared/assets/icons/icon-check.svg'
import { getRouteCases } from '@/shared/constants/router'
import { Card, QRCode } from 'antd'
import { Testimonial } from '@/entities/Testimonial'
import { generateUUID, getContrastColor } from '@/shared/lib/helpers'
import { $case, getCaseFx } from '../model/services/getCaseById'
import cls from './CaseDetails.module.scss'
import type { CommonFields } from '@/shared/api/cases/types/common'

// TODO: split into components

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
      <Column gap={32}>
        <div className={cls.subtitle}>Кейс</div>
        <div className={cls.title}>{_case.Title}</div>
        <AppLink to={getRouteCases()} className={cls.backButtonWrapper}>
          <NavigateIcon className={cls.backButton}/>
        </AppLink>
      </Column>
      <Row align='between'>
        <Column
          className={cls.categoriesWrapper}
          gap={32}
        >
          <div className={cls.subtitle}>Категория проекта</div>
          <div className={cls.text}>
            {getSplittedText(_case.Filters, ', ')}
          </div>
        </Column>
        <QRCode
          value={_case.ShortQrCode || 'https://it-cron.ru'}
          bgColor='#fff'
          bordered={false}
        />
      </Row>
      <Row
        className={cls.imagesContainer}
        style={{ backgroundColor: `#${_case.CaseColor}` }}
        align='center'
        gap={64}
      >
        {
          _case.Images.map((image) => {
            return (
              <LazyImage
                key={image}
                className={cls.caseImage}
                src={image}
                alt={_case.Title}
              />
            )
          })
        }
      </Row>
      <Column gap={32}>
        <div className={cls.subtitle}>Задача</div>
        <div className={cls.text}>{_case.Task}</div>
      </Column>
      <Card
        className={cls.card}
        style={{
          color: getContrastColor(_case.CaseColor),
          backgroundColor: `#${_case.CaseColor}`
        }}
        bordered={false}
      >
        <Column gap={64}>
          <Column gap={32}>
            <div className={cls.subtitle}>Технология</div>
            <div className={cls.text}>
              {getSplittedText(_case.Technologies, ' ')}
            </div>
          </Column>
          <Column gap={32}>
            <div className={cls.subtitle}>Платформа</div>
            <div className={cls.text}>
              {getSplittedText(_case.Platforms, ' ')}
            </div>
          </Column>
        </Column>
      </Card>
      <Column gap={32}>
        <div className={cls.subtitle}>Этапы</div>
        <div className={cls.text}>
          {getSplittedText(_case.Stages, ', ')}
        </div>
      </Column>
      <Card
        className={cls.card}
        style={{
          color: getContrastColor(_case.CaseColor),
          backgroundColor: `#${_case.CaseColor}`
        }}
        bordered={false}
      >
        <Column gap={32}>
          <div className={cls.subtitle}>{_case.FeaturesTitle}</div>
          <Column gap={24}>
            {
              _case.FeaturesDone.map((feature) => {
                return (
                  <Row
                    key={generateUUID()}
                    gap={32}
                    vAlign='center'
                  >
                    <CheckIcon />
                    <div className={cls.text}>{feature}</div>
                  </Row>
                )
              })
            }
          </Column>
        </Column>
      </Card>
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
