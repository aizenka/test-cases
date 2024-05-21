import { memo } from 'react'
import { Column } from '@/shared/ui'
import { CasesList } from '@/entities/Cases'
import { Header } from './components/Header/Header'

const CasesPage = memo(() => {
  return (
    <Column gap={64}>
      <Header />
      <CasesList />
    </Column>
  )
})

export default CasesPage