import React, {useEffect } from 'react';
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import '../../Components/Cart/Cart';
import { Link } from 'react-router-dom';
import Logo from '../../Images/mosaic pool-05.png';
import './navbar.css';
//class Navbar extends Component {
// render() 
const Navbar = (props) => {
    const { i18n, t } = useTranslation(["sidebar"]);

    useEffect(() => {
        if (localStorage.getItem("i18nextLng")) {
            i18next.changeLanguage("en");
        }
    }, []);

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };
    return (
        <React.Fragment>

            <nav class="navbar navbar-expand-lg navbar-dark py-0" >
                <div class="container">
                    <a class="navbar-brand" href="/"><img className='img-fluid' src={Logo} alt="logo" id="Logo_web" /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav ml-auto py-0">
                        <li class="nav-item">
                                <Link class="nav-link" to="/ContactUs">{t("اتصل بنا")}</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Gallery">{t("اعمالنا")}</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/About">{t("من نحن")}</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">{t("الرئيسية")}
                                    <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link class="nav-link" to="/Components/Product">{t("المنتجات")}</Link>
                            </li> */}
                            
                           
                            {/* <div id='item_lang'>

                                <select class="navbar navbar-expand-lg navbar-dark bg-dark"
                                    value={localStorage.getItem("i18nextLng")}
                                    onChange={handleLanguageChange}
                                    id='languagebtn'
                                >
                                    <option value="en" >English</option>
                                    <option value="ar" >Arabic</option>
                                </select>
                            </div> */}
                            <l1>
                                <Link to="/View/CartView">
                                    <div className="cart-icon">
                                    <svg style={{color: "#E4B475"}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16"> 
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" fill="#dfa24e"></path> </svg>
                                        <p>{props.Productlistlength.length}</p>
                                    </div>
                                </Link>
                            </l1>
                        </ul>
                    </div>
                </div>
            </nav>


            {/* <nav class="navbar navbar-expand-lg ">
                <div class="container">
                    <a class="navbar-brand" href="/"><img src={Logo} alt="logo" id="Logo_web" /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarResponsive" aria-controls="navbarResponsive"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">

                            <li class="nav-item">
                                <Link class="nav-link" to="/">{t("الرئيسية")}
                                    <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Components/Gallery">{t("اعمالنا")}</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Components/About/About">{t("من نحن")}</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Components/ContactUs">{t("تواصل معنا")}</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Components/Product">{t("المنتجات")}</Link>
                            </li>
                            <div id='item'>

                                <select class="navbar navbar-expand-lg navbar-dark bg-dark"
                                    value={localStorage.getItem("i18nextLng")}
                                    onChange={handleLanguageChange}
                                    id='languagebtn'
                                >
                                    <option value="en" >English</option>
                                    <option value="ar" >Arabic</option>
                                </select>
                            </div>
                            <l1>
                                <Link to="/View/CartView">
                                    <div className="cart-icon">
                                        <i class="fas fa-cart-plus fa-2x"></i>
                                        <p>{props.Productlistlength.length}</p>
                                    </div>
                                </Link>
                            </l1>
                        </ul>

                    </div>

                </div>
            </nav> */}

        </React.Fragment>
    )
}


const mapStateToprops = state => ({
    Productlistlength: state.Reducer.todoList,
})
export default connect(mapStateToprops)(Navbar);