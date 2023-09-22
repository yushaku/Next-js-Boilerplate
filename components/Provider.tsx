'use client'

import { ThemeProvider } from '@material-tailwind/react'

import React from 'react'

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default Provider
