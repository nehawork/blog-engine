import * as React from 'react';
import AppFooter from './footer';
import AppHeader from './header';

const MainPage = ({ children }: { children: JSX.Element }): JSX.Element => {
    return (
        <>
            <AppHeader />
            <div className='pageContent'>
                {children}
            </div>
            <AppFooter />
        </>
    );
}

export default MainPage;