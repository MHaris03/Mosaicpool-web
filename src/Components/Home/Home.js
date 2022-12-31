import React from 'react';
import './Home.css';
import Navbar from '../../BussinesLogistic/Navbar/Navbar'; 
import Slider from '../../BussinesLogistic/Slider/Slider';
import Products from '../Products/Products';
import Footer from '../Footer/Footer';
import Banner from '../../Images/banner2.png';
//class Home extends Component {

  //  render() 
  const Home = () =>
  {
        return (
            <React.Fragment>
                <Navbar/>
                
                <Slider/>
                <br></br>
                <div style={{margin:"auto",textAlign:"center"}}>
                <img    
                    className='img-fluid' 
                    src={Banner} alt="banner"
                />
                </div>
                <Products/>
                <Footer/>
            </React.Fragment>
        )
    }

export default Home;