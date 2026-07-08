// ===============================
// MegaNet Voucher Management
// reports.js
// ===============================

// Load Data
const vouchers = JSON.parse(
    localStorage.getItem("meganet_vouchers")
) || [];

const agents = JSON.parse(
    localStorage.getItem("meganet_agents")
) || [];

// Packages
const packages = [
    {name:"24 Hours", price:300},
    {name:"3 Days", price:750},
    {name:"7 Days", price:1800},
    {name:"14 Days", price:3800},
    {name:"30 Days", price:8500},
    {name:"Night Plan", price:180}
];

// Dashboard Cards
let totalRevenue = 0;
let totalActivated = 0;
let totalAvailable = 0;

vouchers.forEach(voucher=>{

    if(voucher.status==="Activated"){

        totalActivated++;

        totalRevenue += Number(voucher.price);

    }

    if(voucher.status==="Available"){

        totalAvailable++;

    }

});

document.getElementById("totalRevenue").textContent =
money(totalRevenue);

document.getElementById("totalActivated").textContent =
number(totalActivated);

document.getElementById("totalAvailable").textContent =
number(totalAvailable);

document.getElementById("totalAgents").textContent =
number(agents.length);

// Package Report
const packageReport =
document.getElementById("packageReport");

packages.forEach(pkg=>{

    const activated =
    vouchers.filter(v=>{

        return v.package===pkg.name &&
               v.status==="Activated";

    }).length;

    const revenue = activated * pkg.price;

    packageReport.innerHTML += `

    <tr>

        <td>${pkg.name}</td>

        <td>${number(activated)}</td>

        <td>${money(revenue)}</td>

    </tr>

    `;

});

// Agent Report
const agentReport =
document.getElementById("agentReport");

agents.forEach(agent=>{

    agentReport.innerHTML += `

    <tr>

        <td>${agent.name}</td>

        <td>${number(agent.activated)}</td>

        <td>${money(agent.revenue)}</td>

    </tr>

    `;

});

// Export Report
function exportReport(){

    const report = {

        generated:new Date(),

        totalRevenue,

        totalActivated,

        totalAvailable,

        totalAgents:agents.length,

        packages,

        agents

    };

    downloadJSON(

        report,

        "MegaNet-Report.json"

    );

}

const exportButton = document.createElement("button");

exportButton.textContent = "Export Report";

exportButton.style.marginTop = "20px";

exportButton.onclick = exportReport;

document.querySelector(".main").appendChild(exportButton);
