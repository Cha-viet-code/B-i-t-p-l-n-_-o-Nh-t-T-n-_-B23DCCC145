const images = [
    'https://cdn.chotot.com/yKu5cE4s7UM_T9OHuXCOYvclOSNmoj22_tTlVkZQTi8/preset:view/plain/471c863a3f9cf72e7c50e6b24cf75490-2883462212409078251.jpg', 
    'https://cdn.chotot.com/7gOycyL5KumeAwOAoQVkgJEo5hKMcbjPmJdDf6Snb9A/preset:view/plain/c661b873ba91f6ebede2ed2c9153ed05-2883462212422818414.jpg', 
    'https://cdn.chotot.com/p6vvtFRm68-KCHodX1565euuquFQjtqR6W0VK5u3KWk/preset:view/plain/b660082cecdc30f536481df60b755b37-2883462212474914009.jpg',
    'https://cdn.chotot.com/zZnojVaim-ecBiCvHZ-GlLXcA21URvBK4616PM3g1Jk/preset:view/plain/bf25dda4d8287c3444c3b187412cd1c0-2883462212589606993.jpg'
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

