import { Box } from '@mui/material';
import Head from 'next/head'
import React from 'react'

interface AuthLayoutProps {
    title: string;
    pageDescription?: string;
    children: React.ReactNode;
}

const AuthLayout = ({ title, pageDescription, children }: AuthLayoutProps) => {
  return (
    <>
        <Head>
            <title>{title}</title>
        </Head>
        <main>
            <Box display="flex" justifyContent="center" alignItems="center" height="calc(100vh - 200px)">
                {children}
            </Box>
        </main>
    </>
  )
}

export default AuthLayout