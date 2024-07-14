const images = [
    'https://cdn.chotot.com/3yJLBq0UUMgm1aYzs3K7oklylhAT7g4wOLjIOwLga5E/preset:view/plain/8f014a93c359149e2b25804946587b81-2876250152859985177.jpg', 
    'https://cdn.chotot.com/z0HI8gshfW4pFnONGFWYcc6727ILZ2lk6Lo6EENgED8/preset:view/plain/9adfcc030758ee1fabeb4e11decd757f-2876250156498847689.jpg', 
    'https://cdn.chotot.com/ICjo0ejrBwZNTyLlmNLq2oRvdmKDrZonF7E-aOHAtjw/preset:view/plain/6eb9ec367886eb2fe43998776587eb63-2876250160961652681.jpg',
    'https://cdn.chotot.com/P2T2vPzKBm8333XTjOA1qWWIv9Oz-4YKMxvglmldYNQ/preset:view/plain/ef35534e14d5897b7242a907657888e6-2876250177620600068.jpg'
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


