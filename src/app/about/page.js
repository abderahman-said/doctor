"use client"
import { useRef} from 'react';

import Image from "next/image";
import { Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import styles from "../page.module.css"
import docto from "../../../public/img/doctor-image1.png";

function About() {
  const playRef = useRef(null);
  const images = [
    {
      original: "https://doctor-haleem.com/images/cv/cv11.jpeg",
      thumbnail: "https://doctor-haleem.com/images/cv/cv11.jpeg",
    },
    {
      original: "https://doctor-haleem.com/images/cv/cv1.jpeg",
      thumbnail: "https://doctor-haleem.com/images/cv/cv1.jpeg",
    },
  
  ];
  return (
   <>
   <Container style={{maxWidth:"1200px" ,paddingTop:'4rem'}} dir='rtl'>
 <section className={styles.about}>
<div className={styles.about_right}>
<Image alt="z" src={docto} width={350} height={400} loading='lazy'></Image>
<h3>دكتور محمد عبد الحليم</h3>
<h6>استشاري اول العيون و الشبكية</h6>
<div>
<i className="fa-solid fa-phone"></i>
<h5> رقم الهاتف : <span>    201148004734 +</span> </h5>
</div>
<p>الدكتور محمد عبد الحليم واحد من بين أفضل أطباء العيون بالمحلة بكالوريوس طب وجراحة العيون جامعة المنصورة2002 استشاري جراحة المياه البيضاء بالليزر</p>

<ImageGallery
          ref={playRef}
          items={images}
          showThumbnails={true}
          showFullscreenButton={true}
          showPlayButton={true}
          autoPlay={true}
          infinite={true}
        />



</div>
<div className={styles.about_left}>
<div>
<h2>عن الدكتور</h2>
<p>الدكتور محمد عبد الحليم واحد من بين أفضل أطباء العيون بالمحلة، والآن لا تقم بالكثير من البحث عن افضل دكتور عيون في المحلة، بل تواصل معنا عبر أرقام العيادات الخاصة بنا للحجز، ويمكنك الاستفسار عن كافة أنواع العمليات التي نقوم بها، كما يمكنك التواصل معنا عبر الموقع، أو عبر صفحة الفيس بوك. عنوان العيادة موجود بالموقع ويمكنك زيارة العيادة للحجز مباشرة أو الاتصال على الرقم ومعرفة مواعيد الحجوزات المتاحة، كما نتمنى أن نكون عند حسن ظنك، وأن نقدم لكم أفضل الطرق العلاجية والرعاية ونتائج رائعة لصحة عيونكم.</p>
</div>
<div className={styles.about_left_fle}>
<div >
<h2>الشهادات </h2>
<ul>
<li>بكالوريوس طب وجراحة العيون جامعة المنصورة2002</li>
<li>ماجيستير طب وجراحة العيون جامعة القاهرة 2008</li>
<li>زمالة طب وجراحة العيون 2010</li>
</ul>
</div>
<div>
<h2>التعليم </h2>
<ul>
<li>استشاري اول جراحة المياه البيضاء بالليزر</li>
<li>استشاري اول جراحة الشبكية و الجسم الزجاجي
</li>
<li>استخدام الليزر في جميع مجالات العيون
</li>
</ul>
</div>
</div>
<div >
<h2>مجالات الخبرة </h2>
<ul>
<li>شهادة استشاري الليزر واجازة استخدام الليزر في مجال العيون و الشبكية من معهد الليزر القومي جامعة القاهرة</li>
<li>استشاري اول بنقابة الاطباء القاهرة</li>
<li>مدير مركز المنار للعيون بالمحلة
</li>
<li>عضو الجمعية الاوروبية لتصحيح الابصار و زرع العدسات
</li>
</ul>
</div>
</div>

</section>
</Container>


   </>
  )
}
export default  About;