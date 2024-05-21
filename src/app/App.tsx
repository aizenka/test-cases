import { BaseLayout } from '@/shared/ui'
import { AppRouter } from './providers/Router'
import './styles/index.scss'

const App = () => {
  return (
    <BaseLayout>
      <AppRouter />
    </BaseLayout>
  )
}

export default App