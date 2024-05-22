import { memo } from 'react'
import { useUnit } from 'effector-react'
import { Row } from '@/shared/ui'
import { classNames } from '@/shared/lib/common'
import { $filtersOpened, toggleFiltersOpened } from '../model/services/openFilters'
import cls from './CasesFiltersButton.module.scss'

interface CasesFiltersButtonProps {
  className?: string
}

export const CasesFiltersButton = memo((props: CasesFiltersButtonProps) => {
  const { className } = props
  const [filtersOpened, onToggle] = useUnit([$filtersOpened, toggleFiltersOpened])

  return (
    <Row
      className={classNames('', {}, [className])}
      gap={24}
      vAlign='center'
    >
      {/* TODO: add clear button */}
      <div
        className={classNames(cls.animationRhomb, { [cls.active]: filtersOpened })}
        onClick={onToggle}
      />
      <div className={cls.animationLine} />
      <div
        className={classNames(cls.casesFiltersButton, { [cls.active]: filtersOpened } )}
        onClick={onToggle}
      >
        Фильтры
      </div>
    </Row>
  )
})