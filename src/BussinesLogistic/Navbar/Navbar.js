import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import '../../Components/Cart/Cart';
import { Link } from 'react-router-dom';
import Logo from '../../Images/mosaic pool-05.png';
import './navbar.css';
import Carttrolly from "../../Images/cartrrolley.svg"
import Twittericn from "../../Images/twtr.svg"
import Instagram from "../../Images/instagram.svg"
import Snapchat from "../../Images/snapchat.svg"

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
            <div className='container-fluid top__bar'>
                <div class="col-md-6 .offset-md-6 text-center text-sm-left mb-1 mb-lg-0">
                    <div class="d-inline-flex align-items-center">
                        <a class="text-white px-3" href="">+966 55 740 4034</a>
                        <span class="text-white" id="mobilesettings">|</span>
                        <a class="text-white pl-3" href="" id="mobilesettings">Save Up To 40% on First Buy !!</a>
                    </div>
                </div>
                <div class="col-md-6 text-center text-sm-right">
                    <div class="d-inline-flex align-items-center">
                        <a class="text-white px-3" href="https://www.snapchat.com/add/vip_mosaicpools?share_id=QzI4NDYw&locale=ar_SA@calendar=gregorian;numbers=latn" target="_blank">
                            {/* <i class="fab fa-snapchat"></i> */}
                            <img src={Snapchat}/>
                        </a>
                        <a class="text-white px-3" href="https://twitter.com/vip_mosaicpools?s=11&t=u-Lfg0RgX6i3NMzsdj-j0Q" target="_blank">
                            {/* <i class="fab fa-twitter"></i> */}
                            <img src={Twittericn}/>
                        </a>
                        <a class="text-white px-3" href="https://www.instagram.com/vip_mosaicpools/?igshid=YmMyMTA2M2Y%3D" target="_blank">
                            {/* <i class="fab fa-instagram"></i> */}
                            <img src={Instagram}/>
                        </a>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg py-0" >
                <div class="container-fluid">
                    <div className='container'>
                        <a class="navbar-brand" href="/"><img className='img-fluid' src={Logo} alt="logo" id="Logo_web" /></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <img class="navbar-toggler-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAFJJREFUSEtjZKAxYKSx+QyjFhAMYfoHkcaMN/8JOguPghsZIiiOxvABzS2gxPXY9NI/DmjuA5rHAc0toHkQDX0LaB4HNLdg6MfBqA/QQ4DmpSkAcbYYGW5ncyAAAAAASUVORK5CYII=" />
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
                                <div class="col-md-2" >
                                    <div class="d-flex d-none d-md-flex flex-row align-items-center">
                                        <Link to="/View/CartView">
                                            <div className="cart-icon">
                                                <div className='menu_spann2'>
                                                    {/* <i class='bx bxs-shopping-bag'></i> */}
                                                    <img src={Carttrolly} alt='cart'/>
                                                    <p>{props.Productlistlength.length}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                {/* <l1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</l1> */}
                                <l1 style={{marginLeft: "15px"}}>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAxhJREFUaEPtmE9SGkEUxr/HWNFdtOysg4uUsAqeIHoCzQmiK4dV8AR6A3UFZhM8QfAEkhPIjnElbOOkMKtolfBSLQxCD+N0D1NMSGaWVPfj/b73p/s1Yc4/mnP/kQIkHcFYI7BecbcB3iRQgUHLBC4MAFsAWgxuAFS/tsVFXOBTA+TKnSyoewhg18CpFoir968WTlt7K3cG+3xLpwLInd0eMlOJgOUoTjBwR4SSsy/Oo+yXeyIBZL92lhcfepcjKRL1/719VccWe1GMGAO8+/KjkOllLieqzmgTocbMNWCh5RRXZO5D7lngTJZ72AFhB8Br1VkGNR4WM1umKWUE0Fe+e+NzntEGcOQURVVHxVz59ghEJRVEQlzbqxs6Nrw12gBBaUPAxe9Fa9dUuX7xP9YAej/qMAGnTVtIOK1PGyBfcU8Y+DxmlXHuFIVJ9xnbLkVZenis+yAIH5v7oqZDoAUwaJU3cTrv2QqAaDm2WIsRwK2C8GlokNG+X7IKpmkT5JAscquXuVIE2tOpqdAI9BXqdqIY11HQW5MrKyIBWlEIBcifuTvM+DaqvlMUWRPndNZOTlNrzWvFQTZCAVRlTLuEjvPemnzFrTGwPWyRRAfN/dWTl2zoANRB+PAcAd5yim/qJo7prs2f/Swx8/FIj79o2kIefIFfOEDFld3nOWU4PKy6DqvrcuXbTRBdjqTrd6coNqcF4FEDji1CoaMCqA1DXvaubbEyNwDS0VzFNRIsVE1Tg1HVH7bTFECRcC4jIA8Vpu4xAXKmHTu0vCKeFixov/p7f5ZGg9g6mHSo+Wpg4PxV0JiYAMBTTjyNn2xtqBA+APU0VIsyKQDph5w91IPNB7BecTsvDelJAsh0Uq/Z/hRS2tjfFAHpi3qQpgBehEyvGAZdaCwJ0ggkXMRpDQwVmOFJ/P/VgHzu9r1dqt0mkQgw2uqDwr93lRg8bzSCopBgF/oFtgqhl7mnsa7cyRJ1T5hRAOHtpJl4ZinUf7JvMFslrev0tCPhrPeHzsSzdsj0/1IAU8XiXp9GIG5FTe2lETBVLO71fwA+tBlPunjydAAAAABJRU5ErkJggg==" />
                                </l1>
                                <l1 >
                                    <p> <b>Call Us 24x7</b></p>
                                    <p>〖 +966 59 099 1616 〗</p>

                                </l1>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <section class="header-main border-bottom">
                <div class="container-fluid">
                    <div class="row p-2 pt-3 pb-3 d-flex align-items-center">
                        <div class="col-md-2" id="category_colunm">
                            <div className='menu_spann'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAFJJREFUSEtjZKAxYKSx+QyjFhAMYfoHkcaMN/8JOguPghsZIiiOxvABzS2gxPXY9NI/DmjuA5rHAc0toHkQDX0LaB4HNLdg6MfBqA/QQ4DmpSkAcbYYGW5ncyAAAAAASUVORK5CYII=" /></div>
                            <div class="dropdown">
                                <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Category
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Tile 1</a>
                                    <a class="dropdown-item" href="#">Tile 2</a>
                                    <a class="dropdown-item" href="#">All Tiles</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="d-flex form-inputs">
                                <input class="form-control" type="text" placeholder="Search ..." />
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAqBJREFUaEPtmU9y0zAUxr/nzIAtL8gRCnuGMLBvb0DZwJL0BE0XcAhYACcgLGFDeoL2AHQowx64AStLbmbQYxTiEhw7UmzLcWbirf6899P3nvRkEbb8oy33HzuATSvopIAQ4pCZj0E0ANCv4zQBYynlUZ05FsdaAWbOA5+aMmjmaRLCChBF0TmI9psEaBLCDiAEN+18Nl8TSmwUoAklNg5QF6ITAHUgOgNQFaJTAFUgOgewLkQnAdaB6CyAK0SnAQyEknKljzuAfJlBwHtNdN4DLpMkuTTtcRwPfgMDYj4E8Gid0qRNBU5Z61Gapj9XORiG4R4FwRtXkHYAmE+UUsYp5y+KohGIXtsG+Aeo4HzmtAuEb4BTJaWJ6/++KI6fg/kpgLvzhm8g+qCS5NVSXyEmq8LJKwBrfXsx5sMwvENB8BHAg5LQuGCtn6Rp+j1rn+fEj7JQ8gZgdhsp5XDRcCTE5xXOZ10vlJQPc+NKVfAGwERHaZKMr+P5b9i8tCXlrJ3oxWI4hXE8JOZ3RWO9AQRE97N93hh2XP1CFcw5oZm/tAqQX5lIiCsAN5wUAKZKypu5MCq8e3tToEmAfr/fv5pOf7WqQJMhFIbhAQXBWasAW5/EAJYOMcdEXt5Go+gMRAetKmCMNXGQrdqBjA1vSTxfrYmS8nGtUsJS1PkGAGoUcxm4EGLMwLPWQ+jaIPNIKfXW8Qwo7FYG4V+Bf+5MWOsT24VmFvNa7xcBF0G0CZChTJho0gO+mlLDHFJpmt5Dr7dHWg+z3absz3QeYhMAzpHkAtFpgFlhWvLklCnReQAbRP7OkZfX/l/I0xNTgSOVHv+sAD4e+cqSpMqTkxXAGJs/s46YaEDALecsrdBxXQgngAp+tDZkB9DaUpcY2noF/gCZabxAe/wFVgAAAABJRU5ErkJggg==" />
                            </div>
                        </div>
                        <div class="col-md-2" id="cart_box_handle">
                            <div class="d-flex d-none d-md-flex flex-row align-items-center">
                                <Link to="/View/CartView">
                                    <div className="cart-icon">
                                        <div className='menu_spann2'>
                                            <i class='bx bxs-shopping-bag'></i>
                                            <p>{props.Productlistlength.length}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </React.Fragment >
    )
}
const mapStateToprops = state => ({
    Productlistlength: state.Reducer.todoList,
})
export default connect(mapStateToprops)(Navbar);