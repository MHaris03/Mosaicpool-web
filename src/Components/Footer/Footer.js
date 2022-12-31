import React, { Component } from 'react';
import LabelText from '../../BussinesLogistic/labelText/LabelText';
import { useTranslation } from 'react-i18next';
import Logo from '../../Images/mosaic pool-05.png';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
    const { t } = useTranslation(["sidebar"]);
    return (
        <React.Fragment>


            <div class="pg-footer">
                <footer class="footer">
                    <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
                        <path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
                    </svg>
                    <div class="footer-content">
                        <div class="footer-content-column">
                            <div class="footer-logo">
                                <a class="footer-logo-link" href="#">
                                    <span class="hidden-link-text">LOGO</span>
                                    <img src={Logo} alt="logo" id="Logo_web" />
                                </a>
                            </div>
                            <div class="footer-menu">
                                <h2 class="footer-menu-name"> انضم معنا</h2>
                            </div>
                        </div>
                        {/* <div class="footer-content-column">
                            <div class="footer-menu">
                                <h2 class="footer-menu-name"> Company</h2>
                                <ul id="menu-company" class="footer-menu-list">
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="#">Contact</a>
                                    </li>
                                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                                        <a href="#">News</a>
                                    </li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="#">Careers</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="footer-menu">
                                <h2 class="footer-menu-name"> Legal</h2>
                                <ul id="menu-legal" class="footer-menu-list">
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                                        <a href="#">Privacy Notice</a>
                                    </li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="#">Terms of Use</a>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        <div class="footer-content-column">
                            <div class="footer-menu">
                                <div id="newsspec-19854-app" class="news-app-promo">
                                    <div class="news-app-promo-text">
                                        <div class="news-app-promo-text__download">حمل التطبيق</div><br></br>
                                    </div>
                                    <div class="news-app-promo__section">
                                        <div class="news-app-promo-subsection">

                                            <a class="news-app-promo-subsection--link news-app-promo-subsection--playstore"
                                                href="https://play.google.com/store/apps/details?id=com.vip_mosaic_pool" target="blank">
                                                <img class="news-app-promo__play-store" src="//news.files.bbci.co.uk/include/newsspec/19854/assets/app-project-assets/google_play_store.svg"
                                                    width="161" height="auto" border="0" />
                                            </a>

                                            <a class="news-app-promo-subsection--link news-app-promo-subsection--appstore"
                                                href="https://apps.apple.com/app/vip-mosaic-pools/id6443528459" target="blank">
                                                <img class="news-app-promo__app-store" src="//news.files.bbci.co.uk/include/newsspec/19854/assets/app-project-assets/ios_app_store.svg" 
                                                width="161" height="auto" border="0" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="news-app-promo__section">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="footer-content-column">
                            <div class="footer-call-to-action">
                                <h2 class="footer-call-to-action-title"> Let's Chat</h2>
                                <p class="footer-call-to-action-description">للمزيد من الاستفسارات</p>
                                <a class="footer-call-to-action-button button" href="#" target="_self"> Get in Touch </a>
                            </div>
                            <div class="footer-call-to-action">
                                <h2 class="footer-call-to-action-title">تواصل معنا</h2>
                                <p class="footer-call-to-action-link-wrapper"> <a class="footer-call-to-action-link" href="tel:+966 55 740 4034" target="_self"> +966 55 740 4034 </a></p>
                                <p class="footer-call-to-action-link-wrapper"> <a class="footer-call-to-action-link" href="tel:+966 59 099 1616" target="_self"> +966 59 099 1616 </a></p>
                            </div>
                        </div>
                        <div class="footer-social-links"> <svg class="footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
                            <path class="footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"></path>
                        </svg>
                            <a class="footer-social-link linkedin" href="https://twitter.com/vip_mosaicpools?s=11&t=u-Lfg0RgX6i3NMzsdj-j0Q" target="_blank">
                                <span class="hidden-link-text">Twitter</span>
                                <svg style={{ color: "white" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" fill="white"></path> </svg>
                            </a>
                            <a class="footer-social-link twitter" href="https://instagram.com/vip_mosaicpools?igshid=YmMyMTA2M2Y=" target="_blank">
                                <span class="hidden-link-text">Instagram</span>
                                <svg style={{ color: "white" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" fill="white"></path> </svg>
                            </a>
                            <a class="footer-social-link youtube" href="https://www.snapchat.com/add/vip_mosaicpools?share_id=QzI4NDYw&locale=ar_SA@calendar=gregorian;numbers=latn" target="_blank">
                                <span class="hidden-link-text">Snapchat</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-snapchat" viewBox="0 0 16 16"> <path d="M15.943 11.526c-.111-.303-.323-.465-.564-.599a1.416 1.416 0 0 0-.123-.064l-.219-.111c-.752-.399-1.339-.902-1.746-1.498a3.387 3.387 0 0 1-.3-.531c-.034-.1-.032-.156-.008-.207a.338.338 0 0 1 .097-.1c.129-.086.262-.173.352-.231.162-.104.289-.187.371-.245.309-.216.525-.446.66-.702a1.397 1.397 0 0 0 .069-1.16c-.205-.538-.713-.872-1.329-.872a1.829 1.829 0 0 0-.487.065c.006-.368-.002-.757-.035-1.139-.116-1.344-.587-2.048-1.077-2.61a4.294 4.294 0 0 0-1.095-.881C9.764.216 8.92 0 7.999 0c-.92 0-1.76.216-2.505.641-.412.232-.782.53-1.097.883-.49.562-.96 1.267-1.077 2.61-.033.382-.04.772-.036 1.138a1.83 1.83 0 0 0-.487-.065c-.615 0-1.124.335-1.328.873a1.398 1.398 0 0 0 .067 1.161c.136.256.352.486.66.701.082.058.21.14.371.246l.339.221a.38.38 0 0 1 .109.11c.026.053.027.11-.012.217a3.363 3.363 0 0 1-.295.52c-.398.583-.968 1.077-1.696 1.472-.385.204-.786.34-.955.8-.128.348-.044.743.28 1.075.119.125.257.23.409.31a4.43 4.43 0 0 0 1 .4.66.66 0 0 1 .202.09c.118.104.102.26.259.488.079.118.18.22.296.3.33.229.701.243 1.095.258.355.014.758.03 1.217.18.19.064.389.186.618.328.55.338 1.305.802 2.566.802 1.262 0 2.02-.466 2.576-.806.227-.14.424-.26.609-.321.46-.152.863-.168 1.218-.181.393-.015.764-.03 1.095-.258a1.14 1.14 0 0 0 .336-.368c.114-.192.11-.327.217-.42a.625.625 0 0 1 .19-.087 4.446 4.446 0 0 0 1.014-.404c.16-.087.306-.2.429-.336l.004-.005c.304-.325.38-.709.256-1.047Zm-1.121.602c-.684.378-1.139.337-1.493.565-.3.193-.122.61-.34.76-.269.186-1.061-.012-2.085.326-.845.279-1.384 1.082-2.903 1.082-1.519 0-2.045-.801-2.904-1.084-1.022-.338-1.816-.14-2.084-.325-.218-.15-.041-.568-.341-.761-.354-.228-.809-.187-1.492-.563-.436-.24-.189-.39-.044-.46 2.478-1.199 2.873-3.05 2.89-3.188.022-.166.045-.297-.138-.466-.177-.164-.962-.65-1.18-.802-.36-.252-.52-.503-.402-.812.082-.214.281-.295.49-.295a.93.93 0 0 1 .197.022c.396.086.78.285 1.002.338.027.007.054.01.082.011.118 0 .16-.06.152-.195-.026-.433-.087-1.277-.019-2.066.094-1.084.444-1.622.859-2.097.2-.229 1.137-1.22 2.93-1.22 1.792 0 2.732.987 2.931 1.215.416.475.766 1.013.859 2.098.068.788.009 1.632-.019 2.065-.01.142.034.195.152.195a.35.35 0 0 0 .082-.01c.222-.054.607-.253 1.002-.338a.912.912 0 0 1 .197-.023c.21 0 .409.082.49.295.117.309-.04.56-.401.812-.218.152-1.003.638-1.18.802-.184.169-.16.3-.139.466.018.14.413 1.991 2.89 3.189.147.073.394.222-.041.464Z" /> </svg>
                            </a>
                            <a class="footer-social-link github" href="https://goo.gl/maps/6ThSNaNb3u5Bg4338" target="_blank">
                                <span class="hidden-link-text">Location</span>
                                <svg style={{ color: "white" }} width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.02,19.93v2.02c2.01-0.2,3.84-1,5.32-2.21l-1.42-1.43C15.81,19.17,14.48,19.75,13.02,19.93z" fill="white"></path><path d="M4.03,12c0-4.05,3.03-7.41,6.95-7.93V2.05C5.95,2.58,2.03,6.84,2.03,12c0,5.16,3.92,9.42,8.95,9.95v-2.02 C7.06,19.41,4.03,16.05,4.03,12z" fill="white"></path><path d="M19.95,11h2.02c-0.2-2.01-1-3.84-2.21-5.32l-1.43,1.43C19.19,8.21,19.77,9.54,19.95,11z" fill="white"></path><path d="M18.34,4.26c-1.48-1.21-3.32-2.01-5.32-2.21v2.02c1.46,0.18,2.79,0.76,3.9,1.62L18.34,4.26z" fill="white"></path><path d="M18.33,16.9l1.43,1.42c1.21-1.48,2.01-3.31,2.21-5.32h-2.02C19.77,14.46,19.19,15.79,18.33,16.9z" fill="white"></path><path d="M16,11.1C16,8.61,14.1,7,12,7s-4,1.61-4,4.1c0,1.66,1.33,3.63,4,5.9C14.67,14.73,16,12.76,16,11.1z M12,12 c-0.59,0-1.07-0.48-1.07-1.07c0-0.59,0.48-1.07,1.07-1.07s1.07,0.48,1.07,1.07C13.07,11.52,12.59,12,12,12z" fill="white"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="footer-copyright-wrapper">
                            <p class="footer-copyright-text">
                                <a class="footer-copyright-link" href="https://sky-technet.com/" target="_self"> ©2020. | Designed By: <h5 style={{ color: "#FD6802" }}>SKY TECH</h5> | All rights reserved. </a>
                            </p>
                        </div>
                    </div>
                    <a href="https://api.whatsapp.com/send?phone=966557404034 &text=السلام عليكم"
                        class="whatsapp-button" target="_blank"
                        style={{ position: "fixed", right: "15px", bottom: "100px", zindex: "1000" }}>
                        <img src="https://i.ibb.co/VgSspjY/whatsapp-button.png" alt="botão whatsapp" />
                    </a>
                </footer>
            </div>




            {/* <footer class="text-center" style={{ backgroundColor: "#6464ce", color: "white" }} >
                <div class="container p-4">
                    <section class="mb-4">
                        <a class="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: " #55acee" }} href="https://twitter.com/vip_mosaicpools?s=11&t=u-Lfg0RgX6i3NMzsdj-j0Q"
                            role="button"><i class="fab fa-twitter"></i></a>

                        <a class="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: " #dd4b39" }} href="https://instagram.com/vip_mosaicpools?igshid=YmMyMTA2M2Y="
                            role="button"><i class="fab fa-instagram"></i></a>

                        <a class="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: " #F1C514" }} href="https://www.snapchat.com/add/vip_mosaicpools?share_id=QzI4NDYw&locale=ar_SA@calendar=gregorian;numbers=latn"
                            role="button"><i class="fab fa-snapchat"></i></a>

                    </section>
                    <section class="">
                        <form action="">
                            <div class="row d-flex justify-content-center">
                                <div class="col-auto">
                                    <p class="pt-2 text-white">
                                        <strong>{t("Sign up for our newsletter")}</strong>
                                    </p>
                                </div>
                                <div class="col-md-5 col-12">
                                    <div class="form-outline form-white mb-4">
                                        <input type="email" id="form5Example2" class="form-control" />
                                        <label class="form-label" for="form5Example2" style={{ margintop: '10px' }}>{t("Email address")}</label>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <button type="submit" class="btn btn-outline-light mb-4">
                                        {t("Subscribe")}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
                <div id="newsspec-19854-app" class="news-app-promo">
                    <div class="news-app-promo-text">
                        <div class="news-app-promo-text__tagline">The best way to get news on the go</div><br></br>
                        <div class="news-app-promo-text__download">Download Our application</div><br></br>
                    </div>
                    <div class="news-app-promo__section">
                        <div class="news-app-promo-subsection">
                            <a class="news-app-promo-subsection--link news-app-promo-subsection--playstore" href="https://play.google.com/store/apps/details?id=bbc.mobile.news.ww&amp;hl=en" target="_parent">
                                <img class="news-app-promo__play-store" src="//news.files.bbci.co.uk/include/newsspec/19854/assets/app-project-assets/google_play_store.svg" width="161" height="auto" border="0" />
                            </a>
                            <a class="news-app-promo-subsection--link news-app-promo-subsection--appstore" href="https://itunes.apple.com/us/app/bbc-news/id364147881?mt=8" target="_parent">
                                <img class="news-app-promo__app-store" src="//news.files.bbci.co.uk/include/newsspec/19854/assets/app-project-assets/ios_app_store.svg" width="161" height="auto" border="0" />
                            </a>
                        </div>
                    </div>
                    <div class="news-app-promo__section">

                    </div>
                </div>
                <div class="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © {t("2022 Copyright")}:
                    <a class="text-white" href="https://sky-technet.com/"> <LabelText text={t("Vip Mosaic Pool Tiles")} color={"white"} /></a>
                    <h4>Designed By</h4>
                    <a class="text-white" href="https://sky-technet.com/"><h4 style={{ color: "#FD6802" }}> Sky Tech</h4></a>
                </div>
                <div>
                    <a href="https://api.whatsapp.com/send?phone=966557404034 &text=السلام عليكم" class="whatsapp-button" target="_blank"
                        style={{ position: "fixed", right: "15px", bottom: "100px", zindex: "1000" }}>
                        <img src="https://i.ibb.co/VgSspjY/whatsapp-button.png" alt="botão whatsapp" />
                    </a>
                </div>
            </footer> */}
        </React.Fragment>
    )
}

export default Footer;
