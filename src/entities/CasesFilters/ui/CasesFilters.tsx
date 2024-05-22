import { memo, useEffect } from 'react'
import { useUnit } from 'effector-react'
import { classNames } from '@/shared/lib/common'
import { Column, RippleLoader, Row } from '@/shared/ui'
import { $casesFilters, getCasesFiltersFx } from '../model/services/getCasesFilters'
import { $selectedFilterIds, toggleFilter } from '../model/services/handleCasesFilters'
import cls from './CasesFilters.module.scss'

interface CasesFiltersProps {
  className?: string
  isOpen?: boolean
}

export const CasesFilters = memo((props: CasesFiltersProps) => {
  const { className, isOpen } = props
  const [filters, getFilters, isLoading] = useUnit([
    $casesFilters,
    getCasesFiltersFx,
    getCasesFiltersFx.pending
  ])
  const [selectedFilterIds, onToggleFilter] = useUnit([
    $selectedFilterIds,
    toggleFilter
  ])

  useEffect(() => {
    if (!isOpen) return

    getFilters()
  }, [isOpen, getFilters])

  if (isOpen && isLoading) {
    return (
      <Column vAlign='center' align='center'>
        <RippleLoader />
      </Column>
    )
  }

  if (!isOpen) return null

  return (
    <Row
      className={classNames(cls.casesFilters, {}, [className])}
      align='between'
      gap={38}
    >
      <div className={cls.separatorLine} />
      {
        filters.map(section => {
          return (
            <Column
              key={section.Id}
              className={cls.section}
              gap={50}
            >
              <div className={cls.sectionTitle}>{section.Name}</div>
              <Column gap={24}>
                {
                  section.Filters.map(filter => {
                    return (
                      <div
                        key={filter.Id}
                        className={classNames(
                          cls.filterName,
                          { [cls.selected]: selectedFilterIds.includes(filter.Id) }
                        )}
                        onClick={() => onToggleFilter(filter.Id)}
                      >
                        {filter.Name}
                      </div>
                    )
                  })
                }
              </Column>
            </Column>
          )
        })
      }
    </Row>
  )
})