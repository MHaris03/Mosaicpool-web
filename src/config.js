import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB50fQNecb07UD6AB7g7xFVH8E_Zg_Frh4",
  authDomain: "vip-mosaic-pool.firebaseapp.com",
  databaseURL: "https://vip-mosaic-pool-default-rtdb.firebaseio.com",
  projectId: "vip-mosaic-pool",
  storageBucket: "vip-mosaic-pool.appspot.com",
  messagingSenderId: "384931088496",
  appId: "1:384931088496:web:8b5a9370b17e3970060cb5",
  measurementId: "G-LK9D8FYLQ7"
};
const Firebaseapp = initializeApp(firebaseConfig);
export const auth=getAuth();
export default  Firebaseapp;