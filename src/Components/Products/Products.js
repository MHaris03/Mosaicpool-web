import React, { useState, useEffect } from 'react';
import Heading from '../../BussinesLogistic/Heading/Heading';
import LabelText from '../../BussinesLogistic/labelText/LabelText';
import { AddDataFunction } from '../../Action/action';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next'
import { onSnapshot, collection, query, } from "firebase/firestore";
import db from "../../db";
import LoadingSpin from "react-loading-spin";
const Products = (props) => {
    const { t } = useTranslation(["sidebar"]);
    const [Loader, setLoader] = useState(false)
    const [productlist, setproductlist] = useState([]);
    const [Imagemdl, setImagemdl] = useState()
    const [Descrimdl, setDescrimdl] = useState()
    const [Pricemdl, setPricemdl] = useState()
    const [mdlname, setmdlname] = useState()
    useEffect(() => {

        async function fetchUserAPI() {
            const q = query(collection(db, "Products"));
            const unsub = onSnapshot(q, (querySnapshot) => {
                setproductlist(querySnapshot.docs.map((d) => d.data()));
                // console.log(querySnapshot.docs.length,"this is order length")
                setLoader(true)
            });
        }

        fetchUserAPI();
    }, []);
    const handleClick = (event) => {
        setImagemdl(event.Image)
        setDescrimdl(event.descriptions)
        setPricemdl(event.Price)
        setmdlname(event.name)
    }
    const AddDatanew = (Array,) => {
        Array.item = 1;
        const index = props.Productlist2.findIndex(ls => ls.productid === Array.productid)

        if (index >= 0) {
            alert('You have already added this product')
        }
        else {
            props.AddDataFunction(Array)
        }
    }
    return (
        <div>
            {
                Loader === false ?

                    <div className="loader">

                        <LoadingSpin size={80} />
                    </div>
                    :
                    <React.Fragment>
                        <div class="latest-products">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6">
                                        <Heading text={t("Latest Products")} />
                                    </div>
                                    <div className="col-md-6">
                                        <LabelText text={t("View all products")} float="right" />
                                    </div>
                                    <br />
                                    <br />
                                    {productlist.map(ls => (
                                        <div class="col-md-4" key={ls.id}>
                                            <div class="product-item">
                                                <img src={ls.Image} id="Product__image__setting"
                                                    data-toggle="modal" data-target="#exampleModal"
                                                    alt="product image" style={{ height: '20em', cursor: 'pointer' }} onClick={() => handleClick(ls)} />
                                                <div class="down-content text-right">
                                                    <a href="#"><h4>{ls.nameofproduct}</h4>{ls.name}</a>
                                                    <h6 style={{ color: "#091846" }}>{ls.priceofproduct} {t("SAR")}.{ls.Price}</h6>
                                                    <p style={{ color: "#1c47d5" }}>{ls.discriptionproduct}{ls.descriptions}</p>
                                                    <ul class="stars text-left">
                                                        <li><svg style={{ color: "#E4B475" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /> </svg></li>
                                                        <li><svg style={{ color: "#E4B475" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /> </svg></li>
                                                        <li><svg style={{ color: "#E4B475" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /> </svg></li>
                                                        <li><svg style={{ color: "#E4B475" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /> </svg></li>
                                                        <li><svg style={{ color: "#E4B475" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /> </svg></li>
                                                    </ul>
                                                    <span>{t("Star")} (5)</span>
                                                </div>
                                                <div className="add__btn__setting">
                                                    <button type="button" class="btn btn-outline-warning"
                                                        onClick={() =>
                                                            AddDatanew(ls, ls.id,)
                                                        }
                                                    >{t("اضف الى السلة")}</button>
                                                </div>
                                                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content" id='model'>
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">انظر التفاصيل</h5>
                                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <p>
                                                                    {/* <b>Picture:</b> */}
                                                                    <div class="modal-body" style={{ textAlign: "center" }}>
                                                                        <img
                                                                            
                                                                            src={Imagemdl}
                                                                            alt="image"
                                                                            className="avatar"
                                                                            
                                                                        />
                                                                    </div>
                                                                </p>
                                                            <div class="modal-body" style={{ textAlign: "left" }}>
                                                                <h6>
                                                                    <b>اسم:</b>
                                                                    {mdlname}
                                                                </h6>
                                                                <h6>
                                                                    <b>السعر:</b>
                                                                    {Pricemdl}
                                                                </h6>
                                                                <h6>
                                                                    <b>الأوصاف:</b>
                                                                    {Descrimdl}
                                                                </h6>
                                                              
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div class="call-to-action">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="inner-content">
                                            <div class="row">
                                                <div class="col-md-8">
                                                    <h4> <em>{t("VIP Mosaic Pools")}</em></h4>
                                                    <p>{t("You can find inovative and unique and latest designs on our website")}.</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <a href="#" class="filled-button">{t("Purchase Now")}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
            }
        </div>
    )
}
const mapStateToprops = state => ({
    Productlist2: state.Reducer.todoList

})

export default connect(mapStateToprops, { AddDataFunction })(Products);