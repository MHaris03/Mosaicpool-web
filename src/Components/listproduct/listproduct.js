import React, { useEffect, useState } from "react";
import Navbar from "../../BussinesLogistic/Navbar/Navbar";
import { onSnapshot, collection, query, } from "firebase/firestore";
import Footer from "../Footer/Footer";
import { useTranslation } from 'react-i18next'
import './listproduct.css'
import db from "../../db";


const Listproduct = () => {
  const { t } = useTranslation(["sidebar"]);
  const [ordertlist, setorderlist] = useState([]);
  useEffect(() => {

    async function fetchUserAPI() {
      const q = query(collection(db, "Weborder"));
      const unsub = onSnapshot(q, (querySnapshot) => {
        setorderlist(querySnapshot.docs.map((d) => d.data()));
      });
    }

    fetchUserAPI();
  }, []);
  return (
    <React.Fragment>
      <Navbar />

      <div class="latest-products">
        <div class="container">
          <div class="row">

            <br />
            <br />
            {ordertlist.map(ls => (
              <div class="col-md-4" key={ls.UserName}>
                <div class="product-item">
                  <img src={ls.image} id="Product__image__setting"
                                     alt="product image" style={{height:'20em'}}/>
                  <div class="down-content">
                    <h4><b>{t("Product Name")}: </b> {ls.ProductName}</h4>
                    <h4><b>{t("Total Price of order ")}:</b> {t("SAR")}.{ls.ProductPrice}</h4>
                    <h4><b>{t("UserName")}:  </b>{ls.UserName}</h4>
                    <h4><b>{t("Address")}:  </b>{ls.Address}</h4>
                    <h4><b>{t("Date")}:  </b>{ls.Date}</h4>
                    <h4><b>{t("Tiles Meters")}:  </b>{ls.TilesMeters}</h4>
                    <h4><b>{t("Email")}:  </b>{ls.Email}</h4>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}
export default Listproduct;