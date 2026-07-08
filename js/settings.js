// ===============================
// MegaNet Voucher Management
// settings.js
// ===============================

// Load Settings
const settings = JSON.parse(
    localStorage.getItem("meganet_settings")
) || {

    companyName: "",

    companyEmail: "",

    companyPhone: "",

    huaweiProjectId: "",

    huaweiTenantId: "",

    huaweiCsrfToken: "",

    firebaseApiKey: "",

    firebaseProjectId: ""

};

// Populate Fields
document.getElementById("companyName").value =
    settings.companyName;

document.getElementById("companyEmail").value =
    settings.companyEmail;

document.getElementById("companyPhone").value =
    settings.companyPhone;

document.getElementById("projectId").value =
    settings.huaweiProjectId;

document.getElementById("tenantId").value =
    settings.huaweiTenantId;

document.getElementById("csrfToken").value =
    settings.huaweiCsrfToken;

document.getElementById("apiKey").value =
    settings.firebaseApiKey;

document.getElementById("firebaseProject").value =
    settings.firebaseProjectId;

// Save Settings
function saveSettings(){

    localStorage.setItem(

        "meganet_settings",

        JSON.stringify(settings)

    );

}

// Company
document.getElementById("saveCompany").onclick = function(){

    settings.companyName =
        document.getElementById("companyName").value;

    settings.companyEmail =
        document.getElementById("companyEmail").value;

    settings.companyPhone =
        document.getElementById("companyPhone").value;

    saveSettings();

    alert("Company settings saved.");

};

// Huawei
document.getElementById("saveHuawei").onclick = function(){

    settings.huaweiProjectId =
        document.getElementById("projectId").value;

    settings.huaweiTenantId =
        document.getElementById("tenantId").value;

    settings.huaweiCsrfToken =
        document.getElementById("csrfToken").value;

    saveSettings();

    alert("Huawei settings saved.");

};

// Firebase
document.getElementById("saveFirebase").onclick = function(){

    settings.firebaseApiKey =
        document.getElementById("apiKey").value;

    settings.firebaseProjectId =
        document.getElementById("firebaseProject").value;

    saveSettings();

    alert("Firebase settings saved.");

};

console.log("Settings Loaded Successfully");
