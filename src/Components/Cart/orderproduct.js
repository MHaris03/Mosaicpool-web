import React, { useEffect, useState } from "react";
import './order.css'
import { useTranslation } from "react-i18next";
import Shipping from '../../Images/shipping.png'
import { Link } from 'react-router-dom'
const Invoiceid = localStorage.getItem('Invoiceid')

const printPageArea = (areaID) => {
    var printContent = document.getElementById(areaID);
    var WinPrint = window.open('', '', 'width=900,height=650');
    WinPrint.document.write(printContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
}

const Orderproduct = () => {
    const { t } = useTranslation(["sidebar"]);

    return (
        <React.Fragment>
            <div class="container__order">
                <div class="row">
                    <div class="jumbotron" >
                        <div id="print">
                            <h2 class="text-center">تم استلام طلبك شكرا لك على الدفع الخاص بك ، انها قيد المعالجة</h2>
                            <h3 class="text-center">شكرا لك على الدفع الخاص بك ، انها قيد المعالجة</h3>
                            <p class="text-center" id="paragrph">رقم طلبك هو: {Invoiceid}</p>
                        </div>
                        <img className="delivery" src={Shipping} alt='Shipping' />
                        <button class="btn btn-primary" onClick={() => printPageArea('print')}>مطبعة</button>
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