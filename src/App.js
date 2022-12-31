import React from "react";
import store from "./Store/store";
import { Provider } from "react-redux";
import Routing from "./Routing/Routing";
import { Suspense } from "react";
import db from "./db";
import {
  onSnapshot,
  collection,
  query,
} from "firebase/firestore";
const App = () => {
  const Fetchdata = async () => {
    const q = query(collection(db, "Products"));
    const unsub = onSnapshot(q, (querySnapshot) => {
    });
  };

  return (
    <React.Fragment>
      <Suspense fallback={null}>
      <Provider store={store}>
          <Routing/>
          
        </Provider>
        </Suspense> 
    </React.Fragment>
  );
};

export default App;
