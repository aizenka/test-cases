import { memo } from 'react'
import { LazyImage, Row } from '@/shared/ui'
import cls from '../../CaseDetails.module.scss'

interface ImagesBlockProps {
  images: string[]
  caseColor: string
  title: string
}

export const ImagesBlock = memo((props: ImagesBlockProps) => {
  const { images, caseColor, title } = props

  return (
    <Row
      className={cls.imagesContainer}
      style={{ backgroundColor: `#${caseColor}` }}
      align='around'
      gap={64}
    >
      {
        images.map((image) => {
          return (
            <LazyImage
              key={image}
              className={cls.caseImage}
              src={image}
              alt={title}
            />
          )
        })
      }
    </Row>
  )
})