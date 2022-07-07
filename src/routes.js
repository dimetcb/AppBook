import MainPage from './pages/MainPage'
import BookPage from './pages/BookPage'

import { BOOKLIST_ROUTE, BOOKPAGE_ROUTE } from './utils/constants'

export const allRoutes = [
    {
        path: BOOKLIST_ROUTE,
        component: <MainPage />
    },
    {
        path: BOOKPAGE_ROUTE + '/:id',
        component: <BookPage />
    }
]
