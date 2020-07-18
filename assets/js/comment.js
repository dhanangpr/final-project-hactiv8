let data = [
    ["Ringgas", "Terima kasih atas penjelasannya."],
    ["Aldi", "Artikel ini sangat bagus."]
];

function showComments(){
    let pages = document.getElementById("comments");
    pages.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        pages.innerHTML += "<h5>" + data[i][0] + "</h5>";
        pages.innerHTML += "<p>" + data[i][1] + "</p>";
    }
}

 showComments();

function sendComment(event){
    event.preventDefault();

    let name = document.getElementById("name");
    let comment = document.getElementById("comment");

    if(name.value.length < 4){
        document.getElementById('alertName').innerHTML =
        `<div class="alert-danger" role="alert">
            <p>Mohon masukkan minimal 4 karakter.</p>
        </div>`;
    } else {
        document.getElementById('alertName').innerHTML = '';
    }

    if(comment.value.length < 15){
        document.getElementById('alertComment').innerHTML =
        `<div class="alert-danger" role="alert">
            <p>Mohon masukkan minimal 15 karakter.</p>
        </div>`;
    } else {
        document.getElementById('alertComment').innerHTML = '';
    }

    if(name.value !== "" && comment.value !== ""){
        let msg = [name.value, comment.value];
        data.unshift(msg);
        showComments();
        name.value = "";
        comment.value = "";
    }
}