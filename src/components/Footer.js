"use client"
import React from 'react'
import styles from "../app/page.module.css"

import img from "../../public/img/ll.png"
import imd from "../../public/img/logo.png"

import Image from 'next/image';
import { Container } from 'react-bootstrap';
import LazyLoad from 'react-lazyload'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

const Footer = () => {
  return (
<div className={styles.footer_bac}>
<LazyLoadComponent>

    <Container style={{maxWidth:'1200px'}} dir='rtl'>
        <footer className={styles.footer}>
            <div className={styles.foot}>
                <Image alt="" src={img} width={200} height={160}loading='lazy'></Image>
                <div  className={styles.nav_flex_top_div}>
                <i className="fa-solid fa-location-dot"></i>
                <h6>   العنوان :مصر - المحلة الكبرى - ميدان الشون _ مزلقان السكه الحديد<br></br> برج شركه الغاز _ مدخل السبع بنات </h6>
                </div>
                <div className={styles.nav_flex_top_div}>
                <i className="fa-solid fa-square-phone-flip"></i>
                <h6>   تليفون : 201148004734+</h6>
                </div>
                <div className={styles.nav_flex_top_div}>
                <i className="fa-regular fa-clock"></i>
                <h6> مواعيد العمل : من الساعه 6 مساءا حتى الساعه 10 مساء</h6>
                </div>
            </div>
            <div className={styles.foot_center}>
                <h4>لينكات مختصرة</h4>
                <h5>الرئيسية</h5>
                <h5>عن الدكتور</h5>
                <h5>فيدوهات العمليات</h5>
                <h5>تواصل معنا</h5>
                <h5>سياسة الاستخدام</h5>
            </div>
            <div className={styles.foot_center}>
                <h4>كيفية التواصل</h4>
                <input type="text" name="text" className={styles.input_footer} placeholder="الاسم بالكامل"></input>
                <input type="text" name="text" className={styles.input_footer} placeholder="البريد الالكترونى"></input>
                <textarea id="wew" name="wew"  rows="4" cols="37" className={styles.input_textarea}>
                    الرساله
                </textarea>
                <button>
  <div  className={styles.svg_wrapper_1}>
    <div  className={styles.svg_wrapper}>
      <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
      </svg>
    </div>
  </div>
  <span>ارسال</span>
</button>
            </div>
        </footer>
<div className={styles.face_footer}>
<i className="fa-brands fa-facebook"></i>
</div>
</Container>
<div className={styles.deltawy_footer} >
<Image alt="" src={imd} width={100} loading='lazy'></Image>

<p>جميع الحقوق محفوظة لدي دلتاوي </p>
</div>

</LazyLoadComponent>

</div>
  )
}

export default Footer