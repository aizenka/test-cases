import { memo, useLayoutEffect } from 'react'
import { useUnit } from 'effector-react'
import { classNames } from '@/shared/lib/common'
import { Card } from 'antd'
import { Column, LazyImage, RippleLoader, Row } from '@/shared/ui'
import { $testimonial, getTestimonialFx } from '../model/services/getTestimonialById'
import cls from './Testimonial.module.scss'

interface TestimonialProps {
  className?: string
  id: string
}

// TODO: should be lazy component

export const Testimonial = memo((props: TestimonialProps) => {
  const { className, id } = props
  const [testimonial, getTestimonial, isLoading] = useUnit([
    $testimonial,
    getTestimonialFx,
    getTestimonialFx.pending
  ])

  useLayoutEffect(() => {
    getTestimonial(id)
  }, [id, getTestimonial])

  if (!testimonial) return null

  return (
    <Card
      className={classNames(cls.testimonial, {}, [className])}
    >
      {
        isLoading ? (
          <RippleLoader />
        ) : (
          <Column gap={50}>
            <div className={cls.text}>{testimonial.Text}</div>
            <Row
              vAlign='center'
              gap={44}
            >
              <LazyImage
                className={cls.image}
                src={testimonial.Icon}
                alt={'Testimonial icon'}
                fallback={<RippleLoader />}
              />
              <Column gap={8}>
                <div className={cls.customerName}>{testimonial.CustomerName}</div>
                <div className={cls.company}>{testimonial.Company}</div>
              </Column>
            </Row>
          </Column>
        )
      }
    </Card>
  )
})