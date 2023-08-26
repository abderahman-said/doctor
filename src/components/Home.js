"use client"
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react';
import imgtwo from "../../public/img/doctor-image1.png"
import banner02 from "../../public/img/banner02.jpg"
import divide from "../../public/img/divider.svg";
import imfg from "../../public/img/banner01.jpg";
import imgss from "../../public/img/banner04 (1).png"
import styles from "./../app/page.module.css"
import img1 from "../../public/img/banner03.jpg"
import Image from 'next/image';
import imgw from "../../public/img/عملية الليزك للعيون.png"
import img_doc from "../../public/img/doctor-1.png"
import gg from "../../public/img/service.svg"
import gog from "../../public/img/s.svg"
import go0g from "../../public/img/service3.svg"
import shada from "../../public/img/استشاري اول.png"
import igws from "../../public/img/pentagon-mask-white.png"
import { Col , Row } from 'react-bootstrap';
import Map from "../Map/map"
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';
import { LazyLoadImage ,LazyLoadComponent } from 'react-lazy-load-image-component';
import LazyLoad from 'react-lazyload';
const Home = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => { 
    AOS.init({ 
      duration: 1000
    }); 
}, []);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 370) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  function handleButtonClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };
  return (
    <>
{/* -------------------- */}

<div className={styles.Carousel_img}  >

<Carousel fade activeIndex={activeIndex} onSelect={handleSelect} interval={1000}>
  
        <Carousel.Item>
        <Image loading='lazy' src={img1} alt="img_carosel" className={styles.Carousel_img_filter} />
          <Carousel.Caption>
          <section className={styles.Car_caption}>
<div>
<LazyLoad height={"100%"} once> 
<Image src={imgtwo} width={400} height={400} className={styles.img} loading='lazy' ></Image>
</LazyLoad>
</div>
<div className={styles.Car_caption_left}>

<div>
<nav>
<section>
<LazyLoad height={"100%"} once> 
 <Image alt=""  src={divide} width={50} height={50}loading='lazy'></Image>
 </LazyLoad>
</section>
<h5>فحص قطاع العين</h5>

</nav>

</div>
</div>
</section>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image  src={banner02} alt="img_carosel" className={styles.Carousel_img_filter} loading='lazy'  />
          <Carousel.Caption>
            <div className={styles.carsoul2}>

            <h3>نعمل من اجل راحة عينيك</h3>
            <p>ليزك  &   بى اركى  ,  جراحات العيون   ,  فحوصات العين</p>
            <button className={styles.button}>
    <span className={styles.button_lg}>
        <span className={styles.button_sl}></span>
        <span  className={styles.button_text}> تواصل معنا</span>
    </span>
</button>
</div>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image  src={imgss} alt="img_carosel" className={styles.Carousel_img_filter}  loading='lazy' />
          <Carousel.Caption>
          <div className={styles.carsoul2}>

<h3>العنايه بعيون اطفالنا</h3>
<p>د محمد عبدالحليم استشارى طب وجراحه العيون</p>
<button className={styles.button}>
<span className={styles.button_lg}>
<span className={styles.button_sl}></span>
<span  className={styles.button_text}> حجز ميعاد</span>
</span>
</button>
</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image  src={imfg} alt="img_carosel" className={styles.Carousel_img_filter} loading='lazy' />
          <Carousel.Caption>
          <div className={styles.carsoul2}>

<h3>عمليات الليزك</h3>
<p>جراحات العيون الشبكيه والجسم الزجاجى القرنيه</p>
<button className={styles.button}>
<span className={styles.button_lg}>
<span className={styles.button_sl}></span>
<span  className={styles.button_text}> تصحيح الابصار</span>
</span>
</button>
</div>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
<LazyLoad>

       <div className={styles.dots}>
  <div className={activeIndex === 0 ? `${styles.dots_flex} ${styles.active_dots_flex}` : styles.dots_flex} >
    <div><h5 className={activeIndex === 0 ? `${styles.dots_num} ${styles.activeDotNum}` : styles.dots_num}>1</h5></div>
    <div>
      <p>العناية بالعيون</p>
      <h6>كل وسائل العناية بالعيون</h6>
    </div>
  </div>
  <div className={activeIndex === 1 ? `${styles.dots_flex} ${styles.active_dots_flex}` : styles.dots_flex} >
    <div><h5 className={activeIndex === 1 ? `${styles.dots_num} ${styles.activeDotNum}` : styles.dots_num}>2</h5></div>
    <div>
      <p>الاطفال</p>
      <h6>لان عيون اطفالنا تهمنا</h6>
    </div>
  </div>
  <div className={activeIndex === 2 ? `${styles.dots_flex} ${styles.active_dots_flex}` : styles.dots_flex} >
    <div><h5 className={activeIndex === 2 ? `${styles.dots_num} ${styles.activeDotNum}` : styles.dots_num}>3</h5></div>
    <div>
      <p>الليزك</p>
      <h6>تصحيح الابصار بالليزك</h6>
    </div>
  </div>
  <div className={activeIndex === 3 ? `${styles.dots_flex} ${styles.active_dots_flex}` : styles.dots_flex} >
    <div><h5 className={activeIndex === 3 ? `${styles.dots_num} ${styles.activeDotNum}` : styles.dots_num}>4</h5></div>
    <div>
      <p>استشارات طبية</p>
      <h6>نتشرف بزيارتكم</h6>
    </div>
  </div>
</div>
</LazyLoad>
    </div>


    {/* ------------------- */}
    <LazyLoad height={"100%"} once> 
<div className={styles.bac_g}>
<h2 className={styles.home_two_h2}>خدمات مركز الدكتور محمد عبد الحليم للعيون</h2>
<section className={styles.home_two}>

  <div  className={styles.home_two_right} data-aos="fade-left">
    <ul>
      <section>
        <div><i className="fa-solid fa-check-to-slot"></i></div>
        <li>علاج ارتشاح الشبكية السكري</li>
      </section>

      <section>
        <div><i className="fa-solid fa-check-to-slot"></i></div>
        <li>علاج ارتشاح الشبكية السكري</li>
      </section>
      <section>
        <div><i className="fa-solid fa-check-to-slot"></i></div>
        <li>علاج ارتشاح الشبكية السكري</li>
      </section>
      <section>
        <div><i className="fa-solid fa-check-to-slot"></i></div>
        <li>علاج ارتشاح الشبكية السكري</li>
      </section>
      <section>
        <div><i className="fa-solid fa-check-to-slot"></i></div>
        <li>علاج ارتشاح الشبكية السكري</li>
      </section>
      <section>
        <div><i className="fa-solid fa-check-to-slot"></i></div>
        <li>علاج ارتشاح الشبكية السكري</li>
      </section>
      <section>
        <div><i className="fa-solid fa-check-to-slot"></i></div>
        <li>علاج ارتشاح الشبكية السكري</li>
      </section>
      <section>
        <div><i className="fa-solid fa-check-to-slot"></i></div>
        <li>علاج ارتشاح الشبكية السكري</li>
      </section>
      <section>
        <div><i className="fa-solid fa-check-to-slot"></i></div>
        <li>علاج ارتشاح الشبكية السكري</li>
      </section>
      <section>
        <div><i className="fa-solid fa-check-to-slot"></i></div>
        <li>علاج ارتشاح الشبكية السكري</li>
      </section>
    </ul>
    <button className={styles.cssbuttons_io_button}> مشاهدة كل الخدمات
  <div className={styles.icon}>
  <i className="fa-solid fa-arrow-left"></i>
  </div>
</button>
  </div>
  <div className={styles.home_two_left} data-aos="fade-right">
<div className={styles.home_two_left_rlative} >
    <div >
    <Image alt="" src={igws} width={320} height={330} loading='lazy'></Image>
    </div>

    <div className={styles.home_two_left_absol} >
     <Image alt="" src={imgw}  width={300} height={300} loading='lazy'></Image>
    </div>
    <div className={styles.home_two_left_absol_p}><p >جراحات المياة البيضاء بالليزر والفاكو</p></div>

</div>


  </div>
  {/* </div> */}
</section>
</div>
</LazyLoad>
{/* ============== */}
<LazyLoad>

<section className={styles.why_we}  >
<Container style={{maxWidth:"1200px" , padding:"0"}} dir='rtl'>

  <div className={styles.why_we_title} data-aos="fade-down" >
    <h2 className={styles.home_two_h2}>لماذا نحن</h2>
    <p>لأننا نوفر لك العناية الكاملة والتشخيص الجيد، مما يؤدي للبدء في طريق العلاج الصحيح، ودون الوقوع في دوامة المشاكل بسبب التشخيص الخاطئ لأمراض العيون.</p>
    <div className={styles.title_glass}>
    <div><Image alt='p' src={divide} width={40} loading='lazy'></Image></div>
</div>
  </div>
    <Row className={styles.wh_doc_div}>

      <Col lg={8} sm={12} className={styles.col} data-aos="fade-left">
        <section className={styles.wh_doc_div_flex}>
        <div >
         <section className={styles.wh_doc_div_back_img}> <Image alt="" loading='lazy' src={"https://doctor-haleem.com/images/svg/sample2.svg"} width={50} height={50}></Image> </section>
        <h6>متواجدون على مدار اليوم</h6>
        <p>متواجدون على مدار اليوم و جاهزية كاملة لحالات الطوارئ</p>
        </div>
        <div >
         <section className={styles.wh_doc_div_back_img}> <Image alt=""loading='lazy' src={"https://doctor-haleem.com/images/svg/sample.svg"} width={50} height={50}></Image> </section>
        <h6>متواجدون على مدار اليوم</h6>
        <p>متواجدون على مدار اليوم و جاهزية كاملة لحالات الطوارئ</p>
        </div>
        </section>

        <section className={styles.wh_doc_div_flex}>
        <div >
         <section className={styles.wh_doc_div_back_img}> <Image alt=""loading='lazy' src={"https://doctor-haleem.com/images/svg/sample2.svg"} width={50} height={50}></Image> </section>
        <h6>متواجدون على مدار اليوم</h6>
        <p>متواجدون على مدار اليوم و جاهزية كاملة لحالات الطوارئ</p>
        </div>
        <div >
         <section className={styles.wh_doc_div_back_img}> <Image alt=""loading='lazy' src={"https://doctor-haleem.com/images/svg/sample.svg"} width={50} height={50}></Image> </section>
        <h6>متواجدون على مدار اليوم</h6>
        <p>متواجدون على مدار اليوم و جاهزية كاملة لحالات الطوارئ</p>
        </div>
        </section>
      </Col>
      <Col lg={4} sm={12} className={styles.col} data-aos="fade-right">
      <Image alt="" src={img_doc}></Image>
      </Col>
    </Row>
    </Container>

</section>
</LazyLoad>
{/* ======== */}
<LazyLoad height={"100%"} once> 
<section className={styles.bac_h}>
  <div className={styles.bac_h_fle}>


    <div data-aos="fade-down" >
    <i className="fa-solid fa-bookmark"></i>
    <p>الاستشارات الشهرية</p>
    <p>1</p>
    </div>
    <div data-aos="fade-down" >
    <i className="fa-solid fa-bookmark"></i>
    <p>الاستشارات الثانويه</p>
    <p>1</p>
    </div>
    <div data-aos="fade-down" >
    <i className="fa-solid fa-star"></i>
    <p>الجودة</p>
    <p>1</p>
    </div>
    <div data-aos="fade-down">
    <i className="fa-solid fa-user"></i>
    <p>العملاء الراضيين</p>
    <p>1</p>
    </div>
  </div>
</section>
</LazyLoad>
{/* -------------------- */}

<LazyLoad height={"100%"} once> 

<section className={styles.why_we}>
<Container style={{maxWidth:"1200px" ,padding:"0"  }}>

<div className={styles.why_we_title} data-aos="fade-down">
    <h2 className={styles.home_two_h2}> مايميزنا عن غيرنا</h2>
    <p>التميز دائما يبدأ من الاهتمام بالمريض من أول مرحلة في التشخيص والكشف وحتى الوصول للشفاء بفضل الله تعالى، ونتميز باستخدامنا لكافة الطرق العلمية الصحيحة والأجهزة الحديثة في الكشف والتشخيص، ثم استخدام أحدث الطرق العلاجية والأجهزة المناسبة حتى الوصول للشفاء التام بفضل الله تعالى.</p>
<div className={styles.title_glass}>
<Image alt='p' src={divide}loading='lazy'></Image>
</div>
  </div>

    <section className={styles.card_home}>
      {/* <aside data-aos="fade-up">
      <Image alt="card_home" src={gg} width={70} height={70}loading='lazy'></Image>
        <h5> كل العمليات</h5>
    <p>
كافة عمليات الليزك والليزر، وأجهزة مخصصة لكافة العمليات .
</p>
      </aside>
      <aside data-aos="fade-up">
    <Image alt="card_home" src={go0g} width={70} height={70}loading='lazy'></Image>
        <h5> احدث الاساليب العلمية</h5>
    <p>استخدام أحدث الأساليب العلمية والأجهزة في الكشوفات.</p>
      </aside>
      <aside data-aos="fade-up">
      <Image alt="card_home" src={gog} width={70} height={70}loading='lazy'></Image>
        <h5>  الدقة</h5>
    <p>
    دقة في عملية التشخيص لوضع اليد على المشكلة الحقيقية.</p>
      </aside> */}
      <aside data-aos="fade-up">
      <Image alt="card_home" src={gog} width={70} height={70}loading='lazy'></Image>
        <h5>  ارخص الاسعار</h5>
    <p>
    أرخص سعر للعمليات في مصر، ومراعاة الحالات المرضية</p>
      </aside>
      <aside data-aos="fade-up">
      <Image alt="card_home" src={gg} width={70} height={70}loading='lazy'></Image>
        <h5>  الخبرة</h5>
    <p>خبرة كبيرة تمتد لعقود، ونتائج ملموسة ومبهرة.</p>
      </aside>
      <aside data-aos="fade-up">
      <Image alt="card_home" src={go0g} width={70} height={70}loading='lazy'></Image>
        <h5> المتابعة </h5>
    <p>متابعة مع الحالة بشكل مستمر حتى تتم عملية الشفاء بفضل الله.</p>
      </aside>
    </section>

</Container>
</section>
</LazyLoad>
{/* ================== */}
<LazyLoad height={"100%"} once> 

<section  style={{ background:"#eee" ,paddingBottom:"3rem" }}>
<Container style={{maxWidth:"1200px" ,padding:"0" }}>

<div className={styles.why_we_title} data-aos="fade-down">
    <h2 className={styles.home_two_h2}> نصائح طبية</h2>
    <p>هذه مجموعة من النصائح المهمة والتي تعتبر من أهم أسباب انتشار أمراض العين، ولا بد من اتباع تلك النصائح بعناية فائقة لتجنب أمراض العيون.</p>
<div className={styles.title_glass}>
<Image alt='p' src={divide}loading='lazy'></Image>
</div>
  </div>

<section className={styles.card_h}>
  {/* <div data-aos="fade-up">
  <section className={styles.img_wrapper} >
  <Image alt="s"  className={styles.inner_img} src={imgw} objectFit="cover"   loading='lazy'></Image>
  </section>
<section className={styles.card_h_pad}>
  <h5>عمليات الليزك للعيون</h5>
    <h6>الخميس ,01/09/2022 | دكتور محمد عبد الحليم</h6>
    <p>
    عمليات الليزك للعيون ، الليزك هو أكثر جراحات الليزر شيوعًا التي يتم إجراؤها لعلاج قـصر النظر (قصر النظر) ومد البـصر (طول النظر) واللابؤرية. مثل الأنواع الأخرى من الجراحة الانكسارية ، فإن اجراء الليزك يعيد تشكيل القرنية للسماح للضوء الداخل للعين بالتر.....
    </p>
</section>


  </div>
  <div data-aos="fade-up">
  <section className={styles.img_wrapper} >
  <Image alt="s"  className={styles.inner_img} src={imgw} objectFit="cover" loading='lazy' ></Image>
  </section>
<section className={styles.card_h_pad}>
  <h5>عمليات الليزك للعيون</h5>
    <h6>الخميس ,01/09/2022 | دكتور محمد عبد الحليم</h6>
    <p>
    عمليات الليزك للعيون ، الليزك هو أكثر جراحات الليزر شيوعًا التي يتم إجراؤها لعلاج قـصر النظر (قصر النظر) ومد البـصر (طول النظر) واللابؤرية. مثل الأنواع الأخرى من الجراحة الانكسارية ، فإن اجراء الليزك يعيد تشكيل القرنية للسماح للضوء الداخل للعين بالتر.....
    </p>
</section>


  </div>
  <div data-aos="fade-up">
  <section className={styles.img_wrapper} >
  <Image alt="s"  className={styles.inner_img} src={imgw} objectFit="cover" loading='lazy'  ></Image>
  </section>
<section className={styles.card_h_pad}>
  <h5>عمليات الليزك للعيون</h5>
    <h6>الخميس ,01/09/2022 | دكتور محمد عبد الحليم</h6>
    <p>
    عمليات الليزك للعيون ، الليزك هو أكثر جراحات الليزر شيوعًا التي يتم إجراؤها لعلاج قـصر النظر (قصر النظر) ومد البـصر (طول النظر) واللابؤرية. مثل الأنواع الأخرى من الجراحة الانكسارية ، فإن اجراء الليزك يعيد تشكيل القرنية للسماح للضوء الداخل للعين بالتر.....
    </p>
</section>


  </div> */}
  <div data-aos="fade-up">
  <section className={styles.img_wrapper} >
 <Image alt="s"  className={styles.inner_img} src={imgw} objectFit="cover" loading='lazy'  ></Image>
  </section>
<section className={styles.card_h_pad}>
  <h5>عمليات الليزك للعيون</h5>
    <h6>الخميس ,01/09/2022 | دكتور محمد عبد الحليم</h6>
    <p>
    عمليات الليزك للعيون ، الليزك هو أكثر جراحات الليزر شيوعًا التي يتم إجراؤها لعلاج قـصر النظر (قصر النظر) ومد البـصر (طول النظر) واللابؤرية. مثل الأنواع الأخرى من الجراحة الانكسارية ، فإن اجراء الليزك يعيد تشكيل القرنية للسماح للضوء الداخل للعين بالتر.....
    </p>
</section>


  </div>
  <div data-aos="fade-up">
  <section className={styles.img_wrapper} >
  <Image alt="s"  className={styles.inner_img} src={imgw} objectFit="cover" loading='lazy'  ></Image>
  </section>
<section className={styles.card_h_pad}>
  <h5>عمليات الليزك للعيون</h5>
    <h6>الخميس ,01/09/2022 | دكتور محمد عبد الحليم</h6>
    <p>
    عمليات الليزك للعيون ، الليزك هو أكثر جراحات الليزر شيوعًا التي يتم إجراؤها لعلاج قـصر النظر (قصر النظر) ومد البـصر (طول النظر) واللابؤرية. مثل الأنواع الأخرى من الجراحة الانكسارية ، فإن اجراء الليزك يعيد تشكيل القرنية للسماح للضوء الداخل للعين بالتر.....
    </p>
</section>


  </div>
  <div data-aos="fade-up">
  <section className={styles.img_wrapper} >
  <Image alt="s"  className={styles.inner_img} src={imgw} objectFit="cover" loading='lazy'  ></Image>
  </section>
<section className={styles.card_h_pad}>
  <h5>عمليات الليزك للعيون</h5>
    <h6>الخميس ,01/09/2022 | دكتور محمد عبد الحليم</h6>
    <p>
    عمليات الليزك للعيون ، الليزك هو أكثر جراحات الليزر شيوعًا التي يتم إجراؤها لعلاج قـصر النظر (قصر النظر) ومد البـصر (طول النظر) واللابؤرية. مثل الأنواع الأخرى من الجراحة الانكسارية ، فإن اجراء الليزك يعيد تشكيل القرنية للسماح للضوء الداخل للعين بالتر.....
    </p>
</section>


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
</LazyLoad>
{/* ================================ */}
<LazyLoad height={"100%"} once> 

<div className={styles.photo}>
  <div className={styles.photo_filter}></div>
<Container style={{maxWidth:"1200px" ,padding:"0"}}>
<div className={styles.photo_flex}>

  <h2 data-aos="fade-down">  معرض صور</h2>
   <p data-aos="fade-down">معرض صور مركز الدكتور محمد عبد الحليم</p>
  <div >

  <nav data-aos="fade-up"><Image alt="d" src={shada} loading='lazy'></Image></nav>
  <nav data-aos="fade-up"><Image alt="d" src={shada} loading='lazy'></Image></nav>
  <nav data-aos="fade-up"><Image alt="d" src={shada} loading='lazy'></Image></nav>
  <nav data-aos="fade-up"><Image alt="d" src={shada} loading='lazy'></Image></nav>
  <nav data-aos="fade-up"><Image alt="d" src={shada} loading='lazy'></Image></nav>
  <nav data-aos="fade-up"><Image alt="d" src={shada} loading='lazy'></Image></nav>

  </div>
</div>

  </Container>

</div>
</LazyLoad>
{/* ======================== */}
<LazyLoad height={"100%"} once> 

<section  style={{ background:"#eee" }}>
<Container style={{maxWidth:"1200px" ,padding:"0" }}>

<div className={styles.why_we_title} data-aos="fade-down">
    <h2 className={styles.home_two_h2}> فيديو العمليات</h2>
    <p>مجموعة من فيديوهات مركز الدكتور محمد عبد الحليم</p>
<div className={styles.title_glass}>
<div><Image alt='p' src={divide}loading='lazy'></Image></div>
</div>
  </div>


  <section className={styles.card_video}>
  <aside data-aos="fade-up">
      <section className={styles.c_iframe}>
      {/* <iframe src="https://www.youtube.com/embed/Kch8n4tcOZQ" allowFullScreen={true} ></iframe> */}
</section>
    <p>
      افضل دكتور عيون في المحلة دكتور محمد عبدالحليم- انظر الفارق قبل وبعد العملية
</p>
      </aside>
      <aside data-aos="fade-up">
      <section className={styles.c_iframe}>
      {/* <iframe src="https://www.youtube.com/embed/Kch8n4tcOZQ" allowFullScreen={true} ></iframe> */}

</section>
    <p>
      افضل دكتور عيون في المحلة دكتور محمد عبدالحليم- انظر الفارق قبل وبعد العملية
</p>
      </aside>
      <aside data-aos="fade-up">
      <section className={styles.c_iframe}>
      {/* <iframe src="https://www.youtube.com/embed/Kch8n4tcOZQ" allowFullScreen={true} ></iframe> */}

</section>
    <p>
      افضل دكتور عيون في المحلة دكتور محمد عبدالحليم- انظر الفارق قبل وبعد العملية
</p>
      </aside>
      <aside data-aos="fade-up">
      <section className={styles.c_iframe}>
      {/* <iframe src="https://www.youtube.com/embed/Kch8n4tcOZQ" allowFullScreen={true} ></iframe> */}
  
</section>
    <p>
      افضل دكتور عيون في المحلة دكتور محمد عبدالحليم- انظر الفارق قبل وبعد العملية
</p>
      </aside>
      <aside data-aos="fade-up">
      <section className={styles.c_iframe}>
      {/* <iframe src="https://www.youtube.com/embed/Kch8n4tcOZQ" allowFullScreen={true} ></iframe> */}

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
</LazyLoad>
{/* ------------- */}
<LazyLoad height={"100%"} once> 

<section >
<Container style={{maxWidth:"1200px" ,padding:"0" }} dir='rtl'>

<div className={styles.why_we_title}>
    <h2 className={styles.home_two_h2}> صفحتنا علي فيس بوك</h2>
  <div className={styles.title_glass}>
    <div>
    <Image alt='p' src={divide}loading='lazy'></Image>
    </div>
  </div>
  </div>

<section className={styles.face_page} data-aos="fade-left">
    <div className={styles.right}>
    <h6>تواصل معنا عبر صفحتنا علي فيس بوك</h6>
    <p>تواصل معنا عبر صفحتنا على الفيسبوك وتعرف على كل جديد، أو أترك لنا رسالة وسنقوم بالتواصل معك عبر فيسبوك.</p>
    <button> تواصل معنا
    </button>
    </div>
    <div className={styles.left} data-aos="fade-right">
            <div className={styles.Facebook_iframe_container}>
                  <iframe
                      src="https://www.facebook.com/example-page" 
                    style={{ width: "300px", height: "500px" }}
                    scrolling="no"
                    frameBorder="0"
                    // allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Facebook"
                  />
                </div>
    
    </div>
</section>

</Container>

{/* =================== */}
<section className={styles.number} data-aos="fade-up">

<div className={styles.why_we_title}>
    <h2 className={styles.home_two_h2}> مايميزنا عن غيرنا</h2>
    <p>التميز دائما يبدأ من الاهتمام بالمريض من أول مرحلة في التشخيص والكشف وحتى الوصول للشفاء بفضل الله تعالى، ونتميز باستخدامنا لكافة الطرق العلمية الصحيحة والأجهزة الحديثة في الكشف والتشخيص، ثم استخدام أحدث الطرق العلاجية والأجهزة المناسبة حتى الوصول للشفاء التام بفضل الله تعالى.</p>
<div className={styles.title_glass}>
<Image alt='p' src={divide}loading='lazy'></Image>
</div>
  </div>
</section>
{/* ------------ */}
<Map />
{/* ------------- */}






</section>
</LazyLoad>
<LazyLoad>

<section className={styles.number} data-aos="fade-up">
    <h4>تواصل معنا الأن واحجز موعد كشفك التالي واحصل على افضل خدمة طبية</h4>
    <p>+201148004734</p>
    <button className={styles.button}>
    <span className={styles.button_lg}>
        <span className={styles.button_sl}></span>
        <span  className={styles.button_text}> تواصل معنا</span>
    </span>
</button>
</section>
</LazyLoad>
<LazyLoad height={"100%"} once> 

<div className={styles.icon_relative} data-aos="fade-up">
<div  className={styles.icon_relative_facebook}>
<i className="fa-brands fa-facebook-messenger"></i>
</div>
<div  className={styles.icon_relative_phone}>
<i className="fa-solid fa-phone"></i>
</div>
</div>
</LazyLoad>
<div >
      {showButton && (
        <div className={styles.acroll_up}
          onClick={handleButtonClick}>
          <i className="fa-solid fa-angle-up"></i>
        </div>
      )}
    </div>


{/*  */}












    </>
  )
}

export default Home;
