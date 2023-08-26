"use client"
import { useEffect, useRef} from 'react';

import Image from "next/image";
import { Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import styles from "../page.module.css"
import docto from "../../../public/img/عملية الليزك للعيون.png";
import Aos from 'aos';

function About() {
  useEffect(() => { 
    Aos.init({ 
      duration: 1000
    }); 
}, []);
  return (
 <>
   <div className={styles.photo_page} data-aos="fade-down"> 
  <h2>عن الدكتور محمد عبد الحليم</h2>
  <p>  <span>الرئيسية    </span>         /      الصور والأعمال            </p>
</div> 
<div style={{background:'#eee'}}>
<Container style={{maxWidth:"1200px" ,background:'#eee' , padding:"3rem 10px"}} dir='rtl'>
  <h2 className={styles.arti_h2}>المقالات</h2>
<section className={styles.arti}>
  <div className={styles.arti_flex}>
<h5 >اخر المقالات</h5>

    <aside data-aos="fade-up">
    <Image alt='q' src={docto} width={150} loading='lazy'></Image>


      <div >
<h6>عمليات الليزك للعيون</h6>
<p>عمليات الليزك للعيون ، الليزك هو أكثر جراحات الليز.....</p>
      </div>


    </aside>
    <aside data-aos="fade-up">
    <Image alt='q' src={docto} width={150} loading='lazy'></Image>


      <div>
<h6>عمليات الليزك للعيون</h6>
<p>عمليات الليزك للعيون ، الليزك هو أكثر جراحات الليز.....</p>
      </div>


    </aside>
    <aside data-aos="fade-up">
    <Image  alt='q' src={docto} width={150} loading='lazy'></Image>


      <div>
<h6>عمليات الليزك للعيون</h6>
<p>عمليات الليزك للعيون ، الليزك هو أكثر جراحات الليز.....</p>
      </div>


    </aside>
    <aside data-aos="fade-up">
    <Image alt='q' src={docto} width={150} loading='lazy'></Image>


      <div>
<h6>عمليات الليزك للعيون</h6>
<p>عمليات الليزك للعيون ، الليزك هو أكثر جراحات الليز.....</p>
      </div>


    </aside>
    <aside data-aos="fade-up">
    <Image alt='q' src={docto} width={150} loading='lazy'></Image>


      <div>
<h6>عمليات الليزك للعيون</h6>
<p>عمليات الليزك للعيون ، الليزك هو أكثر جراحات الليز.....</p>
      </div>


    </aside>
  </div>
  <div className={styles.arti_right}>
  <Image alt='q' src={docto} data-aos="fade-up" loading='lazy'></Image>
  <section data-aos="fade-up">
    <h2>عملية الليزك للعيون</h2>
    <p>عملية الليزك للعيون ، الليزك هي جراحة عين بالليزر لتصحيح الرؤية</p>
    <p>الليزك هو نوع من الجراحة الانكساريه. يستخدم هذا النوع من الجراحه الليزر لعلاج مشاكل الرؤية الناتجة عن الأخطاء الانكسارية. لديك خطأ في الانكسار عندما لا تنكسر عينك (تنحني) الضـوء بشكل صحيح ، حيث تعتبر عملية الليزك هى عملية جراحية تتم للعين للقيام بتصحيح النظر . </p>
  </section>
  <section data-aos="fade-up">
    <h2>عملية الليزك للعيون : </h2>
    <p>لكي ترى بوضوح ، يجب أن تنتقل أشعة الضـوء عبر القرنية والعدسة. تقوم القرنية والعدسة بكسر الضـوء حتى تهبط على شبكية العين. تحول شبكيه العين الضـوء إلى إشارات تنتقل إلى عقلك وتتحول إلى صور . مع الأخطاء الانكساريه ، يمنع شكل القرنية أو العدسة الـضوء من الانحناء بشتكل صحيح . عندما لا يركز الضـوء على شبكيه العين كما ينبغي ، تكون رؤيتك ضبابية.</p>
    <p>باستخدام عمليات الليزك ، يستـخدم طبـيب العيون الليزر لتغيير شكل القرنية. تعمل جراحة العين بالليزر هذه على تحسين طريقة تركيز أشعة الـضوء على شبكيه العين. يستـخدم عملية الليزك لتصحيح و علاج قصر النظر (قصر النظر) وطول النظر (طول النظر) والاستجماتيزم.</p>
    <p>الهدف من الليزك هو تصحيح الخطأ الانكساري لتحسين رؤيتك. قد تقلل جراحة العين بتقنية الليزك من حاجتك إلى النـظارات أو العـدسات اللاصقة. في بعض الحـالات ، قد يسمح لك بالاستغناء عنها تمامًا. </p>
  </section>
  </div>
</section>
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
export default  About;