let fadeTarget = document.querySelector(".loading");

function show_loading() {
    fadeTarget.style.display = "block"; // Memperbaiki "blok" menjadi "block" dan "Style" menjadi "style"
}
function hide_loading() {
    fadeTarget.Style.display = "none";
}
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

 // Mendapatkan elemen audio
 const audioPlayer = document.getElementById('audioPlayer');

 // Menghapus mute setelah halaman dimuat
 window.addEventListener('load', () => {
     audioPlayer.muted = false; // Mengaktifkan suara
 });