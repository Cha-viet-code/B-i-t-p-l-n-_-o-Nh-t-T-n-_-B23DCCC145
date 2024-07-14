const images = [
    'https://cdn.chotot.com/hPOaMHzPVwYoqf-dQgg7-f-prDV18t_b9_bwju5FOb8/preset:view/plain/f9c561973b3842e55907c1f7f6cd5176-2886946637155967875.jpg', 
    'https://cdn.chotot.com/7Zn6dq_j5m8o733ZrOAY9ju_JB2vRa7oPXHMoGqu8-E/preset:view/plain/f28afddc2fba7ce8cc3c430e2beb2039-2886946861733034461.jpg', 
    'https://cdn.chotot.com/ESHBObHcrG3bQh_qJ8pqsIAurGQK0FcmVfVmSWt-7dI/preset:view/plain/00592f865d9cd51429fd6e363041d219-2886946889657512324.jpg',
    'https://cdn.chotot.com/oZiVfxVzX1iD9MnI1WJTIKOf8sk4q7YtWPmDrODlRqk/preset:view/plain/66bed156def1635f5b026535d36719ac-2886946889576692343.jpg'
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

