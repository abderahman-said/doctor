"use client";
import './globals.css'
import { Cairo } from 'next/font/google'

import 'bootstrap/dist/css/bootstrap.min.css';

import "react-image-gallery/styles/css/image-gallery.css";
import 'aos/dist/aos.css';
import dynamic from 'next/dynamic';

const NavBar = dynamic(() => import('../components/NavBar'), {
ssr : false
})
const Footer = dynamic(() => import('../components/Footer'), {
  ssr : false
  })
const cairo = Cairo({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <>
    
      <html lang="en">
      <meta charset="utf-8" />
    <meta name="description" content="Author: A.N. Author, Illustrator: P. Picture, Category: Books, Price:  £9.24, Length: 784 pages"/>
    <meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34="/>
      <title>doc</title>
      <body >
      <NavBar />

        {children}
        <Footer/>

        </body>










        
    </html>
      <style jsx global >
      {
        `
        .offcanvas {
          z-index: 9999;
        }
        .navbar {
          box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
          // position: fixed;    
          z-index: 9999;
          background-color: #eee;
        width: 100%;
        }
        .image-gallery-slide {
          height: 100%;
        }

        .image-gallery-thumbnails .image-gallery-thumbnails-container {
          display: none;
      }
        .image-gallery-slides {
          width: 400px;
          height: 400px;
      }
      .image-gallery-slides img {
width: 100%;
      }
        .image-gallery-left-nav {
          display: none;
      }
      .image-gallery-right-nav {
        display: none;
    }
        .image-gallery-play-button {
          display: none;
      }
        .image-gallery-thumbnails {
          display: none;
      }
        .carousel-control-prev {
          display: none;
      }
      .carousel-control-next {
  display: none;
}
.image-gallery-fullscreen-button, .image-gallery-play-button {
bottom: 10%;
}
        .navbar {
          display: flow-root !important;
        }
        .carousel-indicators {
          display: none !important; }
          .carousel-caption {
            bottom: 12rem;
            right: 2%;
            left: 10%;
        }
        @media only screen and (max-width: 800px) {
          .carousel-caption {
            bottom: 5rem;
            right: 2%;
            left: 10%;
        }
        }
      @media only screen and (max-width: 500px) {
        .image-gallery-slides {
          width: 340px;
          height: 400px;
      }
      }

      @media only screen and (max-width: 400px) {
        .image-gallery-slides {
          width: 300px;
          height: 400px;
      }
      }
      .btn-primary{
        background-color: #084571 !important;
        border: none;
        }
        `
      }
    </style> 

    </>
  )
}
