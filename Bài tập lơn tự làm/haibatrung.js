const images = [
    'https://cdn.chotot.com/ObzczDPTcAA8Kem1VdxN1LN88pgF_LsnAXQ9go7eo_Y/preset:view/plain/0b224ebc08fcd60f8ea9d941abd6ce32-2862661518989072602.jpg', 
    'https://cdn.chotot.com/WgtUdwJ32qMWNo8JM6Zk7-RY6bkt70n3vXdrlQ8TZog/preset:view/plain/4abf48caacbbe1f68ff48177edbc333d-2862661516119596275.jpg', 
    'https://cdn.chotot.com/5wFZVEtO9_4dJdqMZcvI9Lv7kmOJm_6RkLOBm-g4eGc/preset:view/plain/71f107609d56ffc318c4a0964f480307-2862661517688533374.jpg',
    'https://cdn.chotot.com/7Ja-pcVlYMOhfirAKqEM60SJDTN9sGjC--I63ksEOdU/preset:view/plain/d6d5aa2843189c8718d8877d6a11fecd-2862661520284285692.jpg'
];
let currentIndex = 0;

function changeImage(index) {
    currentIndex = index;
    document.getElementById('largeImage').src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    document.getElementById('largeImage').src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    document.getElementById('largeImage').src = images[currentIndex];
}
function toggleHeart(element) {
    element.classList.toggle('red');
}
document.getElementById("callButton").onclick = function() {
    var userConfirmed = confirm("Bạn có chắc chắn muốn gọi số này?");
    if (userConfirmed) {
        // Thực hiện hành động khi người dùng xác nhận
        window.location.href = "tel:0987654321";
    } else {
        // Thực hiện hành động khi người dùng hủy bỏ
        console.log("Người dùng đã hủy cuộc gọi.");
    }
}