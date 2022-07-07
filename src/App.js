import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router'
import Search from './components/Search'

function App() {
    return (
        <BrowserRouter>
            <Search />
            <Router />
        </BrowserRouter>
    )
}

export default App
