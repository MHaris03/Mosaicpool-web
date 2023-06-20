import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import history from './history';
import Home from '../Components/Home/Home';
import CartView from '../View/CartView';
import About from '../Components/About/About';
import Card from '../Components/payment/card';
import Contactus from '../Components/Contactus/contactus';
import Gallery from '../Components/Gallery/Gallery'
import Orderproduct from '../Components/Cart/orderproduct';
import Listproduct from '../Components/listproduct/listproduct';
import Notfound from '../Pagenotfound/Notfound';
import Userinfo from '../Components/Chekoutuser/Userinfo';
const Routing = () => {

    return (
        <React.Fragment>
            {
                <Router history={history}>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={props => <Home {...props} />}
                        />
                        <Route
                            exact
                            path="/View/CartView"
                            render={props => <CartView {...props} />}
                        />
                        <Route
                            exact
                            path="/About"
                            render={props => <About {...props} />}
                        />
                        <Route
                            exact
                            path="/Components/card/card"
                            render={props => <Card {...props} />}
                        />
                        <Route
                            exact
                            path="/ContactUs"
                            render={props => <Contactus {...props} />}
                        />
                        <Route
                            exact
                            path="/Gallery"
                            render={props => <Gallery {...props} />}
                        />
                        <Route
                            exact
                            path="/ConfirmOrder"
                            render={props => <Orderproduct {...props} />}
                        />
                        <Route
                            exact
                            path="/Components/product"
                            render={props => <Listproduct {...props} />}
                        />
                        <Route
                            exact
                            path="/Chekout"
                            render={props => <Userinfo {...props} />}
                        />
                        <Route
                            path='*'
                            render={props => <Notfound {...props} />}
                        />
                    </Switch>
                </Router>
            }
        </React.Fragment>
    )
}

export default Routing;