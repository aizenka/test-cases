import { memo } from 'react'
import { Link } from 'react-router-dom'
import { classNames } from '@/shared/lib/common'
import type { LinkProps } from 'react-router-dom'
import type { ReactNode } from 'react'

interface AppLinkProps extends LinkProps {
  className?: string,
  children?: ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    ...extraProps
  } = props

  return (
    <Link
      to={to}
      className={classNames('', {}, [className])}
      {...extraProps}
    >
      {children}
    </Link>
  )
})