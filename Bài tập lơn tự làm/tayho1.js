const images = [
    'https://cdn.chotot.com/zJcxOWusN_04L3i2BjiHL6kJ3-0Wl5PDVCjf2GixemQ/preset:view/plain/edafe101d34f946c5afc529ca506cd37-2869622030696898540.jpg', 
    'https://cdn.chotot.com/oUilLGlsjUeD8cQEeHIKG9Aplxa9zHHqWj8yBRAuq5E/preset:view/plain/9b5886c093f6d776c387b53f6f981e13-2869622038136767693.jpg', 
    'https://cdn.chotot.com/ETqkXcin6aBviBLd-7QLY8-do9-WQ9GWRWdWCAUx9zY/preset:view/plain/87765cc18dc137ecd6c7563674428a9b-2869622038543275921.jpg',
    'https://cdn.chotot.com/kM1M-bZwIexA3H_Nx0BgE7cM0yakE7wwb8NmdmnyZPA/preset:view/plain/9ef80a8a462a15c7e6481affad2bfbff-2869622038425872902.jpg'
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