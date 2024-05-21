import { memo } from 'react'
import { Button } from 'antd'
import { classNames } from '@/shared/lib/common'
import type { ReactNode } from 'react'
import type { ButtonProps } from 'antd/lib/button'

interface BaseButtonProps extends ButtonProps {
  className?: string,
  children?: ReactNode
}

export const BaseButton = memo((props: BaseButtonProps) => {
  const { className, children, ...extraProps } = props

  return (
    <Button
      className={classNames('', {}, [className])}
      {...extraProps}
    >
      {children}
    </Button>
  )
})