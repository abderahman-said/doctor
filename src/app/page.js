"use client";
import './globals.css'
import { Inter } from 'next/font/google'

import 'bootstrap/dist/css/bootstrap.min.css';

import "react-image-gallery/styles/css/image-gallery.css";
import 'aos/dist/aos.css';
import dynamic from 'next/dynamic';
const Home = dynamic(() => import('../components/Home'), {
  ssr : false
  })
 function App() {
  return (
    <>
    <Home />
    </>
  )
}
export default App