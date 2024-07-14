const images = [
    'https://cdn.chotot.com/z8m47uOqqYRYoKdNRO46DBSapm7DwS8gbgWC35be6p0/preset:view/plain/1984ccac9f0659296c6da1d72fa33292-2876846921673870887.jpg', 
    'https://cdn.chotot.com/HB48MtepfaBmlWSIXainxtAQYFWXoiMifhOSLoZCwfk/preset:view/plain/e651c745fec7110c2b6f81da972839e9-2876846920521514908.jpg', 
    'https://cdn.chotot.com/lbRY4q0CcJXy-PUMX-iG_yTnD6s3ejHanRYHFZEyd_Q/preset:view/plain/7449c359b1c8792f6cdc1d57625be65f-2876846921396374786.jpg',
    'https://cdn.chotot.com/DHZib_KvOS7w9tMqnyXt2Sa6a1C2uDf7XYMrGQEZ9bQ/preset:view/plain/687638c0af891a3b1ef0cf387967d7cb-2876846920531672052.jpg'
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
