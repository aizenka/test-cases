import { memo } from 'react'
import { Card } from 'antd'
import CheckIcon from '@/shared/assets/icons/icon-check.svg'
import { Column, Row } from '@/shared/ui'
import { generateUUID, getContrastColor } from '@/shared/lib/helpers'
import cls from '../../CaseDetails.module.scss'

interface FeaturesProps {
  caseColor: string
  featuresTitle: string
  featuresDone: string[]
}

export const Features = memo((props: FeaturesProps) => {
  const { caseColor, featuresTitle, featuresDone } = props

  return (
    <Card
      className={cls.card}
      style={{
        color: getContrastColor(caseColor),
        backgroundColor: `#${caseColor}`
      }}
      bordered={false}
    >
      <Column gap={32}>
        <div className={cls.subtitle}>{featuresTitle}</div>
        <Column gap={24}>
          {
            featuresDone.map((feature) => {
              return (
                <Row
                  key={generateUUID()}
                  gap={32}
                  vAlign='center'
                >
                  <CheckIcon fill={getContrastColor(caseColor)} />
                  <div className={cls.text}>{feature}</div>
                </Row>
              )
            })
          }
        </Column>
      </Column>
    </Card>
  )
})