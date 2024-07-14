const images = [
    'https://cdn.chotot.com/3eZcSVBWcH0YHrvZftxqz-EPYqOu5E_3WV7zU98Nmg0/preset:view/plain/776f207b04363236d8b9492665741665-2860575006126597282.jpg', 
    'https://cdn.chotot.com/ryzAgZN-OGcg1fx9heSSfw7NmAHBkxezD8G2uhK0hFQ/preset:view/plain/3bb72bdbc4d938da51c4ffa1ccc9c3c2-2860575005296703713.jpg', 
    'https://cdn.chotot.com/oLrNpSIedvWe8us_KhcMERYFg7Pu_5qcYx_b90hpoSc/preset:view/plain/fe96a6ee1c8dd0f33e46a6a5c7da5e95-2860575001887611404.jpg',
    'https://cdn.chotot.com/MaUXGto4ipdvadX3AIjRb-SWAfmd64Qw92oiXvNaFbc/preset:view/plain/774482f3d0757110d82d0c89542e5139-2860575005753684785.jpg'
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