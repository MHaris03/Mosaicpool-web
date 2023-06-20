import React, { useState } from 'react';
import Navbar from '../../BussinesLogistic/Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import './userinfo.css';
const Userinfo = () => {
    const { t } = useTranslation(["sidebar"]);
    const [Phonenumber, setNumber] = useState('');
    const [UserName, setUserName] = useState('');
    const [state, setState] = useState('');
    const [Email, setEmail] = useState('');
    const [Address, setAddress] = useState('');
    const [Date, setDate] = useState('');
    const [City, setCity] = useState('');
    const [CustomerName, setCustomerName] = useState('');
    const location = useLocation();
    // location.state;
    // {console.log(location.state,"props first")}
    const history = useHistory()
    const userinfoconfirm = (e) => {
        e.preventDefault()
        if (UserName === "" &&
            state === "" &&
            Date === "" &&
            Address === "" &&
            Email === "" &&
            City === "" &&
            CustomerName === "" &&
            Phonenumber === ""
        ) {
            toast.error("Please enter the all details")
            return

        }
        else {

            localStorage.setItem("User", UserName);
            localStorage.setItem("State", state);
            localStorage.setItem("Date", Date);
            localStorage.setItem("Address", Address);
            localStorage.setItem("Email", Email);
            localStorage.setItem("City", City);
            localStorage.setItem("Customername", CustomerName);
            localStorage.setItem("Phone", Phonenumber);
            localStorage.setItem("cartinfo", JSON.stringify(location.state));
            history.push({
                pathname: '/Components/card/card',
            });
        }
        setUserName('')
        setState('')
        setDate('')
        setAddress('')
        setEmail('')
        setCity('')
        setCustomerName('')

    }
    const isSubmitDisabled = !UserName || !Address || !Date || !City || !Phonenumber || !CustomerName
        || !Email || !state;
    return (
        <React.Fragment>
            <Navbar />
            <form class="card">
                <div class="containeer">
                    <div class="card-title">
                        <h2>{t("User Information")}</h2>
                    </div>
                    <div class="card-body">
                        <div class="payment-info flex justify-space-between">
                            <div class="column billing">
                                <div class="field full">
                                    <label for="name" className='user__label'>{t("اسم")}</label>
                                    <input id="name" type="text" className='user__inpt' placeholder={t("اسم")}
                                        onChange={(e) => setUserName(e.target.value)} value={UserName}
                                        required
                                    />
                                </div>
                                <div class="field full">
                                    <label for="address" className='user__label'>{t("تبوك")}</label>
                                    <input id="address" type="text" className='user__inpt' placeholder={t("تبوك")}
                                        onChange={(e) => setAddress(e.target.value)} value={Address}
                                        required
                                    />
                                </div>
                                <div class="field full">
                                    <label for="address" className='user__label'>{t("تاريخ الطلب")}</label>
                                    <input id="address" type="date" className='user__inpt' placeholder="12/23/2022"
                                        onChange={event => setDate(event.target.value)} value={Date}
                                        required
                                    />
                                </div>
                                <div class="flex justify-space-between">
                                    <div class="field half">
                                        <label for="city" className='user__label'>{t("مدينة")}</label>
                                        <input id="city" type="text" className='user__inpt' placeholder={t("مدينة")}
                                            onChange={event => setCity(event.target.value)} value={City}
                                            required
                                        />
                                    </div>

                                </div>
                            </div>
                            <div class="column shipping">
                                <div class="field full">
                                    <label for="name" className='user__label'>{t("الاسم الكامل")}</label>
                                    <input id="name" type="text" className='user__inpt' placeholder={t("الاسم الكامل")}
                                        onChange={event => setCustomerName(event.target.value)}
                                        value={CustomerName} required
                                    />
                                </div>
                                <div class="field full">
                                    <label for="address" className='user__label'>{t("رقم الهاتف")}</label>
                                    <input id="address" type="tel" inputMode="tel" pattern="[0-9]*" className='user__inpt' placeholder="966-12345-2345"
                                        onChange={event => setNumber(event.target.value)}
                                        value={Phonenumber} maxLength='12' required
                                    />
                                </div>

                                <div class="field full">
                                    <label for="address" className='user__label'>{t("البريد الإلكتروني")}</label>
                                    <input id="address" type="text" className='user__inpt' placeholder="abc@gmail.com"
                                        onChange={event => setEmail(event.target.value)} value={Email}
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required
                                    />
                                </div>
                                <div class="field full">
                                    <label for="state" className='user__label'>{t("حالة")}</label>
                                    <input id="state" className='user__inpt' type="text" placeholder={t("حالة")}
                                        onChange={event => setState(event.target.value)} value={state}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-actions flex justify-space-between">
                        <div class="flex-end">
                            <button class="button button-primary" disabled={isSubmitDisabled} className={isSubmitDisabled ? 'disabled' : 'abled'}
                                onClick={userinfoconfirm} type='submit'>{t("استمر")}</button>
                        </div>
                    </div>
                </div>
            </form>


            <Toaster />
            <Footer />
        </React.Fragment>
    )
}

export default Userinfo;