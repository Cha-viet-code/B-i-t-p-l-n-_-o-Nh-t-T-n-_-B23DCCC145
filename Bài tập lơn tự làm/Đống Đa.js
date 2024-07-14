const images = [
    'https://cdn.chotot.com/8Hlcw-kFf60DpOO1TKhveITbBz5zkQNw6STi5bLC7yY/preset:view/plain/61a28356728361a16d654a64cec6788d-2887091537360796859.jpg', 
    'https://cdn.chotot.com/CETVnYvkvkmv2zKIN7SMhuQfu57-eDH4ksjJUiroZ7A/preset:view/plain/a7e7111dd6ad04a1932f3ea223c29a11-2887091537756766603.jpg', 
    'https://cdn.chotot.com/wM0Myo1RQB27pLc2bpeXpJIrbplg_rUO-yFfEOfl1dA/preset:view/plain/c9819b802f93199138a28104c07498f8-2887091538394576371.jpg',
    'https://cdn.chotot.com/dy0VonVIh4pGlztx-0ohwN3lLtNLMGFRluPTrK1o5KI/preset:view/plain/8dfc3a4acb228b765ba72cee58f727ba-2887091539072138427.jpg'
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

