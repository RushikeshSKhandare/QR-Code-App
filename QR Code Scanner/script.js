const wrapper = document.querySelector('.wrapper'),
form  = wrapper.querySelector('form'),
fileinp = form.querySelector('input');
infoText = form.querySelector('p')
   
function fetchRequest(formData){
    infoText.innerText = 'Scanning QR Code...';
    fetch("http://api.qrserver.com/v1/read-qr-code/", {
        method: "POST" , body: formData
    }).then(res => res.json()).then(result => {
        
        infoText.innerText = 'Upload QR Code to Scan';
        wrapper.classList.add("active");
        console.log(result);
    })
}



fileinp.addEventListener("change", e => {
    let file = e.target.files[0]; //getting user selected file
    // console.log(file)
    let formData = new FormData(); // creating a new function object
    formData.append("file", file);
    fetchRequest(formData)
});



form.addEventListener('click', () => fileinp.click());

