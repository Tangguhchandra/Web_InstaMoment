let col_btn = document.querySelectorAll(".btn-col");
let col_item = document.querySelectorAll(".collection-item");

col_btn.forEach((btn,index)=>{
    btn.addEventListener("click",(e)=>{
        col_btn.forEach((col_bt,ind)=>{
            col_bt.classList.remove("btn");
        })
        e.target.classList.add("btn");
        let data_btn = btn.getAttribute("data-btn");
        col_item.forEach((col,inde)=>{
            if(col.getAttribute("data-item")==data_btn || data_btn == "all"){
                col.classList.remove("hide")
            }else{
                col.classList.add("hide");
            }
        })
    })
})

document.getElementById("toggleButton").addEventListener("click", function() {
    var tab = document.getElementById("serviceTab");
    
    if (tab.classList.contains("show")) {
        tab.classList.remove("show"); // Sembunyikan dengan animasi
        setTimeout(() => { tab.style.display = "none"; }, 300); // Delay agar animasi selesai dulu
    } else {
        tab.style.display = "block"; // Tampilkan tab
        setTimeout(() => { tab.classList.add("show"); }, 10); // Tambahkan animasi setelah tampil
    }
});

document.addEventListener("DOMContentLoaded", function() { // Pastikan script berjalan setelah halaman dimuat
    var orderButton = document.getElementById("orderr");

    if (orderButton) {
        orderButton.addEventListener("click", function() {
            console.log("Tombol diklik!"); // Debugging (cek di console)
            
            var phoneNumber = "6285700427216"; // Ganti dengan nomor WhatsApp (tanpa +)
            var message = "Halo Kak, saya mau Order😁!"; // Pesan otomatis
            
            // Encode pesan agar sesuai format URL
            var encodedMessage = encodeURIComponent(message);
            
            // Redirect ke WhatsApp
            window.location.href = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;
        });
    } else {
        console.log("Tombol tidak ditemukan!"); // Cek apakah ID salah
    }
});

// nav bar

let ul = document.querySelector("ul");
let burger_icon = document.querySelector(".burger_icon");

burger_icon.addEventListener("click",()=>{
    if(burger_icon.classList.contains("fa-bars")){
        burger_icon.classList.add("fa-xmark");
        burger_icon.classList.remove("fa-bars");
        ul.classList.add("active");
    }
    else{
        burger_icon.classList.remove("fa-xmark");
        burger_icon.classList.add("fa-bars");
        ul.classList.remove("active");
    }
})
