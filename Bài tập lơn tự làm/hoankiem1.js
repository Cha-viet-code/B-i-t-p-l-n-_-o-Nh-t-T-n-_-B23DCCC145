const images = [
    'https://cdn.chotot.com/3LxSGuIakT4fvskBkTkkrC8w3IiK5ofbW2mfDGJ-pI8/preset:view/plain/01a2024473cfc1cc21310a980443c506-2884813416080849463.jpg', 
    'https://cdn.chotot.com/PGbrFZ97m6auH9TqGPB59PTCqSlDlBylJyHMgcRHKxs/preset:view/plain/4b894fe2ab35207712c448586421c32e-2884813416234523218.jpg', 
    'https://cdn.chotot.com/5OvySz2X_GKhaBJc0MzQDIXiuugapRoT2Wy8tw_aFls/preset:view/plain/89d370496849009277be84bf3ba75b43-2884813416520993062.jpg',
    'https://cdn.chotot.com/lKv2RsDAcVCyOi2us4s0JzVqfNE5vu0v_Sho_F-YA6w/preset:view/plain/3157a9d481fa172913fa04240f8183f2-2884813416538173572.jpg'
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