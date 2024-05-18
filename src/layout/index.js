import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header'

const Layout = () => {
    return (
        <div className="container flex min-h-screen flex-col items-center justify-start lg:p-24 p-8" id="layout">
            <Header />
            <Outlet />
        </div>
    );
}

export default Layout;
