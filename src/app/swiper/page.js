"use client"
import React, { useEffect, useState } from 'react';

import Image from "next/image";
import { Container } from "react-bootstrap";
import styles from "../page.module.css"
import imgw from "../../../public/img/عملية الليزك للعيون.png"
import Modal from 'react-bootstrap/Modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import Aos from 'aos';

function About() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => { 
    Aos.init({ 
      duration: 1000
    }); 
}, []);
  return (
 <>

<Modal show={show} onHide={handleClose} dir="rtl">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className={styles.modal_send}>
        <div className={styles.foot_center}>
                <h4> احجز الان للتواصل معنا</h4>
                <input type="text" name="text" className={styles.input_footer} placeholder="الاسم بالكامل"></input>
                <input type="text" name="text" className={styles.input_footer} placeholder="رقم التلفون"></input>
                <input type="text" name="text" className={styles.input_footer} placeholder="الوظيفه"></input>
                <input type="date" name="data" className={styles.input_footer} placeholder="تاريخ الحجز"></input>
                <textarea id="inp" name="inp" rows="2" cols="37" className={styles.input_textarea}>
                    الرساله
                </textarea>
                <button className={styles.button_nav}>
                ارسال
                </button>
            </div>
        </Modal.Body>
      </Modal>

   <div className={styles.photo_page}>
  <h2>عن الدكتور محمد عبد الحليم</h2>
  <p>  <span>الرئيسية    </span>         /      الصور والأعمال            </p>
</div> 

<Container style={{maxWidth:"1200px"}} dir='rtl'>
<section className={styles.service}>
    <div className={styles.right}>
    <h3>عمليات القناة الدمعية</h3>
    <p>تتم اجراء العمليات القناة الدمعية عن طريق عمل فتحة جديدة لمجرى الدموع وتثبيت انبوبة السليكون داخل الفتحة الجديدة لمدة ستة اشهر و بعدذلك يتم ازالة الانبوبة و تحسن المريض</p>
  <nav>
    <p>المشاركة :</p>
    <Link href={"/"}>Share</Link>
  </nav>
    </div>
    <div className={styles.left}>
  <Image alt='' src={imgw} width={500}loading='lazy'></Image>

    </div>
</section>
<Swiper
      breakpoints={{
        100: {
              slidesPerView: 1,
              spaceBetween: 10,
        },
        500: {
          slidesPerView: 1,
          spaceBetween: 10,
    },
        600: {
              slidesPerView: 2,
              spaceBetween: 10,
        },
        850: {
              slidesPerView: 3,
              spaceBetween: 10,
        },
        950: {
              slidesPerView: 3,
              spaceBetween: 10,
        },
         1100: {
              slidesPerView: 4,
              spaceBetween: 10,
        },

  }}
  loop={true}
  autoplay={true}
      spaceBetween={20}
      slidesPerView={4}
      className={styles.swip}
    >
      <SwiperSlide > 
            <div className={styles.partt}   >
                <Image alt='' src={imgw} width={270}loading='lazy'></Image>
                <h5>عمليات ترقيع القرنيه</h5>
            </div>
       </SwiperSlide>
       <SwiperSlide> 
            <div className={styles.partt}   >
                <Image alt=''  src={imgw} width={270}loading='lazy'></Image>
                <h5>عمليات ترقيع القرنيه</h5>
            </div>
       </SwiperSlide>
       <SwiperSlide> 
            <div className={styles.partt}   >
            <Image alt=''  src={imgw} width={270}loading='lazy'></Image>
            <h5>عمليات ترقيع القرنيه</h5>

            </div>
       </SwiperSlide>
       <SwiperSlide> 
            <div className={styles.partt}   >
            <Image alt=''  src={imgw} width={270}loading='lazy'></Image>
            <h5>عمليات ترقيع القرنيه</h5>
            </div>
       </SwiperSlide>
       <SwiperSlide> 
            <div className={styles.partt}   >
            <Image alt=''  src={imgw} width={270}loading='lazy'></Image>
            <h5>عمليات ترقيع القرنيه</h5>
            </div>
       </SwiperSlide>
       <SwiperSlide> 
            <div className={styles.partt}   >
            <Image  alt='' src={imgw} width={270}loading='lazy'></Image>
            <h5>عمليات ترقيع القرنيه</h5>
            </div>
       </SwiperSlide>
       <SwiperSlide> 
            <div className={styles.partt}   >
            <Image alt=''  src={imgw} width={270}loading='lazy'></Image>

            <h5>عمليات ترقيع القرنيه</h5>
            </div>
       </SwiperSlide>
      
      
    </Swiper>
</Container> 

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