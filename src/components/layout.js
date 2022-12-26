import React from 'react';
import Footer from './footer';

const Layout = ({children}) =>{
    return(
        <>
        <div>
            <h1>Monsters Ink</h1>
        </div>
        <main>{children}</main>
        <Footer />
        </>
    )
}

export default Layout;