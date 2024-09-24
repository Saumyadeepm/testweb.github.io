const scriptURL ='https://script.google.com/macros/s/AKfycbz1xhmtHDD2Wz0pjbfNirAJZC-3A4kney8x4IxcMqfHtE6k4LFTmeGNVEs41OJNCkbo/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefaut()
    fetch(scriptURL,{method: 'POST',body: new FormData(form)})
    .then(response=> alert("Thank you"))
    .then(() => {window.location.reload();})
    .catch(error=> console.error('Error!,error.message'))
})
   