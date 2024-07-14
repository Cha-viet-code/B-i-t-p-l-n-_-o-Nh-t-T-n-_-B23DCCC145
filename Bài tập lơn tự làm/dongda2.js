const images = [
    'https://cdn.chotot.com/SKGRV4wwJxsKXslZLDLFrK3_mR5Aeo_KyAnE3oSHfHE/preset:view/plain/fa688f31f736ee512b4388bd1cc9b08f-2792296531963960842.jpg', 
    'https://cdn.chotot.com/dbO-mFjBFVA-ZLRwyT1Ha4qe-SIld4P_GhaAW8XQHZs/preset:view/plain/32b183eaa0e02e7ccf3d645a4708c42f-2792296532004793893.jpg', 
    'https://cdn.chotot.com/66duyxYUofdomXSSEm9eMAzgL6p5zx55t48ntUM_evs/preset:view/plain/b333e3f727af9a479e91d15f54356867-2792296531968200237.jpg',
    'https://cdn.chotot.com/h7Y0_5j3Bp78yWjn-XBYKdwLmwBMMXaYNH1Z_3Chj9w/preset:view/plain/6ebd3bb3334cb8383756d5b76b8968dc-2792296639396138581.jpg'
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
