import { memo } from 'react'
import { AppLink, Column } from '@/shared/ui'
import NavigateIcon from '@/shared/assets/icons/icon-navigate.svg'
import { getRouteCases } from '@/shared/constants/router'
import cls from '../../CaseDetails.module.scss'

interface HeaderProps {
  title: string
}

export const Header = memo((props: HeaderProps) => {
  const { title } = props

  return (
    <Column gap={32}>
      <div className={cls.subtitle}>Кейс</div>
      <div className={cls.title}>{title}</div>
      <AppLink to={getRouteCases()} className={cls.backButtonWrapper}>
        <NavigateIcon className={cls.backButton}/>
      </AppLink>
    </Column>
  )
})