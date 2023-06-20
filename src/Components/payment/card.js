import React, { useState, useEffect } from 'react';
import Navbar from '../../BussinesLogistic/Navbar/Navbar';
import Footer from '../Footer/Footer';
import Master from '../../Images/master.svg';
import America from "../../Images/emericancard.png"
import Mada from "../../Images/madacard.png"
import Visalogo from '../../Images/visalogo.svg'
import Allicons from "../../Images/allicons.png"
import { Toaster, toast } from 'react-hot-toast';
import './card.css';
const Card = () => {
    const [number, setNumber] = useState();
    const [cvc, setcvc] = useState();
    const [name, setName] = useState();
    const [totalprice, settotalprice] = useState(0);
    const [month, setmonth] = useState();
    const [year, setyear] = useState();
    const [Date1, setDate] = useState();
    const [Address, setAddress] = useState();
    const [Phonenumber, setPhonenumber] = useState();
    const [State, setState] = useState();
    const [Email, setEmail] = useState();
    const Invoiceid = Math.floor(Math.random() * 100000000);
    const productlist = JSON.parse(localStorage.getItem('productlist'))

    useEffect(() => {
        setDate(localStorage.getItem("Date"))
        setAddress(localStorage.getItem("Address"))
        setPhonenumber(localStorage.getItem("Phone"))
        setState(localStorage.getItem("State"))
        setEmail(localStorage.getItem("Email"))
    }, [])
    const determineCardType = () => {
        if (/^4/.test(number)) {
            return 'visa';
        } else if (/^5/.test(number)) {
            return 'mastercard';
        } else if (/^3/.test(number)) {
            return 'amex';
        } else if (/^9/.test(number)) {
            return 'mada';
        }
        return '';
    };

    const renderCardIcon = () => {
        const cardType = determineCardType();

        switch (cardType) {
            case 'visa':
                return <img src={Visalogo} alt="Visa" className="card-icon" />;
            case 'mastercard':
                return <img src={Master} alt="MasterCard" className="card-icon" />;
            case 'amex':
                return <img src={America} alt="American Express" className="card-icon" />;
            case 'mada':
                return <img src={Mada} alt="Mada" className="card-icon" />;
            default:
                return <img src={Allicons} alt="Allicons" className="card-icon" style={{ marginLeft: '-90px', height: '30px' }} />;
            // return null;
        }
    };


    const procedurepayment = () => {


        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer sk_live_QGkw36uaqKQBeUE7tTUuUbE1go7U8mjHyT79pq74");

        // myHeaders.append("Authorization", "Bearer sk_test_2iWhAm8Q6DmQ3tbRPVBv9Fysr5QaLd1cZxyDhUWo");

        var formdata = new FormData();
        formdata.append("publishable_api_key", "pk_live_JWbhYrvcxPff3zXujdZM77wutoFetCpz1dif3GTQ");

        // formdata.append("publishable_api_key", "pk_test_TU9tqAAwVmfPeVJmhevtf6DBiqkqXeEHJgSCr2aq");
        formdata.append("callback_url", "https://mosiacpools.online/ConfirmOrder");
        // formdata.append("callback_url", "http://localhost:3001/ConfirmOrder");
        formdata.append("amount", 100 * productlist.totalprice);
        formdata.append("currency", "SAR");
        // formdata.append("description", productlist.item);
        formdata.append("source[type]", "creditcard");
        formdata.append("source[name]", name);
        formdata.append("source[number]", number);
        formdata.append("source[cvc]", cvc);
        formdata.append("source[month]", month);
        formdata.append("source[year]", year);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };


        fetch("https://api.moyasar.com/v1/payments", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.type === "invalid_request_error") {
                    toast.error(result.message)
                    // {console.log(result,"Invalid")}
                }
                else {
                    localStorage.setItem('token', result.id)
                    window.open(result.source.transaction_url, "_blank")
                    localStorage.setItem("Invoiceid", JSON.stringify(Invoiceid))
                }
            })
    }

    return (
        <React.Fragment>
            <Navbar />
            <center>
                <form>
                    <label id='card__name'>Name on card</label><br />
                    <input placeholder='Name on card' type='text' className='cardnumber'
                        onChange={event => setName(event.target.value)}
                        value={name}
                    /><br /><br />
                    <div>
                        <label id='cardinfo'>Card Information</label><br />


                        <div className='carddiv'>
                            {/* <input placeholder='1234 5123 4567 8912' className='card__number'
                                onChange={event => setNumber(event.target.value)}
                                value={number} maxLength='16' required /> */}
                            <input
                                type="text"
                                className='card__number'
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                placeholder="Enter card number"
                                maxLength='16' required
                            />
                            {renderCardIcon()}

                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                viewBox="0 0 141.732 141.732"><g fill="#2566af">
                                    <path d="M62.935 89.571h-9.733l6.083-37.384h9.734zM45.014 
                            52.187L35.735 77.9l-1.098-5.537.001.002-3.275-16.812s-.396-3.366-4.617-3.366h-15.34l-.18.633s4.691.976 10.181 4.273l8.456 32.479h10.141l15.485-37.385H45.014zM121.569 89.571h8.937l-7.792-37.385h-7.824c-3.613 0-4.493 2.786-4.493 2.786L95.881 89.571h10.146l2.029-5.553h12.373l1.14 5.553zm-10.71-13.224l5.114-13.99 2.877 13.99h-7.991zM96.642 61.177l1.389-8.028s-4.286-1.63-8.754-1.63c-4.83 0-16.3 2.111-16.3 12.376 0 9.658 13.462 9.778 13.462 14.851s-12.075 4.164-16.06.965l-1.447 8.394s4.346 2.111 10.986 2.111c6.642 0 16.662-3.439 16.662-12.799 0-9.72-13.583-10.625-13.583-14.851.001-4.227 9.48-3.684 13.645-1.389z"/></g><path d="M34.638 72.364l-3.275-16.812s-.396-3.366-4.617-3.366h-15.34l-.18.633s7.373 1.528 14.445 7.253c6.762 5.472 8.967 12.292 8.967 12.292z"
                                    fill="#e6a540" /><path fill="none" d="M0 0h141.732v141.732H0z" id='visaaimg' /></svg>
                            <img src={Mada} alt='' className='visaimg' />
                            <img src={Master} type='text' alt='' className='visaimg' />
                            <img src={America} alt='' className='visaimg' /> */}
                        </div>


                        <div >
                            <input placeholder='MM' type='text' id='cvc__number'
                                onChange={event => setmonth(event.target.value)}
                                value={month} maxLength='2'
                            />
                            <input placeholder='YY' type='text' id='year__number'
                                onChange={event => setyear(event.target.value)}
                                value={year} maxLength='2'
                            /><br />
                            <input placeholder='CVC' type='text' className='cardnumber'
                                onChange={event => setcvc(event.target.value)}
                                value={cvc} maxLength="4"
                            />
                        </div>
                    </div>
                    <div className='confirm__btn'>

                        <button className='pay__btn' onClick={procedurepayment} type='button'
                            onChange={event => settotalprice(event.target.value)}
                            value={totalprice}>
                            Pay SAR.{productlist.totalprice}
                        </button>

                    </div>
                    <span>Powered by <b>Moyasar</b></span><br />
                    <span className='Test__mode'>Test Mode Enabled: Please do not use in production!</span>
                </form>
            </center>

            <Toaster />
            <Footer />
        </React.Fragment>
    )
}

export default Card;