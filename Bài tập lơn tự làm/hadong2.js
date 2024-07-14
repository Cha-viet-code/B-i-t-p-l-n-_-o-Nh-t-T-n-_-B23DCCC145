const images = [
    'https://cdn.chotot.com/GC9S0Rde63f_NyJtMQJmlZ2Hsj0gm1JehqoJEBolGBM/preset:view/plain/dbed5e4cd6572ee0ffae59ea46828eee-2886512133230269991.jpg', 
    'https://cdn.chotot.com/AbctYhJm-pAMYOZv6VlWnwsxISCMnwM8EoaGi5eA--8/preset:view/plain/3c21427aaa4f77923b11e330f96ce9a7-2886512132629383936.jpg', 
    'https://cdn.chotot.com/dQCHhLwIx0bpWywxqOLZJM_Z8h59FJ8a4OCSJ7TLprs/preset:view/plain/b27b0e5c62c94d55289ff3f645ba6b63-2886512129607790790.jpg',
    'https://cdn.chotot.com/UO2Ul-jv993ZLaU4upRcWlc50mOlPxEkSDNE_e3LdjU/preset:view/plain/08c62591c566d671c1f9747aa69fd241-2886512131052260096.jpg'
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