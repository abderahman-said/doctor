"use client";
import './globals.css'
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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />

    <Home />
    </>
  )
}
export default App