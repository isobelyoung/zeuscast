import { Children, useState, useEffect } from 'react';
import './App.scss';
import { mockServer } from './mockServer/server';
import './assets/CanvaSansDisplay-Medium.ttf';
import './assets/CanvaSansDisplay-Regular.ttf';

type AppProps = {
    children: React.ReactNode | React.ReactNode[];
};

export default function App({ children }: AppProps) {
    // mockServer();
    return (
        // if bigger app, would add <header> tag for consistency across pages
        <main>{children}</main>
    );
}
