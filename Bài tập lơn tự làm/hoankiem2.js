const images = [
    'https://cdn.chotot.com/WnOCCKQwvK0tcehdFORGwii2c_TFiaTKfZVaK-RN6Bw/preset:view/plain/2847fb9f26c7212bf9d288cd7be1908f-2884798976400868191.jpg', 
    'https://cdn.chotot.com/no3nPfLWW4tn8Po8iFiDHt24M30UQSaS7X6j7AOl98M/preset:view/plain/206d337263562a1bb450222720d86e66-2884798976336706103.jpg', 
    'https://cdn.chotot.com/gs_yRrbcPoOn3qq3VIdgGW-RZRRKabrm90ijJ37MTs0/preset:view/plain/f1fba7b9e5713380fcb66a9baedeac64-2884798976465795527.jpg',
    'https://cdn.chotot.com/Ye1HIh25romeM1SRXBCsV5Hyy_9--KCYvJYMM194IFo/preset:view/plain/562095bf82bb124984677d638e714ca4-2884798976398255402.jpg'
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
