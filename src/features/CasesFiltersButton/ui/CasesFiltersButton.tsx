import { memo } from 'react'
import { useUnit } from 'effector-react'
import { Row } from '@/shared/ui'
import { classNames } from '@/shared/lib/common'
import { $selectedFilterIds, clearSelectedFilters } from '@/entities/CasesFilters'
import { $filtersOpened, toggleFiltersOpened } from '../model/services/openFilters'
import cls from './CasesFiltersButton.module.scss'

interface CasesFiltersButtonProps {
  className?: string
}

export const CasesFiltersButton = memo((props: CasesFiltersButtonProps) => {
  const { className } = props
  const [filtersOpened, onToggle] = useUnit([$filtersOpened, toggleFiltersOpened])
  const [selectedFilterIds, onClearSelectedFilters] = useUnit([
    $selectedFilterIds,
    clearSelectedFilters
  ])

  return (
    <Row
      className={classNames('', {}, [className])}
      gap={24}
      vAlign='center'
    >
      {
        selectedFilterIds.length > 0 && (
          <Row
            gap={24}
            vAlign='center'
          >
            <div
              className={cls.clearButton}
              onClick={onClearSelectedFilters}
            >
              Очистить
            </div>
            <div className={cls.clearAnimationLine} />
          </Row>
        )
      }
      <div
        className={classNames(
          cls.animationRhomb,
          {
            [cls.filtersOpened]: filtersOpened,
            [cls.withClearButton]: selectedFilterIds.length > 0,
            [cls.openedWithClearButton]: filtersOpened && selectedFilterIds.length > 0
          }
        )}
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