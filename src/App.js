import React, { lazy, Suspense } from "react";
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import Header from './components/Header';
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantsMenu from "./components/RestaurantsMenu";
import InputText from "../src/Revision/InputText"

const Grosery = lazy(() => import("./components/Grosery"));

const AppLayout = () => {

    return (
        <div className="app">
            <Header />
            <Outlet />
            {/* <InputText /> */}
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grosery",
                element: (
                    <Suspense fallback={<h1>loading...!</h1>} >
                        <Grosery />
                    </Suspense>
                )
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantsMenu />,
            }

        ],
        errorElement: <Error />,

    }
]

);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)



