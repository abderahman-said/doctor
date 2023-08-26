"use client"
import { useState , useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from "../app/page.module.css"
import img from "../../public/img/ll.png"
import Image from 'next/image';
import Link from 'next/link';

const OffCanvasExample = ({ name, ...props }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 500) {
        document.getElementById("top_nav").style.top="0"
        document.getElementById("top_nav").style.position="fixed"
      } else {
        document.getElementById("top_nav").style.position="relative"

      }
      
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
  return (
    <div>
          <section className={styles.p_nav_top} >


<div dir='rtl' className={styles.nav_flex_top} >
<Image alt="" src={img} width={100}></Image>
  <div >
    <div className={styles.nav_flex_top_div}>
      <i className="fa-solid fa-square-phone-flip"></i>
      <h6> اتصل بنا</h6>
    </div>
  <p>201148004734 +</p>

  </div>
   <div >
    <div  className={styles.nav_flex_top_div}>
      <i className="fa-solid fa-location-dot"></i>
      <h6>  العنوان </h6>
    </div>
  <p>مصر - المحلة الكبرى - ميدان الشون - برج شركة الغاز الطبيعي - أعلى مطعم حضرموت</p>
  </div>
  <div >
    <div className={styles.nav_flex_top_div}>
    <i className="fa-regular fa-clock"></i>
      <h6>  مواعيد العمل </h6>
    </div>
  <p>18:00 - 22:00 كل الايام عدا الجمعة</p>
  </div>
</div>


</section>
{/* =================== */}
<Navbar  expand="lg" dir='rtl' id='top_nav' className={styles.b_nav}>


          <section className={styles.nav_flex}>

          <Link href={"/"}>
          <h6>الرئيسية</h6>
        </Link> 
        <Link href={"/about"}>
        <h6>عن الدكتور</h6>
        </Link> 
        <Link href={"/photo"}>
        <h6>صور واعمال</h6>
        </Link> 
        <Link href={"/article"}>
        <h6>المقالات</h6>
        </Link> 
        <Link href={"/video"}>
        <h6>فيديو عمليات</h6>
        </Link> 
        <Link href={"/callme"}>
        <h6> اتصل بنا</h6>
        </Link> 
      
      
      
      
      
<button className={styles.button_nav}>
<p>حجز ميعاد</p>
</button>
<i className="fa-brands fa-facebook"></i>
    </section>
    <Button variant="primary" onClick={handleShow} className={styles.but_mobile}>
<i className="fa-solid fa-bars-staggered"></i>
      </Button>
</Navbar>





      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <section className={styles.nav_flex_mobile} >
       <Image alt="" src={img} width={250}></Image>

<h6>الرئيسية</h6>
<h6>عن الدكتور</h6>
<h6>صور واعمال</h6>
<h6>المقالات</h6>
<h6>فيديو عمليات</h6>
<h6> اتصل بنا</h6>
</section>
        </Offcanvas.Body>
      </Offcanvas>


{/* ===== */}


    </div>
  )
}

function Example() {
  return (
    <>
      {[ 'end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}
export default Example;

