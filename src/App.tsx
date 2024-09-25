import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { mockServer } from './mockServer/server'
import { Outlet } from 'react-router-dom'
import './assets/CanvaSansDisplay-Medium.ttf';
import './assets/CanvaSansDisplay-Regular.ttf';

type AppProps = {
  children: React.ReactNode | React.ReactNode[]
}

export default function App({ children }: AppProps) {
  mockServer();

  // temp fetch function - update when ready for functionality
  const getData = async () => {
    const res = await axios('/api/users');
    console.log(res.data);
  }

  getData();

  return (
    // if bigger app, would add <header> tag for consistency across pages
    <main>
      {children}
    </main>
  )
}
