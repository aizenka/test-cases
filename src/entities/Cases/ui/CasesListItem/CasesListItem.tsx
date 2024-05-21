import { memo, useState } from 'react'
import { classNames } from '@/shared/lib/common'
import { Column, LazyImage, RippleLoader } from '@/shared/ui'
import { useHover } from '@/shared/lib/hooks'
import { getContrastColor } from '@/shared/lib/helpers'
import cls from './CasesListItem.module.scss'
import type { CaseCardFilters } from '@/shared/api/cases/types'

interface CasesListItemProps {
  className?: string
  image: string
  caseColor: string
  title: string,
  filters: CaseCardFilters[]
}

export const CasesListItem = memo((props: CasesListItemProps) => {
  const{
    className,
    caseColor,
    title,
    filters,
    image
  } = props
  const [cardHeight, setCardHeight] = useState<number>(0)
  const [isHovered, { onMouseEnter, onMouseLeave }] = useHover()

  return (
    <Column
      className={classNames(cls.casesListItem, {}, [className])}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      vAlign='end'
      style={{
        backgroundColor: `#${caseColor}`,
        color: getContrastColor(caseColor),
        height: cardHeight || 385
      }}
    >
      {
        isHovered ? (
          <Column
            className={cls.hoveredContent}
            gap={16}
          >
            <div className={cls.title}>{title}</div>
            <div className={cls.filters}>{filters.map(f => f.Name).join(', ')}</div>
          </Column>
        ) : (
          <LazyImage
            className={cls.caseCardImage}
            src={image}
            alt={`Case image ${title}`}
            fallback={<RippleLoader />}
            onImageLoad={({ height }) =>  setCardHeight(height)}
          />
        )
      }
    </Column>
  )
})