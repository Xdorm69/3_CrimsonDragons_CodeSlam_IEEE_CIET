"use client";
import React, { ReactNode } from 'react'
import Lenis from "lenis";

const LenisWrapper = ({children}: {children: ReactNode}) => {
    const lenis = new Lenis({
      autoRaf: true,
    });
  return (
    <>{children}</>
  )
}

export default LenisWrapper