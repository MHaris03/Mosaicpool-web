import React,{useEffect,useState} from "react";
import './order.css'
import { useTranslation } from "react-i18next";
import Shipping from '../../Images/shipping.png'
import { Link } from 'react-router-dom'
const Invoiceid = localStorage.getItem('Invoiceid')

const Orderproduct = () => {
    const { t } = useTranslation(["sidebar"]);
    
    return (
        <React.Fragment>
            <div class="container__order">
                <div class="row">
                    <div class="jumbotron">
                        <h2 class="text-center">تم استلام طلبك شكرا لك على الدفع الخاص بك ، انها قيد المعالجة</h2>
                        <h3 class="text-center">شكرا لك على الدفع الخاص بك ، انها قيد المعالجة</h3>

                        <p class="text-center" id="paragrph">رقم طلبك هو: {Invoiceid}</p>
                        <img className="delivery" src={Shipping} alt='Shipping' />
                        <Link to={{ pathname: "/" }}>
                        <button className='baccck__btn'>مواصلة التسوق</button>
                        </Link>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default Orderproduct;