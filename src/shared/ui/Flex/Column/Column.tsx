import { classNames } from '@/shared/lib/common'
import cls from './Column.module.scss'
import type { CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import type { ClsMods } from '@/shared/lib/common/classNames'

type FlexJustify = 'start' | 'center' | 'end' | 'stretch'
type FlexAlign = 'left' | 'center' | 'right' | 'between' | 'around'
type FlexGap = 4 | 8 | 16 | 24 | 32 | 38 | 44 | 50 | 56 | 64

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

interface ColumnProps extends DivProps {
  className?: string
  children: ReactNode,
  align?: FlexAlign
  vAlign?: FlexJustify
  wrap?: boolean
  reverse?: boolean
  gap?: FlexGap,
  style?: CSSProperties
}

export const Column = (props: ColumnProps) => {
  const {
    className,
    children,
    align = 'start',
    vAlign,
    wrap,
    reverse,
    gap,
    style = {},
    ...extraProps
  } = props

  const getStyle = (): CSSProperties => {
    const _style = { ...style }
    if (gap && !style?.gap) _style.gap = gap
    return _style
  }

  const mods:ClsMods = {
    [cls['v_' + vAlign]]: !!vAlign,
    [cls[align]]: !!align,
    [cls.wrap]: !!wrap,
    [cls.reverse]: !!reverse
  }

  return (
    <div
      className={classNames(cls.column, mods, [className])}
      style={getStyle()}
      {...extraProps}
    >
      {children}
    </div>
  )
}