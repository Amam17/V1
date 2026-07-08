// ===============================
// MegaNet Voucher Management
// sync.js
// ===============================

let syncLogs = JSON.parse(
    localStorage.getItem("meganet_sync_logs")
) || [];

const syncButton = document.getElementById("syncNow");
const syncLog = document.getElementById("syncLog");

function saveLogs(){

    localStorage.setItem(
        "meganet_sync_logs",
        JSON.stringify(syncLogs)
    );

}

function renderLogs(){

    if(!syncLog) return;

    syncLog.innerHTML = "";

    if(syncLogs.length === 0){

        syncLog.innerHTML = `

        <tr>

            <td colspan="4">

                No Synchronization Yet

            </td>

        </tr>

        `;

        return;

    }

    syncLogs
    .slice()
    .reverse()
    .forEach(log=>{

        syncLog.innerHTML += `

        <tr>

            <td>${log.date}</td>

            <td>${log.time}</td>

            <td>${log.status}</td>

            <td>${log.message}</td>

        </tr>

        `;

    });

}

function updateStatistics(){

    document.getElementById("lastSync").textContent =
        syncLogs.length
        ? syncLogs[syncLogs.length-1].time
        : "--";

    document.getElementById("totalSynced").textContent =
        syncLogs.length;

    document.getElementById("todaySync").textContent =
        JSON.parse(
            localStorage.getItem("meganet_vouchers")
        )?.filter(v=>v.status==="Activated").length || 0;

    document.getElementById("syncStatus").textContent =
        "Connected";

}

function syncHuawei(){

    syncButton.disabled = true;

    syncButton.textContent = "Synchronizing...";

    setTimeout(()=>{

        const now = new Date();

        syncLogs.push({

            date: now.toLocaleDateString(),

            time: now.toLocaleTimeString(),

            status: "Success",

            message: "Huawei synchronization completed."

        });

        saveLogs();

        renderLogs();

        updateStatistics();

        syncButton.disabled = false;

        syncButton.textContent = "Synchronize Now";

    },2000);

}

if(syncButton){

    syncButton.onclick = syncHuawei;

}

renderLogs();

updateStatistics();
