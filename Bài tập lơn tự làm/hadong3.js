const images = [
    'https://cdn.chotot.com/t_LY1vo7iYKJQ9TQWjctnxeZQfU3-Mtcg7vAKy3jqpU/preset:view/plain/bb4081f2b7ff319e89f647596ef307d3-2885786921580198662.jpg', 
    'https://cdn.chotot.com/OGARgjy3752aURNw6QtPCKj3Po6lddi4Y7PH5WKPXVw/preset:view/plain/c2e48a8bcc906afa330ba344a56109ae-2885786921871467701.jpg', 
    'https://cdn.chotot.com/VD1AkvompcQfq1hJY00UinpTXYOKW2ZMl3DLi0blblQ/preset:view/plain/aff157b87735904ddab10191b0209b1d-2885786922105250284.jpg',
    'https://cdn.chotot.com/950nwk_cFt835DF5PhwkpoWsit_ue0KceW_MJp1cKDo/preset:view/plain/2f08c628f4e3da1fc5d8c3bca64d374d-2885786922083580678.jpg'
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
