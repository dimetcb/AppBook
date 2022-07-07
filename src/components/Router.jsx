import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import { allRoutes } from '../routes'

const Router = () => {
    return (
        <Routes>
            {allRoutes.map(({ path, component }) => (
                <Route 
                    key={path} 
                    path={path} 
                    element={component}
                >
                </Route>
            ))}
            <Route 
                path="*" 
                element={<MainPage />}
            />
        </Routes>
    )
}

export default Router
