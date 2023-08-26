"use client"

import Image from "next/image";
import { Container } from "react-bootstrap";
import styles from "../page.module.css"
import imgw from "../../../public/img/عملية الليزك للعيون.png"
import { useEffect } from "react";
import Aos from "aos";
import divide from "../../../public/img/divider.svg";
import LazyLoad from "react-lazyload";

function About() {
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

<section  style={{ background:"#eee" }}>
<Container style={{maxWidth:"1200px" ,padding:"0" }}>

<div className={styles.why_we_title} data-aos="fade-down">
    <h2 className={styles.home_two_h2}> فيديو العمليات</h2>
    <p>مجموعة من فيديوهات مركز الدكتور محمد عبد الحليم</p>
<div className={styles.title_glass}>
<div><LazyLoad height={"100%"} once><Image alt='p' src={divide} loading='lazy'></Image></LazyLoad></div>

</div>
  </div>


  <section className={styles.card_video}>
  <aside data-aos="fade-up">
      <section className={styles.c_iframe}>
  {/* <iframe src="https://www.youtube.com/embed/Kch8n4tcOZQ"  allowFullScreen={true} ></iframe> */}
</section>
    <p>
      افضل دكتور عيون في المحلة دكتور محمد عبدالحليم- انظر الفارق قبل وبعد العملية
</p>
      </aside>
      <aside data-aos="fade-up">
      <section className={styles.c_iframe}>
  {/* <iframe src="https://www.youtube.com/embed/Kch8n4tcOZQ"  allowFullScreen={true} ></iframe> */}
</section>
    <p>
      افضل دكتور عيون في المحلة دكتور محمد عبدالحليم- انظر الفارق قبل وبعد العملية
</p>
      </aside>
      <aside data-aos="fade-up">
      <section className={styles.c_iframe}>
  {/* <iframe src="https://www.youtube.com/embed/Kch8n4tcOZQ"  allowFullScreen={true} ></iframe> */}
</section>
    <p>
      افضل دكتور عيون في المحلة دكتور محمد عبدالحليم- انظر الفارق قبل وبعد العملية
</p>
      </aside>
      <aside data-aos="fade-up">
      <section className={styles.c_iframe}>
  {/* <iframe src="https://www.youtube.com/embed/Kch8n4tcOZQ"  allowFullScreen={true} ></iframe> */}
</section>
    <p>
      افضل دكتور عيون في المحلة دكتور محمد عبدالحليم- انظر الفارق قبل وبعد العملية
</p>
      </aside>
      <aside data-aos="fade-up">
      <section className={styles.c_iframe}>
  {/* <iframe src="https://www.youtube.com/embed/Kch8n4tcOZQ"  allowFullScreen={true} ></iframe> */}
</section>
    <p>
      افضل دكتور عيون في المحلة دكتور محمد عبدالحليم- انظر الفارق قبل وبعد العملية
</p>
      </aside>
      <aside data-aos="fade-up">
      <section className={styles.c_iframe} >
  {/* <iframe src="https://www.youtube.com/embed/Kch8n4tcOZQ"  allowFullScreen={true} ></iframe> */}
</section>
    <p>
      افضل دكتور عيون في المحلة دكتور محمد عبدالحليم- انظر الفارق قبل وبعد العملية
</p>
      </aside>

    </section>

</Container>





</section>

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
export default  About;

