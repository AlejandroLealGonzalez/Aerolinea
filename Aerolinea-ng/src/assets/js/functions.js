function OpenGeneralMessageModal(message){
    document.querySelector("#pMessage").innerHTML = message;
    let elem = document.querySelector("#modal-general-message");
    var instance = M.Modal.getInstance(elems);
    instance.open();
}