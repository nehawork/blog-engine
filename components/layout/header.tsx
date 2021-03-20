import * as React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Link from "next/link";
import { useRouter } from 'next/router';

const AppHeader = (): JSX.Element => {
    const router = useRouter();
    const menus = [{ title: 'Users', path: '/users' }, { title: 'Posts', path: '/posts' }, { title: 'Albums', path: '/albums' }, { title: 'To Do', path: '/todo' },]
    return (<div className='headerPage'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>Blog Engine</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {menus.map((menu) => <Link key={menu.path} href={menu.path} passHref><Nav.Link className={router.pathname === menu.path ? 'nav-link active' : 'nav-link'} as='a'>{menu.title}</Nav.Link></Link>)}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>);
}

export default AppHeader;