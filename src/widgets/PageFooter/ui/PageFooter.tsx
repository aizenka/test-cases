import { memo } from 'react'
import { classNames } from '@/shared/lib/common'
import { Column } from '@/shared/ui'
import cls from './PageFooter.module.scss'

interface PageFooterProps {
  className?: string
}

export const PageFooter = memo((props: PageFooterProps) => {
  const { className } = props

  return (
    <Column
      align='center'
      className={classNames(cls.pageFooter, {}, [className])}
      gap={64}
    >
      <div className={cls.title}>
        Стать клиентом или партнером!
      </div>
      <div className={cls.separator}/>
      <div className={cls.corpEmail}>
        hello@it-cron.ru
      </div>
      <div className={cls.requestButton}>
        <div className={cls.requestButtonText}>
          Оставить заявку
        </div>
      </div>
      <Column
        gap={24}
        align='center'
      >
        <div className={cls.city}>
          Россия, Москва
        </div>
        <div className={cls.street}>
          119330, ул. Мосфильмовская, 35
        </div>
        <div className={cls.contactPhone}>
          +7 (495) 006-13-57
        </div>
      </Column>
    </Column>
  )
})