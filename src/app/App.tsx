import { BaseLayout, Column } from '@/shared/ui'
import { PageFooter } from '@/widgets/PageFooter'
import { AppRouter } from './providers/Router'
import './styles/index.scss'

const App = () => {
  return (
    <BaseLayout className='appLayout'>
      <Column gap={64}>
        <AppRouter />
        <PageFooter />
      </Column>
    </BaseLayout>
  )
}

export default App