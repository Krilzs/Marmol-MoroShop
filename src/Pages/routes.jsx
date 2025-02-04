import App from '../App'
import ErrorPage from './ErrorPage/ErrorPage'
import Store from './Store/Store'

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,

    },
    {
        path: '/store',
        element: <Store />,
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]

export default routes