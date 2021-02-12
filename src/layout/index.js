import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => (
    <div class='text-center'>
        {props.children}
    </div>
);

export { Layout, Nav, Footer };