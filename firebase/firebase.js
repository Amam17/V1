// ==========================================
// MegaNet Voucher Management
// Firebase Configuration
// ==========================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {

getFirestore,

collection,

doc,

addDoc,

setDoc,

getDoc,

getDocs,

updateDoc,

deleteDoc,

query,

where,

orderBy,

serverTimestamp,

onSnapshot

}

from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

import {

getAuth,

signInWithEmailAndPassword,

signOut,

onAuthStateChanged

}

from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {

apiKey: "",

authDomain: "",

projectId: "",

storageBucket: "",

messagingSenderId: "",

appId: ""

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

// Collections

const voucherCollection = collection(db,"vouchers");

const agentCollection = collection(db,"agents");

const reportCollection = collection(db,"reports");

const activationCollection = collection(db,"activations");

const syncCollection = collection(db,"syncLogs");

// Authentication

async function login(email,password){

    return await signInWithEmailAndPassword(

        auth,

        email,

        password

    );

}

async function logout(){

    return await signOut(auth);

}

onAuthStateChanged(auth,user=>{

    if(user){

        console.log("Logged In");

    }else{

        console.log("Logged Out");

    }

});

// Voucher Functions

async function addVoucher(voucher){

    return await addDoc(

        voucherCollection,

        {

            ...voucher,

            createdAt:serverTimestamp()

        }

    );

}

async function updateVoucher(id,data){

    return await updateDoc(

        doc(db,"vouchers",id),

        data

    );

}

async function deleteVoucher(id){

    return await deleteDoc(

        doc(db,"vouchers",id)

    );

}

async function getVouchers(){

    return await getDocs(

        query(

            voucherCollection,

            orderBy("createdAt","desc")

        )

    );

}

// Agent Functions

async function addAgent(agent){

    return await addDoc(

        agentCollection,

        {

            ...agent,

            createdAt:serverTimestamp()

        }

    );

}

async function getAgents(){

    return await getDocs(agentCollection);

}

// Reports

async function saveReport(report){

    return await addDoc(

        reportCollection,

        {

            ...report,

            createdAt:serverTimestamp()

        }

    );

}

// Huawei Sync Logs

async function saveSync(log){

    return await addDoc(

        syncCollection,

        {

            ...log,

            createdAt:serverTimestamp()

        }

    );

}

// Live Voucher Listener

function listenVouchers(callback){

    onSnapshot(

        voucherCollection,

        callback

    );

}

export {

db,

auth,

login,

logout,

voucherCollection,

agentCollection,

reportCollection,

activationCollection,

syncCollection,

addVoucher,

updateVoucher,

deleteVoucher,

getVouchers,

addAgent,

getAgents,

saveReport,

saveSync,

listenVouchers

};
