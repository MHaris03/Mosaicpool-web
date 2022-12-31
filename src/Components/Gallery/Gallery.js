import React, { Component } from 'react';
import Header from '../../BussinesLogistic/Navbar/Navbar';
import Footer from '../Footer/Footer';
import './gallery.css';
import Banner from '../../Images/banner1.png';
import img1 from '../../Images/pp1.jpg';
import img2 from '../../Images/pp2.jpg';
import img3 from '../../Images/pp3.jpg';
import img4 from '../../Images/33.JPG';
import img5 from '../../Images/172.JPG';
import img6 from '../../Images/77.JPG';
import img7 from '../../Images/12.jpg';
import img8 from '../../Images/photo6.jpg';
import img9 from '../../Images/photo5.jpg';
import img10 from '../../Images/pool img1.jpg';
import img12 from '../../Images/pool img2.jpg';
import img13 from '../../Images/pool img 3.jpg';
import img14 from '../../Images/pool img 4.jpg';
import img15 from '../../Images/pool img 5.jpg';
import img16 from '../../Images/pool img 6.jpg';
import img17 from '../../Images/01.jpg';
import img18 from '../../Images/02.jpg';
import img19 from '../../Images/03.jpg';
import img20 from '../../Images/05.jpg';
import img21 from '../../Images/06.jpg';
import img22 from '../../Images/07.jpg';
import img23 from '../../Images/08.jpg';
import img24 from '../../Images/09.jpg';
import img25 from '../../Images/010.jpg';
// import img9 from '../../Images';
import { useTranslation } from 'react-i18next'
//class About extends Component {
  //  render()
  const About = () =>
     {
		const { t } = useTranslation(["sidebar"]);
        return (
            <React.Fragment>
                <Header/>
	
<div class="container gallery-container">
<img className='img-fluid' src={Banner} alt="baner" />
<h1>{t("اعمالنا")}</h1>

{/* <p class="page-description text-center">Fluid Layout With Overlay Effect</p> */}

<div class="tz-gallery">

	<div class="row">

		<div class="col-sm-12 col-md-4">
			<a class="lightbox" href="">
				<img src={img1} alt="Tiles"/>
			</a>
		</div>
		<div class="col-sm-6 col-md-4">
			<a class="lightbox" href="">
				<img src={img2} alt="Tiles"/>
			</a>
		</div>
		<div class="col-sm-6 col-md-4">
			<a class="lightbox" href="">
				<img src={img3} alt="Tiles"/>
			</a>
		</div>
		<div class="col-sm-6 col-md-4">
			<a class="lightbox" href="">
				<img src={img4} alt="Tiles"/>
			</a>
		</div>
		<div class="col-sm-6 col-md-4">
			<a class="lightbox" href="">
				<img src={img5}alt="Tiles"/>
			</a>
		</div> 
		<div class="col-sm-6 col-md-4">
			<a class="lightbox" href="">
				<img src={img6} alt="Tiles"/>
			</a>
		</div>
		{/* <div class="col-sm-6 col-md-4">
			<a class="lightbox" href="">
				<img src={img7} alt="Tiles"/>
			</a>
		</div> */}
		{/* <div class="col-sm-6 col-md-4">
			<a class="lightbox" href="">
				<img src={img8} alt="Tiles"/>
			</a>
		</div>
		<div class="col-sm-6 col-md-4">
			<a class="lightbox" href="">
				<img src={img9} alt="Tiles"/>
			</a>
		</div> */}
		<div class="col-sm-6 col-md-4">
			<a class="lightbox" href="">
				<img src={img10} alt="Tiles"/>
			</a>
		</div>
		<div class="col-sm-6 col-md-4">
			<a class="lightbox" href="">
				<img src={img12} alt="Tiles"/>
			</a>
		</div>
		<div class="col-sm-6 col-md-4">
			<a class="lightbox" href="">
				<img src={img13} alt="Tiles"/>
			</a>
		</div>
		<div class="col-sm-6 col-md-4">
			<a class="lightbox" href="">
				<img src={img14} alt="Tiles"/>
			</a>
		</div>
		<div class="col-sm-6 col-md-4">
			<a class="lightbox" href="">
				<img src={img15} alt="Tiles"/>
			</a>
		</div>
		<div class="col-sm-6 col-md-4">
			<a class="lightbox" href="">
				<img src={img16} alt="Tiles"/>
			</a>
		</div>
		<div class="col-sm-6 col-md-4">
			<a class="lightbox" href="">
				<img src={img17} alt="Tiles"/>
			</a>
		</div>
		<div class="col-sm-6 col-md-4">
			<a class="lightbox" href="">
				<img src={img18} alt="Tiles"/>
			</a>
		</div>
		<div class="col-sm-6 col-md-4">
			<a class="lightbox" href="">
				<img src={img19} alt="Tiles"/>
			</a>
		</div>
		<div class="col-sm-6 col-md-4">
			<a class="lightbox" href="">
				<img src={img20} alt="Tiles"/>
			</a>
		</div>
		<div class="col-sm-6 col-md-4">
			<a class="lightbox" href="">
				<img src={img21} alt="Tiles"/>
			</a>
		</div>
		<div class="col-sm-6 col-md-4">
			<a class="lightbox" href="">
				<img src={img22} alt="Tiles"/>
			</a>
		</div>
		<div class="col-sm-6 col-md-4">
			<a class="lightbox" href="">
				<img src={img23} alt="Tiles"/>
			</a>
		</div>
		<div class="col-sm-6 col-md-4">
			<a class="lightbox" href="">
				<img src={img24} alt="Tiles"/>
			</a>
		</div>
		<div class="col-sm-6 col-md-4">
			<a class="lightbox" href="">
				<img src={img25} alt="Tiles"/>
			</a>
		</div>

	</div>

</div>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.js"></script>
<script>
baguetteBox.run('.tz-gallery');
</script>
    <Footer/>

            </React.Fragment>
        )
    }

export default About;