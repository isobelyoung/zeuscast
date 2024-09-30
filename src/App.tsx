import { Children, useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setUsers } from './store/reducers/usersReducer';
import './App.css';
import axios from 'axios';
import { mockServer } from './mockServer/server';
import { Outlet } from 'react-router-dom';
import './assets/CanvaSansDisplay-Medium.ttf';
import './assets/CanvaSansDisplay-Regular.ttf';

type AppProps = {
    children: React.ReactNode | React.ReactNode[];
};

export default function App({ children }: AppProps) {
    // const dispatch = useDispatch();
    mockServer();

    // temp fetch function - update when ready for functionality
    const getData = async () => {
        const res = await axios('/api/users');
        // dispatch(setUsers(res.data.users));
        console.log(res.data.users);

    };

    // useEffect(() => {
    //     document.addEventListener('click', (e: any) => console.log(e));

    //     return () =>
    //         document.removeEventListener('click', (e: any) => console.log(e));
    // });

    getData();

    return (
        // if bigger app, would add <header> tag for consistency across pages
        <main>{children}</main>
    );
}
