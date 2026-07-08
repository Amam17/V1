// ===============================
// MegaNet Voucher Management
// agents.js
// ===============================

let agents = [

{
    id:1,
    name:"Musty",
    phone:"08012345678",
    allocated:300,
    activated:271,
    revenue:81300
},

{
    id:2,
    name:"Bello",
    phone:"08098765432",
    allocated:150,
    activated:132,
    revenue:39600
},

{
    id:3,
    name:"Ali",
    phone:"08123456789",
    allocated:100,
    activated:81,
    revenue:24300
}

];

// Load Local Storage
const savedAgents = localStorage.getItem("meganet_agents");

if(savedAgents){

    agents = JSON.parse(savedAgents);

}

// Save Agents
function saveAgents(){

    localStorage.setItem(

        "meganet_agents",

        JSON.stringify(agents)

    );

}

// Render Table
function renderAgents(){

    const table = document.getElementById("agentTable");

    if(!table) return;

    table.innerHTML = "";

    agents.forEach((agent,index)=>{

        const remaining =

        agent.allocated - agent.activated;

        table.innerHTML +=

        `

        <tr>

        <td>${agent.name}</td>

        <td>${agent.phone}</td>

        <td>${number(agent.allocated)}</td>

        <td>${number(agent.activated)}</td>

        <td>${number(remaining)}</td>

        <td>${money(agent.revenue)}</td>

        <td>

        <button onclick="viewAgent(${index})">

        View

        </button>

        </td>

        </tr>

        `;

    });

}

// Search
const search = document.getElementById("searchAgent");

if(search){

search.addEventListener("keyup",function(){

const keyword = this.value.toLowerCase();

const rows = document.querySelectorAll("#agentTable tr");

rows.forEach(row=>{

row.style.display =

row.innerText.toLowerCase().includes(keyword)

?

""

:

"none";

});

});

}

// View Agent
function viewAgent(index){

const agent = agents[index];

const remaining =

agent.allocated-agent.activated;

alert(

`Agent Name : ${agent.name}

Phone : ${agent.phone}

Allocated : ${agent.allocated}

Activated : ${agent.activated}

Remaining : ${remaining}

Revenue : ${money(agent.revenue)}`

);

}

// Add Agent
const addAgent = document.getElementById("addAgent");

if(addAgent){

addAgent.onclick=function(){

const name = prompt("Agent Name");

if(!name) return;

const phone = prompt("Phone Number");

agents.push({

id:Date.now(),

name:name,

phone:phone,

allocated:0,

activated:0,

revenue:0

});

saveAgents();

renderAgents();

};

}

// Delete Agent
function deleteAgent(index){

if(confirm("Delete this agent?")){

agents.splice(index,1);

saveAgents();

renderAgents();

}

}

// Initialize
renderAgents();
