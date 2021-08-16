import { Home } from './screens/Home'
import { GlobalState } from './global/GlobalContextData'

function App () {
  return (
    <div>
      <GlobalState>
        <Home />
      </GlobalState>
    </div>
  )
}

export default App
