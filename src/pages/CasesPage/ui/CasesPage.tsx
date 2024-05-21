import { memo } from 'react'
import { Column } from '@/shared/ui'
import { Header } from './components/Header/Header'

const CasesPage = memo(() => {
  return (
    <Column>
      <Header />
    </Column>
  )
})

export default CasesPage