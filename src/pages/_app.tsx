import React, { FC, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { wrapper } from '../redux/store';
import '../assets/styles/globals.css';
import '../assets/styles/app.css';
import { ThemeProvider } from 'next-themes';
import MainSideBar from '../layout/SideBar/SideBarLayout';
import Header from '../components/header/Header';
import { useRouter } from 'next/router';
import LoginPage from './login';
function App({ Component, pageProps }: AppProps) {
  let router = useRouter();
  useEffect(() => {
    router.pathname === '/_error' && router.push('/login');
  }, []);
  return (
    <>
      {router.pathname !== '/login' ? (
        <ThemeProvider attribute="class">
          <div className="w-full">
            <Header />
          </div>
          <div className="flex">
            <MainSideBar />
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      ) : (
        <LoginPage />
      )}
    </>
  );
}
export default wrapper.withRedux(App);
