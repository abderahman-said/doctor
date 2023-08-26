"use client"

import Image from "next/image";
import { Container } from "react-bootstrap";
import styles from "../page.module.css"
import imgw from "../../../public/img/عملية الليزك للعيون.png"
import { useEffect } from "react";
import Aos from "aos";
import Link from "next/link";
import divide from "../../../public/img/divider.svg"
function About() {
  useEffect(() => { 
    Aos.init({ 
      duration: 1000
    }); 
}, []);
  return (
   <>
  <div className={styles.photo_page}>
  <h2>عن الدكتور محمد عبد الحليم</h2>
  <p>  <span>الرئيسية    </span>         /      الصور والأعمال            </p>
</div> 

<section  style={{ background:"#eee" ,paddingBottom:"3rem"  }}>
<Container style={{maxWidth:"1200px" ,padding:"0" }}>

<div className={styles.why_we_title}>
    <h2 className={styles.home_two_h2}> نصائح طبية</h2>
    <p>هذه مجموعة من النصائح المهمة والتي تعتبر من أهم أسباب انتشار أمراض العين، ولا بد من اتباع تلك النصائح بعناية فائقة لتجنب أمراض العيون.</p>
<div className={styles.title_glass}>
<div><Image alt='p' src={divide}loading='lazy'></Image></div>
</div>
  </div>

<section className={styles.card_h}>
  <div data-aos="fade-up" >
<Link href={"/aritc"}>

  <section className={styles.img_wrapper} >
    <Image alt="w"  className={styles.inner_img} src={imgw} objectFit="cover" loading='lazy'  ></Image>
  </section>
<section className={styles.card_h_pad}>
  <h5>عمليات الليزك للعيون</h5>
    <h6>الخميس ,01/09/2022 | دكتور محمد عبد الحليم</h6>
    <p>
    عمليات الليزك للعيون ، الليزك هو أكثر جراحات الليزر شيوعًا التي يتم إجراؤها لعلاج قـصر النظر (قصر النظر) ومد البـصر (طول النظر) واللابؤرية. مثل الأنواع الأخرى من الجراحة الانكسارية ، فإن اجراء الليزك يعيد تشكيل القرنية للسماح للضوء الداخل للعين بالتر.....
    </p>
</section>

</Link>
  </div>
  <div data-aos="fade-up">
<Link href={"/aritc"}>

  <section className={styles.img_wrapper} >
    <Image alt="w"  className={styles.inner_img} src={imgw} objectFit="cover" loading='lazy'></Image>
  </section>
<section className={styles.card_h_pad}>
  <h5>عمليات الليزك للعيون</h5>
    <h6>الخميس ,01/09/2022 | دكتور محمد عبد الحليم</h6>
    <p>
    عمليات الليزك للعيون ، الليزك هو أكثر جراحات الليزر شيوعًا التي يتم إجراؤها لعلاج قـصر النظر (قصر النظر) ومد البـصر (طول النظر) واللابؤرية. مثل الأنواع الأخرى من الجراحة الانكسارية ، فإن اجراء الليزك يعيد تشكيل القرنية للسماح للضوء الداخل للعين بالتر.....
    </p>
</section>

</Link>
  </div>
  <div data-aos="fade-up">
<Link href={"/aritc"}>

  <section className={styles.img_wrapper} >
    <Image alt="w"  className={styles.inner_img} src={imgw} objectFit="cover"  loading='lazy' ></Image>
  </section>
<section className={styles.card_h_pad}>
  <h5>عمليات الليزك للعيون</h5>
    <h6>الخميس ,01/09/2022 | دكتور محمد عبد الحليم</h6>
    <p>
    عمليات الليزك للعيون ، الليزك هو أكثر جراحات الليزر شيوعًا التي يتم إجراؤها لعلاج قـصر النظر (قصر النظر) ومد البـصر (طول النظر) واللابؤرية. مثل الأنواع الأخرى من الجراحة الانكسارية ، فإن اجراء الليزك يعيد تشكيل القرنية للسماح للضوء الداخل للعين بالتر.....
    </p>
</section>

</Link>
  </div>


</section>
<div>

</div>
<button className={styles.cssbuttons_io_button} style={{margin:"auto" , padding:"0px 15px 0 5rem"}}>اقرأ المزيد
  <div className={styles.icon}>
  <i className="fa-solid fa-arrow-left"></i>
  </div>
  </button>
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