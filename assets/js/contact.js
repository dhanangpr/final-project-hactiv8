function contactUs(event){
    event.preventDefault();
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let subject = document.getElementById('subject');
    let message = document.getElementById('message');

    if(name.value.length < 4){
        document.getElementById('alertName').innerHTML =
        `<div class="alert-danger" role="alert">
            <p>Mohon masukkan minimal 4 karakter.</p>
        </div>`;
    } else {
        document.getElementById('alertName').innerHTML = '';
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))){
        document.getElementById('alertEmail').innerHTML =
        `<div class="alert-danger" role="alert">
            <p>Mohon masukkan email valid.</p>
        </div>`;
    } else {
        document.getElementById('alertEmail').innerHTML = '';
    }
    if(subject.value.length < 5){
        document.getElementById('alertSubject').innerHTML =
        `<div class="alert-danger" role="alert">
            <p>Mohon masukkan minimal 5 karakter.</p>
        </div>`;
    } else {
        document.getElementById('alertSubject').innerHTML = '';
    }
    if(message.value.length < 16){
        document.getElementById('alertMessage').innerHTML =
        `<div class="alert-danger" role="alert">
            <p>Mohon masukkan minimal 16 karakter.</p>
        </div>`;
    } else {
        document.getElementById('alertMessage').innerHTML = '';
    }
    if(name.value !== "" && email.value !== "" && subject.value !== "" && message.value !== ""){
        document.getElementById('alert').innerHTML =
        `<div class="alert alert-success" role="alert">
            Pesan Anda telah terkirim. Terima kasih!
        </div>`;
    }
}