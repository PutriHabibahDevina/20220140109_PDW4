const waktu = document.getElementById("waktu");

//Set tanggal
function tanggal(){
    const date = new Date();
    waktu.innerHTML = date;
}

//Menggunakan sweetalert2 untuk memunculkan pop up
function sweetAlert(){
    sweetAlert.fire({
        title: "Login Success",
        text: "Berhasil",
        icon: "success"
    });
}

//Memanggil fungsi dan parameternya
setInterval(tanggal, 1000);
tanggal();
sweetAlert();