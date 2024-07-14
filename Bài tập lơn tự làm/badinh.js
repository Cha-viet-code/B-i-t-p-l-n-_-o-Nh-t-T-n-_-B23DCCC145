const images = [
    'https://cdn.chotot.com/Ix9xnfZCAS_o2CtU1q-x5SH80lOzlEStYJQ65rHlgNo/preset:view/plain/2f924270ced43511815e98085a9bf9f6-2883492167005083052.jpg', 
    'https://cdn.chotot.com/mJQzDCjwNZKmkLllNakiKiQHeF2b4_geNp4spmp30oU/preset:view/plain/5f847ae3160a8c9c8f41985fd93e65dc-2883492180114264461.jpg', 
    'https://cdn.chotot.com/qwkcmm3qO048BeTH7k1N_eqDaaUtrBcfjG2Tf-2vt5o/preset:view/plain/e4a2f731079d471e1a2c43e1d8e18017-2883492279105968750.jpg',
    'https://cdn.chotot.com/Ix9xnfZCAS_o2CtU1q-x5SH80lOzlEStYJQ65rHlgNo/preset:view/plain/2f924270ced43511815e98085a9bf9f6-2883492167005083052.jpg'
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
