"use client"

import Image from "next/image";
import { Container } from "react-bootstrap";
import styles from "../page.module.css"
import call from "../../../public/img/phone.svg"
import Map from "../../Map/map"
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

<section  style={{ background:"#eee" ,paddingBottom:"3rem" }}>
<Container style={{maxWidth:"1200px" ,padding:"0" }}>

<div className={styles.why_we_title} data-aos="fade-down">
    <h2 className={styles.home_two_h2}> اتصل بنا</h2>
    <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.</p>
<div className={styles.title_glass}>
<div><Image alt='p' src={divide}></Image></div>
</div>
  </div>

<section className={styles.call_me}>
  <div className={styles.call_me_right} data-aos="fade-left">
    <nav>
      <div><Image alt="" src={call} width={65}loading='lazy'></Image></div>
      <section>
      <h6>اتصل بنا</h6>
      <p>+201148004734</p>
      </section>
    </nav>
    <nav>
      <div><Image alt="" src={call} width={65}loading='lazy'></Image></div>
      <section>
      <h6>راسلنا علي</h6>
      <p>info@website.com</p>
      </section>
    </nav>
    <nav>
      <div><Image alt="" src={call} width={65}loading='lazy'></Image></div>
      <section>
      <h6>مواعيد العمل :</h6>
      <p>جميع ايام الاسبوع عدا الجمعة</p>
      </section>
    </nav>
   
  </div>
  <div  className={styles.call_me_left} data-aos="fade-right">
  <div className={styles.foot_center}>
                <input type="text" name="text" className={styles.input_footer} placeholder="الاسم بالكامل"></input>
                <input type="text" name="text" className={styles.input_footer} placeholder="البريد الالكترونى"></input>
                <input type="text" name="text" className={styles.input_footer} placeholder=" الموضوع"></input>
                <textarea id="eview" name="eview"  rows="4" cols="37" className={styles.input_textarea} >
                    الرساله
                </textarea>
              
            </div>
  </div>
</section>


</Container>
</section>

<Map />

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