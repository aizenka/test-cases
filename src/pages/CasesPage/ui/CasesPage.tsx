import { memo } from 'react'
import { useUnit } from 'effector-react'
import { Column } from '@/shared/ui'
import { CasesList } from '@/entities/Cases'
import { CasesFilters } from '@/entities/CasesFilters'
import { $filtersOpened } from '@/features/CasesFiltersButton'
import { Header } from './components/Header/Header'

const CasesPage = memo(() => {
  const filtersOpened = useUnit($filtersOpened)

  return (
    <Column gap={64}>
      <Header />
      <CasesFilters isOpen={filtersOpened} />
      <CasesList />
    </Column>
  )
})

export default CasesPage