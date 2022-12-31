import React, { Component } from 'react';
import Header from '../../BussinesLogistic/Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Cart.css';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
const Contactus = () => {
	const { i18n, t } = useTranslation(["sidebar"]);
	return (
		<React.Fragment>
			<Header />
			<div class="container">
				<div class="innerwrap">
					<section class="section1 clearfix">
						<div class="textcenter">
							<span class="shtext">{t("تواصل معنا على الايميل")}</span>
							<span class="seperator"></span>
							<h1>{t("Drop")} {t("Us")} {t("a")} {t("Mail")}</h1>
						</div>
					</section>
					<section class="section2 clearfix">
						<div class="col2 column1 first">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.017121369297!2d46.6953636!3d24.7606021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efd65efdff875%3A0xd4068472f4d88c54!2z2LTYsdmD2Kkg2LHZiNi52Kkg2KfZhNil2KjYqtmD2KfYsdin2Kog2YXZiNiy2KfZitmK2YMg2YXYs9in2KjYrQ!5e0!3m2!1sar!2ssa!4v1664974425739!5m2!1sar!2ssa"
								style={{ width: '100%', height: 700 }}
								width="600"
								height="450"
								frameBorder="none"
								allowFullScreen=""
								aria-hidden="false"
								tabIndex="0"
							></iframe>
						</div>
						<div class="col2 column2 last">
							<div class="sec2innercont">
								<div class="sec2addr">
									<p>تقاطع أبي بكر الصديق مع الإمام سعود، بجوار مكدونالد، حي النزهة، النزهة، الرياض 12473</p>
									<p><span class="collig">{t("Phone")} :</span> +966 557404034</p>
									<p><span class="collig">{t("Email")} :</span> AL_king1984@hotmail.com</p>
									<p><span class="collig">{t("Call")} :</span> +966 590991616</p>
								</div>
							</div>
							<div class="sec2contactform">
								<h3 class="sec2frmtitle">لمعرفة المزيد تواصل معنا على الايميل</h3>
								<div class="clearfix">
									<input class="col2 first" type="text" placeholder={t("FirstName")} />
									<input class="col2 last" type="text" placeholder={t("LastName")} />
								</div>
								<div class="clearfix">
									<input class="col2 first" type="Email" placeholder={t("Email")} />
									<input class="col2 last" type="text" placeholder={t("Contact Number")} />
								</div>
								<div class="clearfix">
									<textarea name="textarea" id="" cols="30" rows="7">{t("Your message here")}</textarea>
								</div>
								<div class="clearfix"><input type="submit" value={t("Send")} /></div>
							</div>

						</div>
					</section>
				</div>
			</div>
			<Footer />

		</React.Fragment>
	)
}

export default Contactus;