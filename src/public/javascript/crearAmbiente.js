function createEnvironment(){
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const plainFormData = Object.fromEntries(formData.entries());
    
    plainFormData.active = true;
    plainFormData.enabled = true;
    plainFormData.facility = ["Data", "Wi-fi"];
    
    const jsonData = JSON.stringify(plainFormData);
    const response =fetch("/api/Environments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    });
}