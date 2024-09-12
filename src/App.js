import './App.css';
import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import Home from './component/home';
import About from './component/about';
import Pricing from './component/pricing.js';
import LanguageWrapper from './component/languageWrapper';
import { Suspense } from 'react';
import './i18n/index';

const AppContent = () => {
    let routes = useRoutes([
        { path: "/", element: <Navigate to="/en" replace /> },
        {
            path: "/:lang",
            element: <LanguageWrapper />,
            children: [
                { path: "", element: <Home /> },
                { path: "pricing", element: <Pricing /> },
                { path: "about", element: <About /> }
            ]
        },
        { path: "*", element: <Navigate to="/en" replace /> },
    ]);

    return (
        <Suspense fallback={<div>Loading Translation...</div>}>
            {routes}
        </Suspense>
    );
}

function App() {
    return (
        // <div className="App">
            <BrowserRouter>
                <AppContent />
            </BrowserRouter>
        // </div>
    );
}

export default App;
