import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {GOOGLE_API} from './.env';
const firebaseConfig = {
 apiKey: GOOGLE_API,
 authDomain: "inventory-management-app-846ff.firebaseapp.com",
 projectId: "inventory-management-app-846ff",
 storageBucket: "inventory-management-app-846ff.appspot.com",
 messagingSenderId: "435928870877",
 appId: "1:435928870877:web:9ba145db578f762f311034"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };