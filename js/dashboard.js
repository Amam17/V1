// ===============================
// MegaNet Voucher Management
// dashboard.js
// ===============================

// Dashboard Data
const dashboard = {

    totalVouchers: 0,

    activatedToday: 0,

    todayRevenue: 0,

    availableVouchers: 0,

    packages:{

        "24 Hours":0,

        "3 Days":0,

        "7 Days":0,

        "14 Days":0,

        "30 Days":0,

        "Night Plan":0

    },

    recentActivations:[

    ]

};

// Update KPI Cards
function updateDashboard(){

    document.getElementById("totalVoucher").textContent =
        formatNumber(dashboard.totalVouchers);

    document.getElementById("activatedToday").textContent =
        formatNumber(dashboard.activatedToday);

    document.getElementById("todayRevenue").textContent =
        formatMoney(dashboard.todayRevenue);

    document.getElementById("availableVoucher").textContent =
        formatNumber(dashboard.availableVouchers);

}

// Update Today's Activations
function updatePackageTable(){

    document.getElementById("day1").textContent =
        dashboard.packages["24 Hours"];

    document.getElementById("day3").textContent =
        dashboard.packages["3 Days"];

    document.getElementById("day7").textContent =
        dashboard.packages["7 Days"];

    document.getElementById("day14").textContent =
        dashboard.packages["14 Days"];

    document.getElementById("day30").textContent =
        dashboard.packages["30 Days"];

    document.getElementById("night").textContent =
        dashboard.packages["Night Plan"];

    document.getElementById("totalActivated").textContent =
        dashboard.activatedToday;

}

// Update Recent Activations
function updateRecentActivations(){

    const table =
        document.getElementById("recentTable");

    table.innerHTML = "";

    if(dashboard.recentActivations.length===0){

        table.innerHTML =

        `
        <tr>

            <td colspan="4">

                No Activations Today

            </td>

        </tr>
        `;

        return;

    }

    dashboard.recentActivations.forEach(item=>{

        table.innerHTML +=

        `
        <tr>

            <td>${item.time}</td>

            <td>${item.voucher}</td>

            <td>${item.package}</td>

            <td>${item.agent}</td>

        </tr>
        `;

    });

}

// Refresh Dashboard
function refreshDashboard(){

    updateDashboard();

    updatePackageTable();

    updateRecentActivations();

}

// Sample Data
dashboard.totalVouchers = 5000;

dashboard.activatedToday = 87;

dashboard.todayRevenue = 82650;

dashboard.availableVouchers = 4913;

dashboard.packages["24 Hours"] = 23;

dashboard.packages["3 Days"] = 12;

dashboard.packages["7 Days"] = 18;

dashboard.packages["14 Days"] = 6;

dashboard.packages["30 Days"] = 28;

dashboard.packages["Night Plan"] = 9;

dashboard.recentActivations = [

{

time:"10:35",

voucher:"34873386",

package:"24 Hours",

agent:"Musty"

},

{

time:"10:28",

voucher:"55382144",

package:"30 Days",

agent:"Ali"

},

{

time:"10:20",

voucher:"88362211",

package:"7 Days",

agent:"Bello"

}

];

refreshDashboard();
