

 // Mendapatkan elemen audio dan elemen loading
 const audioPlayer = document.getElementById('audioPlayer');
 const fadeTarget = document.querySelector(".loading");

 // Menghapus mute setelah halaman dimuat
 window.addEventListener('load', () => {
     audioPlayer.muted = false; // Mengaktifkan suara
     hide_loading(); // Menyembunyikan elemen loading setelah halaman dimuat
 });

 // Menampilkan elemen loading
 function show_loading() {
     fadeTarget.style.display = "block"; // Menampilkan elemen loading
     fadeTarget.style.opacity = 1; // Memastikan opacity penuh saat ditampilkan
 }

 // Menyembunyikan elemen loading dengan efek memudar
 function hide_loading() {
     let fadeEffect = setInterval(() => {
         if (!fadeTarget.style.opacity) {
             fadeTarget.style.opacity = 1; // Memastikan nilai awal opacity diset
         }
         fadeTarget.style.opacity = parseFloat(fadeTarget.style.opacity); // Konversi ke angka
         if (fadeTarget.style.opacity > 0) {
             fadeTarget.style.opacity -= 0.1; // Mengurangi opacity secara perlahan
         } else {
             clearInterval(fadeEffect);
             fadeTarget.style.display = "none"; // Menyembunyikan elemen setelah memudar
         }
     }, 100);
 }
