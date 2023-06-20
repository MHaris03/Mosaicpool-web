import React, { useEffect, useState } from "react";
import './order.css'
import db from "../../db";
import { collection, addDoc } from "firebase/firestore";
import Shipping from '../../Images/shipping.png'
import Cross from '../../Images/cross-circle-svgrepo-com.svg'
import { Link } from 'react-router-dom'
const Orderproduct = () => {
    const Invoiceid = localStorage.getItem('Invoiceid')
    const [Shipped, setShipped] = useState(false);
    const productlist = JSON.parse(localStorage.getItem('productlist'))
    const Date1 = localStorage.getItem("Date")
    const Address = localStorage.getItem("Address")
    const Phonenumber = localStorage.getItem("Phone")
    const State = localStorage.getItem("State")
    const Email = localStorage.getItem("Email")
    const name = localStorage.getItem("User")
    const cartinfo = localStorage.getItem("cartinfo")
    const [msg, setMsg] = useState('')
    const [status, setStatus] = useState('')

    useEffect(() => {
        const Token = localStorage.getItem("token");
        var formdata = new FormData();
        formdata.append(
            "publishable_api_key",
            "pk_live_JWbhYrvcxPff3zXujdZM77wutoFetCpz1dif3GTQ"
        );
        var requestOptions = {
            method: "PATCH",
            body: formdata,
            redirect: "follow",
        };
        fetch(`https://api.moyasar.com/v1/payments/${Token}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setMsg(result.source.message);
                setStatus(result.status);
                if (result.status === 'paid') {
                    let Newdate = new Date()
                    let Time = new Date()
                    const docRef = addDoc(collection(db, "Weborder"), {
                        ProductPrice: productlist.totalprice,
                        UserName: name,
                        Orderid: Invoiceid,
                        Date: Date1,
                        Address: Address,
                        State: State,
                        Email: Email,
                        Phonenumber: Phonenumber,
                        Shipped: Shipped,
                        productinfo: JSON.parse(cartinfo),
                        Currentdate: Newdate.toLocaleDateString(),
                        Currenttime: Time.toLocaleTimeString(),

                    });
                }
            })
            .catch((error) => console.log("error", error));
    }, []);

    return (
        <React.Fragment>
            {
                status === 'failed' ?
                    <div class="container__order">
                        <div class="row">
                            <div class="jumbotron" >
                                <h2>{msg}</h2>
                                <h3>Try Again</h3>
                                <img className="delivery" src={Cross} alt='cross' />
                                <Link to={{ pathname: "/" }}>
                                    <button className='baccck__btn'>مواصلة التسوق</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    :
                    <div class="container__order">
                        <div class="row">
                            <div class="jumbotron" >
                                <div id="print">
                                    <h2 class="text-center">تم استلام طلبك شكرا لك على الدفع الخاص بك ، انها قيد المعالجة</h2>
                                    <h3 class="text-center">شكرا لك على الدفع الخاص بك ، انها قيد المعالجة</h3>
                                    <p class="text-center" id="paragrph">رقم طلبك هو: {Invoiceid}</p>
                                </div>
                                <img className="delivery" src={Shipping} alt='Shipping' />
                                <Link to={{ pathname: "/" }}>
                                    <button className='baccck__btn'>مواصلة التسوق</button>
                                </Link>
                            </div>
                        </div>
                    </div>


            }



        </React.Fragment>
    )
}
export default Orderproduct;