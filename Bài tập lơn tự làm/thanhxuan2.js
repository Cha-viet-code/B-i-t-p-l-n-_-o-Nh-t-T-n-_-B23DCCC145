const images = [
    'https://cdn.chotot.com/Q7AhP4u4g9gQbi7HfJMAGelszNOJfeVgm1zRb_fLNXU/preset:view/plain/c0a896e4758d4f251561159653c39dd8-2886224268447867748.jpg', 
    'https://cdn.chotot.com/m3TvPLekmBc_JCCobcISwYsOh-6PPv5jQjGMZkt9xxY/preset:view/plain/8b24ffaf2030851d5cdefb7176283efa-2886224277452016488.jpg', 
    'https://cdn.chotot.com/D9HRmUEV5rKz4wxpw7fAognwfB10tqjbbvG_n_l9ZDo/preset:view/plain/fb3cfa4b50735fde5bd84a1adc0d2789-2886224268677017498.jpg',
    'https://cdn.chotot.com/qtoH7bZEn39txwwzQiaIUxu5BM9mETctzaj-0Bh0Y3c/preset:view/plain/dc714a2ddb562f0fe276965d778fdd0b-2886224277352351098.jpg'
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
