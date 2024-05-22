import { memo, useState } from 'react'
import { classNames } from '@/shared/lib/common'
import { AppLink, Column, LazyImage, RippleLoader } from '@/shared/ui'
import { getRouteCasesDetails } from '@/shared/constants/router'
import { useHover } from '@/shared/lib/hooks'
import { getContrastColor } from '@/shared/lib/helpers'
import cls from './CasesListItem.module.scss'
import type { AvailableFilters } from '@/shared/api/cases/types/common'

interface CasesListItemProps {
  className?: string
  id: string
  friendlyURL?: string
  image: string
  caseColor: string
  title: string,
  filters: AvailableFilters[]
}

export const CasesListItem = memo((props: CasesListItemProps) => {
  const{
    className,
    id,
    // friendlyURL,
    caseColor,
    title,
    filters,
    image
  } = props
  const [cardHeight, setCardHeight] = useState<number>(0)
  const [isHovered, { onMouseEnter, onMouseLeave }] = useHover()

  return (
    <AppLink
      to={getRouteCasesDetails(id)}
      target='_self'
    >
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
    </AppLink>
  )
})