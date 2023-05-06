import { createBrowserRouter } from 'react-router-dom';
import { Default } from './pages/Default';
import { Login } from './pages/Login';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Default />,
        children: [
            {
                path: '/login',
                element: <Login /> 
            },
            {
                path: '/cadastro',
                element: <>cadastro</>
            },
            {
                path: '/carrinho',
                element: <>carrinho</>
            },
        ],
    }
])