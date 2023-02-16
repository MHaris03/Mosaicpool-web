import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Scrollbars } from "react-custom-scrollbars-2";
import { useTranslation } from 'react-i18next'
import { IncrimentDataFunction, DecrimentDataFunction, DeleteDataFunction, ClearDataFunction, GetTotalprice }
    from '../../Action/action';
import CartClass from '../../Classes/CartClass';
import './Cart.css';
import { Link } from 'react-router-dom';
import Deleteicon from '../../Images/deleteicon.svg';
import { useHistory } from 'react-router-dom';



const Cart = (props) => {
    const { t } = useTranslation(["sidebar"]);
    const [totalprice, settotalprice] = useState(0);
    const [state, setstate] = useState(false);
    const history = useHistory();


    const EmptyProductData = []
    const CartArray = []
    var QuantityPrice = 0;
    useEffect(() => {
        props.Productlist.map(ls => {
            QuantityPrice = QuantityPrice + (ls.Price * ls.item)
            CartArray.push(ls)

        })
        // console.log(CartArray, "this is use effect")
        settotalprice(QuantityPrice)
        props.GetTotalprice(QuantityPrice)

    }, [state])
    const callafunction = (id, props) => {
        props.IncrimentDataFunction(
            new CartClass(id)
        )
    }
    let id = Number()
    const increment = (items, ind) => {
        id = ind;
        items.item += 1;
        setstate(!state)
    }
    let iid = Number()
    const decrement = (items, ind) => {
        if (items.item > 0) {
            iid = ind;
            items.item -= 1;
            setstate(!state)
        }
    }
    let productlist = {}
    props.Productlist.map((ls) => (

        productlist = {
            description: ls.descriptions,
            Image: ls.Image,
            Price: ls.Price,
            name: ls.name,
            item: ls.item,
        }
    ))
    productlist.totalprice = totalprice;
    const handelLocalStorageData = () => {

        localStorage.setItem("productlist", JSON.stringify(productlist))
        history.push({
            pathname: '/Chekout',
            state: props.Productlist,
          });
    }
    // console.log(props.EmptyProduct, "this reducer data...")
    return (
        <React.Fragment>
            <div className="container">
                <section className="main-cart-section">
                    <h1 className='cartview_heading'>{t("shopping Cart")}</h1>
                    <p className="total-items">
                        {t("you have")} <span className="total-items-count"></span> {t("items in shopping cart")}
                    </p>
                    <div className="cart-items">
                        {props.Productlist.length == 0 && <h1 style={{ marginTop: "20px" }}>No Booking found</h1>}
                        <div className="cart-items-container">
                            <Scrollbars>
                                {
                                  props.Productlist.map((ls, index) => (
                                        <div key={ls.productid}>
                                            {
                                                <div className="items-info">
                                                    <div className="product-img">
                                                        <img src={ls.Image} alt="iamge" />
                                                    </div>
                                                    <div className="title">
                                                        <h2>{ls.name}</h2>
                                                        <p>{ls.discriptionproduct}</p>
                                                    </div>
                                                    <div className="add-minus-quantity">
                                                        <svg id='minus_icon' onClick={() => {
                                                            decrement(ls, index)
                                                        }} xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor"
                                                            class="bi bi-dash" viewBox="0 0 16 16">
                                                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" /> </svg>
                                                        <input type="text" placeholder={ls.item} />

                                                        <svg id='plus_icon' onClick={() => {
                                                            increment(ls, index)
                                                        }} xmlns="http://www.w3.org/2000/svg" width="46" height="46"
                                                            fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 
                                                           0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg>
                                                    </div>
                                                    <div className="price">
                                                        <h3>{t("SAR")}.{ls.Price}</h3>
                                                    </div>
                                                    <div className="remove-item"
                                                        onClick={() => {
                                                            props.DeleteDataFunction(ls.productid);
                                                            let newPrice = ls.Price * ls.item
                                                            settotalprice(totalprice - newPrice)
                                                        }}
                                                    >
                                                        {/* {console.log(ls.Price * ls.item, "sihaifhspihfpsihfpihd")} */}
                                                        {/* <i
                                                            className="fas fa-trash-alt remove"
                                                        ></i> */}
                                                        <img src={Deleteicon} alt='delete' style={{ cursor: "pointer" }} />
                                                    </div>
                                                </div>
                                            }<hr />
                                        </div>
                                    ))
                                }
                            </Scrollbars>
                        </div>
                    </div>
                    <div className="card-total">
                        <h3>
                            {t("Cart Total")} :
                            <span>
                                {
                                    totalprice

                                }{t("SAR")}.
                            </span>
                        </h3>
                        <button className="clear-cart" onClick={() => {
                            props.ClearDataFunction(EmptyProductData);
                            settotalprice(0);
                        }}>
                            {t("Clear Cart")}
                        </button>
                        <br />
                        {/* <button id='next'  onClick={handelLocalStorageData} >
                            <Link to={{ pathname: "/Chekout" }}  >
                                {t("Next")}
                            </Link>
                        </button> */}
                        {/* <Link to={{ pathname: "/Chekout" }}> */}
                            <button id='next' onClick={handelLocalStorageData}>Next</button>
                        {/* </Link> */}
                    </div>
                </section>
                <hr />
            </div>
        </React.Fragment>
    )
}


const mapStateToprops = state => ({
    Productlist: state.Reducer.todoList,
    EmptyProduct: state.Reducer.todoList

})
export default connect(mapStateToprops, {
    IncrimentDataFunction, GetTotalprice,
    DecrimentDataFunction, DeleteDataFunction, ClearDataFunction
})(Cart);