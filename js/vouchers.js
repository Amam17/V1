// ===============================
// MegaNet Voucher Management
// vouchers.js
// ===============================

let vouchers = [

{
    code:"34873386",
    package:"24 Hours",
    price:300,
    status:"Available",
    agent:"",
    created:"08 Jul 2026",
    activated:""
},

{
    code:"55382144",
    package:"30 Days",
    price:8500,
    status:"Activated",
    agent:"Musty",
    created:"08 Jul 2026",
    activated:"08 Jul 2026 10:32"
},

{
    code:"88362211",
    package:"7 Days",
    price:1800,
    status:"Allocated",
    agent:"Bello",
    created:"08 Jul 2026",
    activated:""
}

];

// Load Saved Data
const saved = localStorage.getItem("meganet_vouchers");

if(saved){

    vouchers = JSON.parse(saved);

}

// Save Data
function saveVouchers(){

    localStorage.setItem(

        "meganet_vouchers",

        JSON.stringify(vouchers)

    );

}

// Render Table
function renderVouchers(){

    const table = document.getElementById("voucherTable");

    if(!table) return;

    table.innerHTML = "";

    vouchers.forEach((voucher,index)=>{

        let statusClass = "warning";

        if(voucher.status==="Available") statusClass="online";

        if(voucher.status==="Activated") statusClass="online";

        if(voucher.status==="Expired") statusClass="offline";

        table.innerHTML += `

        <tr>

            <td>${voucher.code}</td>

            <td>${voucher.package}</td>

            <td>

                <span class="status ${statusClass}">

                ${voucher.status}

                </span>

            </td>

            <td>${voucher.agent || "-"}</td>

            <td>${voucher.created}</td>

            <td>${voucher.activated || "-"}</td>

            <td>${money(voucher.price)}</td>

            <td>

                <button onclick="viewVoucher(${index})">

                View

                </button>

            </td>

        </tr>

        `;

    });

}

// Search
const search = document.getElementById("searchVoucher");

if(search){

search.addEventListener("keyup",function(){

    const keyword = this.value.toLowerCase();

    const rows = document.querySelectorAll("#voucherTable tr");

    rows.forEach(row=>{

        row.style.display =

        row.innerText.toLowerCase().includes(keyword)

        ? ""

        : "none";

    });

});

}

// View Voucher
function viewVoucher(index){

    const voucher = vouchers[index];

    alert(

`Voucher : ${voucher.code}

Package : ${voucher.package}

Status : ${voucher.status}

Agent : ${voucher.agent || "-"}

Price : ${money(voucher.price)}

Created : ${voucher.created}

Activated : ${voucher.activated || "-"}`

    );

}

// Generate Voucher
const generateBtn = document.getElementById("generateBtn");

if(generateBtn){

generateBtn.onclick = function(){

    const voucher = {

        code:generateVoucherCode(),

        package:"24 Hours",

        price:300,

        status:"Available",

        agent:"",

        created:new Date().toLocaleDateString(),

        activated:""

    };

    vouchers.unshift(voucher);

    saveVouchers();

    renderVouchers();

};

}

// Export JSON
const exportBtn = document.getElementById("exportBtn");

if(exportBtn){

exportBtn.onclick=function(){

    downloadJSON(

        vouchers,

        "MegaNet-Vouchers.json"

    );

};

}

// Placeholder Buttons
const importBtn = document.getElementById("importBtn");
const allocateBtn = document.getElementById("allocateBtn");
const syncBtn = document.getElementById("syncBtn");

if(importBtn){

importBtn.onclick=()=>{

alert("Huawei Import Module Coming Next");

};

}

if(allocateBtn){

allocateBtn.onclick=()=>{

alert("Agent Allocation Module Coming Next");

};

}

if(syncBtn){

syncBtn.onclick=()=>{

alert("Huawei Sync Module Coming Next");

};

}

// Initialize
renderVouchers();
