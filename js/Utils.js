// ===============================
// MegaNet Voucher Management
// utils.js
// ===============================

// Generate Random ID
function generateId(length = 12){

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let id = "";

    for(let i = 0; i < length; i++){

        id += chars.charAt(
            Math.floor(Math.random() * chars.length)
        );

    }

    return id;

}

// Generate Voucher Code
function generateVoucherCode(length = 8){

    const numbers = "0123456789";

    let code = "";

    for(let i = 0; i < length; i++){

        code += numbers.charAt(
            Math.floor(Math.random() * numbers.length)
        );

    }

    return code;

}

// Format Currency
function money(value){

    return "₦" + Number(value).toLocaleString("en-NG");

}

// Format Number
function number(value){

    return Number(value).toLocaleString("en-NG");

}

// Format Date
function formatDate(date){

    return new Date(date).toLocaleDateString("en-NG",{

        day:"2-digit",

        month:"short",

        year:"numeric"

    });

}

// Format Date Time
function formatDateTime(date){

    return new Date(date).toLocaleString("en-NG");

}

// Current Timestamp
function now(){

    return new Date().toISOString();

}

// Save Local Storage
function save(key,data){

    localStorage.setItem(

        key,

        JSON.stringify(data)

    );

}

// Read Local Storage
function read(key){

    return JSON.parse(

        localStorage.getItem(key)

    ) || [];

}

// Delete Local Storage
function remove(key){

    localStorage.removeItem(key);

}

// Find Voucher
function findVoucher(code,vouchers){

    return vouchers.find(

        voucher => voucher.code === code

    );

}

// Calculate Total Revenue
function totalRevenue(vouchers){

    return vouchers.reduce((sum,voucher)=>{

        if(voucher.status === "Activated"){

            return sum + voucher.price;

        }

        return sum;

    },0);

}

// Count Activated Today
function activatedToday(vouchers){

    const today = new Date().toDateString();

    return vouchers.filter(voucher=>{

        if(!voucher.activatedAt) return false;

        return new Date(
            voucher.activatedAt
        ).toDateString() === today;

    }).length;

}

// Count Available
function availableCount(vouchers){

    return vouchers.filter(

        voucher => voucher.status === "Available"

    ).length;

}

// Count By Package
function packageCount(vouchers,packageName){

    return vouchers.filter(voucher=>{

        return voucher.package === packageName &&
               voucher.status === "Activated";

    }).length;

}

// Export JSON
function downloadJSON(data,fileName){

    const blob = new Blob(

        [JSON.stringify(data,null,2)],

        {

            type:"application/json"

        }

    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = fileName;

    a.click();

    URL.revokeObjectURL(url);

  }
