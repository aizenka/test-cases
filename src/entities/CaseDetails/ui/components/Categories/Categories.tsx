import { memo } from 'react'
import { Column } from '@/shared/ui'
import cls from '../../CaseDetails.module.scss'

interface CategoriesProps {
  filters: string
}

export const Categories = memo((props: CategoriesProps) => {
  const { filters } = props

  return (
    <Column
      className={cls.categoriesWrapper}
      gap={32}
    >
      <div className={cls.subtitle}>Категория проекта</div>
      <div className={cls.text}>
        {filters}
      </div>
    </Column>
  )
})