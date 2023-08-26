"use client";
import Image from 'next/image'
import styles from '../page.module.css'
import { Container } from 'react-bootstrap';
import shada from "../../../public/img/استشاري اول.png"
import { useEffect } from 'react';
import Aos from 'aos';
import LazyLoad from 'react-lazyload';

 function Photo() {
  useEffect(() => { 
    Aos.init({ 
      duration: 1000
    }); 
}, []);
  return (
   <>

<LazyLoad height={"100%"} once> 
   <div className={styles.photo_page} data-aos="fade-down"> 
  <h2>عن الدكتور محمد عبد الحليم</h2>
  <p>  <span>الرئيسية    </span>         /      الصور والأعمال            </p>
</div> </LazyLoad>
<div className={styles.photo_page_flex} >
<Container style={{maxWidth:"1200px" ,padding:"0"  }}>
<div className={styles.photo_flex}>

  <h2>  معرض صور</h2>
   <p>معرض صور مركز الدكتور محمد عبد الحليم</p>
  <div >

  <nav data-aos="fade-up"><Image alt="" src={shada} width={360}loading='lazy'></Image></nav>
  <nav data-aos="fade-up"><Image alt="" src={shada} width={360}loading='lazy'></Image></nav>
  <nav data-aos="fade-up"><Image alt="" src={shada} width={360}loading='lazy'></Image></nav>
  {/* <nav data-aos="fade-up"><Image alt="" src={shada} width={360}loading='lazy'></Image></nav>
  <nav data-aos="fade-up"><Image alt="" src={shada} width={360}loading='lazy'></Image></nav>
  <nav data-aos="fade-up"><Image alt="" src={shada} width={360}loading='lazy'></Image></nav> */}

  </div>
</div>

  </Container>

</div>
<section className={styles.number} >
    <h4 data-aos="fade-up">تواصل معنا الأن واحجز موعد كشفك التالي واحصل على افضل خدمة طبية</h4>
    <p data-aos="fade-up">+201148004734</p>
    <button className={styles.button} data-aos="fade-up">
    <span className={styles.button_lg}>
        <span className={styles.button_sl}></span>
        <span  className={styles.button_text}>  الحجز الان</span>
    </span>
</button>
</section>

   </>
  )
}
export default  Photo
