import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
 apiKey: "AIzaSyCUbrJR7I-RQpCNbvIDGwXKk7zdy0gZmz0",
 authDomain: "inventory-management-app-846ff.firebaseapp.com",
 projectId: "inventory-management-app-846ff",
 storageBucket: "inventory-management-app-846ff.appspot.com",
 messagingSenderId: "435928870877",
 appId: "1:435928870877:web:9ba145db578f762f311034"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };