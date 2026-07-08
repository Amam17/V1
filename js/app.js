// ===============================
// MegaNet Voucher Management
// app.js
// ===============================

// Current Date
const currentDate = document.getElementById("currentDate");

if (currentDate) {

    const today = new Date();

    currentDate.innerHTML = today.toLocaleDateString("en-NG", {

        weekday: "long",

        day: "numeric",

        month: "long",

        year: "numeric"

    });

}

// Currency Formatter
function formatMoney(amount){

    return "₦" + Number(amount).toLocaleString("en-NG");

}

// Number Formatter
function formatNumber(number){

    return Number(number).toLocaleString("en-NG");

}

// Status Badge
function getStatusClass(status){

    switch(status){

        case "Available":
            return "status online";

        case "Allocated":
            return "status warning";

        case "Activated":
            return "status online";

        case "Expired":
            return "status offline";

        case "Returned":
            return "status warning";

        default:
            return "status";

    }

}

// Notification
function showMessage(message){

    alert(message);

}

// Loading Button
function loading(button){

    button.disabled = true;

    button.innerHTML = "Loading...";

}

function stopLoading(button,text){

    button.disabled = false;

    button.innerHTML = text;

}

// Random Voucher Generator
function generateVoucher(length = 8){

    let result = "";

    const numbers = "0123456789";

    for(let i=0;i<length;i++){

        result += numbers.charAt(
            Math.floor(Math.random()*numbers.length)
        );

    }

    return result;

}

// Local Storage Helper
function saveLocal(key,data){

    localStorage.setItem(

        key,

        JSON.stringify(data)

    );

}

function getLocal(key){

    return JSON.parse(

        localStorage.getItem(key)

    ) || [];

}

// Huawei Sync Time
function updateSyncTime(){

    const sync = document.getElementById("lastSync");

    if(sync){

        sync.innerHTML = new Date().toLocaleTimeString();

    }

}

updateSyncTime();

// Auto Update Every Minute
setInterval(updateSyncTime,60000);

console.log("MegaNet Voucher System Loaded");
