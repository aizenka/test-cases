import { classNames } from '@/shared/lib/common'
import { Layout } from 'antd'
import cls from './BaseLayout.module.scss'
import type { CSSProperties, ReactNode } from 'react'

interface IBaseLayoutProps {
  className?: string
  children: ReactNode
  style?: CSSProperties
}

export const BaseLayout = (props: IBaseLayoutProps) => {
  const { className, children, style } = props

  return (
    <Layout style={style}>
      <Layout.Content className={classNames(cls.baseLayout, {}, [className])}>
        {children}
      </Layout.Content>
    </Layout>
  )
}