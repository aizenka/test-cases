import { memo } from 'react'
import { classNames } from '@/shared/lib/common'
import { Row } from '@/shared/ui'
import { CasesFiltersButton } from '@/features/CasesFiltersButton'
import cls from './Header.module.scss'

interface HeaderProps {
  className?: string
}

export const Header = memo((props: HeaderProps) => {
  const { className } = props

  return (
    <Row
      className={classNames(cls.header, {}, [className])}
      vAlign='center'
      align='between'
    >
      <div className={cls.title}>Кейсы</div>
      <CasesFiltersButton />
    </Row>
  )
})