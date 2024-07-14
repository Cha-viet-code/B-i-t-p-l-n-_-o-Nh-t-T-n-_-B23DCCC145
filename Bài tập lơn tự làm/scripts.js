
document.addEventListener('DOMContentLoaded', function () {
    const listings = [
        { id: 1, name: 'Phòng trọ 1', price: 8500000, area: 40, address: 'Tây Hồ', image: "https://cdn.chotot.com/zJcxOWusN_04L3i2BjiHL6kJ3-0Wl5PDVCjf2GixemQ/preset:view/plain/edafe101d34f946c5afc529ca506cd37-2869622030696898540.jpg",link: "Tây Hồ1.html" },
        { id: 2, name: 'Phòng trọ 2', price: 2500000, area: 20, address: 'Cầu Giấy', image: 'https://cdn.chotot.com/hPOaMHzPVwYoqf-dQgg7-f-prDV18t_b9_bwju5FOb8/preset:view/plain/f9c561973b3842e55907c1f7f6cd5176-2886946637155967875.jpg', link: "Cầu Giấy.html"  },
        { id: 3, name: 'Phòng trọ 3', price: 1000000, area: 30, address: 'Thanh Xuân', image: 'https://cdn.chotot.com/yKu5cE4s7UM_T9OHuXCOYvclOSNmoj22_tTlVkZQTi8/preset:view/plain/471c863a3f9cf72e7c50e6b24cf75490-2883462212409078251.jpg',link: "Thanh Xuân1.html" },
        { id: 5, name: 'Phòng trọ 4', price: 4100000, area: 27, address: 'Đống Đa', image: 'https://cdn.chotot.com/8Hlcw-kFf60DpOO1TKhveITbBz5zkQNw6STi5bLC7yY/preset:view/plain/61a28356728361a16d654a64cec6788d-2887091537360796859.jpg',link: "Đống Đa.html" },
        { id: 4, name: 'Phòng trọ 5', price: 7300000, area: 40, address: 'Hà Đông', image: 'https://cdn.chotot.com/GC9S0Rde63f_NyJtMQJmlZ2Hsj0gm1JehqoJEBolGBM/preset:view/plain/dbed5e4cd6572ee0ffae59ea46828eee-2886512133230269991.jpg', link: "Hà Đông2.html" },
        { id: 6, name: 'Phòng trọ 6', price: 13000000, area: 45, address: 'Hai Bà Trưng', image: 'https://cdn.chotot.com/ObzczDPTcAA8Kem1VdxN1LN88pgF_LsnAXQ9go7eo_Y/preset:view/plain/0b224ebc08fcd60f8ea9d941abd6ce32-2862661518989072602.jpg',link: "Hai Bà Trưng.html" },
        { id: 7, name: 'Phòng trọ 7', price: 22000000, area: 40, address: 'Hoàn kiếm', image: 'https://cdn.chotot.com/3LxSGuIakT4fvskBkTkkrC8w3IiK5ofbW2mfDGJ-pI8/preset:view/plain/01a2024473cfc1cc21310a980443c506-2884813416080849463.jpg',link: "Hoàn Kiếm.html" },
        { id: 8, name: 'Phòng trọ 8', price: 23000000, area: 75, address: 'Thanh Xuân', image: 'https://cdn.chotot.com/Q7AhP4u4g9gQbi7HfJMAGelszNOJfeVgm1zRb_fLNXU/preset:view/plain/c0a896e4758d4f251561159653c39dd8-2886224268447867748.jpg',link: "Thanh Xuân2.html" },
        { id: 9, name: 'Phòng trọ 9', price: 13000000, area: 80, address: 'Tây Hồ', image: 'https://cdn.chotot.com/3eZcSVBWcH0YHrvZftxqz-EPYqOu5E_3WV7zU98Nmg0/preset:view/plain/776f207b04363236d8b9492665741665-2860575006126597282.jpg',link: "Tây Hồ2.html" },
        { id: 10, name: 'Phòng trọ 10', price: 4000000, area: 40, address: 'Hà Đông', image: 'https://cdn.chotot.com/3yJLBq0UUMgm1aYzs3K7oklylhAT7g4wOLjIOwLga5E/preset:view/plain/8f014a93c359149e2b25804946587b81-2876250152859985177.jpg',link: "Hà Đông1.html" },
        { id: 11, name: 'Phòng trọ 11', price: 30000000, area: 110, address: 'Hà Đông', image: 'https://cdn.chotot.com/yvKCoxXAJUFk3iY2L7cfbDaH9n4N02d_lzp-4ek2kU8/preset:view/plain/0df583510926bf16079a04ee71c718a3-2885786922265531851.jpg', link: "Hà Đông3.html" },
        { id: 12, name: 'Phòng trọ 12', price: 3200000, area: 80, address: 'Hoàn Kiếm', image: 'https://cdn.chotot.com/WnOCCKQwvK0tcehdFORGwii2c_TFiaTKfZVaK-RN6Bw/preset:view/plain/2847fb9f26c7212bf9d288cd7be1908f-2884798976400868191.jpg',link: "Hoàn Kiếm2.html" },
        { id: 13, name: 'Phòng trọ 13', price: 35000000, area: 65, address: 'Đống Đa', image: 'https://cdn.chotot.com/SKGRV4wwJxsKXslZLDLFrK3_mR5Aeo_KyAnE3oSHfHE/preset:view/plain/fa688f31f736ee512b4388bd1cc9b08f-2792296531963960842.jpg',link: "Đống Đa2.html" },
        { id: 14, name: 'Phòng trọ 14', price: 4500000, area: 54, address: 'Thanh Xuân', image: 'https://cdn.chotot.com/z8m47uOqqYRYoKdNRO46DBSapm7DwS8gbgWC35be6p0/preset:view/plain/1984ccac9f0659296c6da1d72fa33292-2876846921673870887.jpg', link: "Thanh Xuân3.html" },
        { id: 15, name: 'Phòng trọ 15', price: 40000000, area: 50, address: 'Ba Đình', image: 'https://cdn.chotot.com/Ix9xnfZCAS_o2CtU1q-x5SH80lOzlEStYJQ65rHlgNo/preset:view/plain/2f924270ced43511815e98085a9bf9f6-2883492167005083052.jpg' },
    ];

    const itemsPerPage = 3;
    let currentPage = 1;
    const totalPages = Math.ceil(listings.length / itemsPerPage);

    function renderListings(page, filteredListings = null) {
        const listingsContainer = document.querySelector('.listings');
        listingsContainer.innerHTML = '';
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const itemsToRender = filteredListings ? filteredListings.slice(start, end) : listings.slice(start, end);

        itemsToRender.forEach(listing => {
            const listingElement = document.createElement('div');
            listingElement.classList.add('listing');
            listingElement.innerHTML = `
           
            <a href="${listing.link}" target="_blank">
             <img src="${listing.image}" alt="${listing.name}">
             </a>
                <h3>${listing.name}</h3>
                <p>Giá: ${listing.price.toLocaleString()} VND</p>
                <p>Diện tích: ${listing.area} m2</p>
                <p>Địa chỉ: ${listing.address}</p>
            `;
            listingsContainer.appendChild(listingElement);
        });
    }

    function renderPagination(totalPages) {
        const paginationContainer = document.querySelector('.pagination');
        paginationContainer.innerHTML = '';
        const prevPage = document.createElement('a');
        prevPage.href = '#';
        prevPage.classList.add('prev-page');
        prevPage.innerHTML = '&laquo;';
        prevPage.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderListings(currentPage);
                updatePagination(totalPages);
            }
        });
        paginationContainer.appendChild(prevPage);

        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement('a');
            pageLink.href = '#';
            pageLink.classList.add('page-link');
            if (i === currentPage) {
                pageLink.classList.add('active');
            }
            pageLink.textContent = i;
            pageLink.addEventListener('click', () => {
                currentPage = i;
                renderListings(currentPage);
                updatePagination(totalPages);
            });
            paginationContainer.appendChild(pageLink);
        }

        const nextPage = document.createElement('a');
        nextPage.href = '#';
        nextPage.classList.add('next-page');
        nextPage.innerHTML = '&raquo;';
        nextPage.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderListings(currentPage);
                updatePagination(totalPages);
            }
        });
        paginationContainer.appendChild(nextPage);
    }

    function updatePagination(totalPages) {
        const pageLinks = document.querySelectorAll('.page-link');
        pageLinks.forEach(link => {
            link.classList.remove('active');
            if (parseInt(link.textContent) === currentPage) {
                link.classList.add('active');
            }
        });
    }

    document.querySelector('#price-range').addEventListener('change', function () {
        const selectedPriceRange = this.value;
        const selectedArea = document.querySelector('#area-range').value;
        const selectedLocation = document.querySelector('#location-range').value;
        let filteredListings = filterListings(selectedPriceRange, selectedArea, selectedLocation);

        const newTotalPages = Math.ceil(filteredListings.length / itemsPerPage);
        currentPage = 1;
        renderListings(currentPage, filteredListings);
        renderPagination(newTotalPages);
    });

    document.querySelector('#area-range').addEventListener('change', function () {
        const selectedArea = this.value;
        const selectedPriceRange = document.querySelector('#price-range').value;
        const selectedLocation = document.querySelector('#location-range').value;
        let filteredListings = filterListings(selectedPriceRange, selectedArea, selectedLocation);

        const newTotalPages = Math.ceil(filteredListings.length / itemsPerPage);
        currentPage = 1;
        renderListings(currentPage, filteredListings);
        renderPagination(newTotalPages);
    });

    document.querySelector('#location-range').addEventListener('change', function () {
        const selectedLocation = this.value;
        const selectedPriceRange = document.querySelector('#price-range').value;
        const selectedArea = document.querySelector('#area-range').value;
        let filteredListings = filterListings(selectedPriceRange, selectedArea, selectedLocation);

        const newTotalPages = Math.ceil(filteredListings.length / itemsPerPage);
        currentPage = 1;
        renderListings(currentPage, filteredListings);
        renderPagination(newTotalPages);
    });



    function filterListings(priceRange, areaRange, locationRange) {
        let filtered = listings;

        if (priceRange !== 'all') {
            const [minPrice, maxPrice] = priceRange.split('-').map(Number);
            filtered = filtered.filter(listing => listing.price >= minPrice && listing.price <= maxPrice);
        }

        if (areaRange !== 'all') {
            const [minArea, maxArea] = areaRange.split('-').map(Number);
            filtered = filtered.filter(listing => listing.area >= minArea && listing.area <= maxArea);
        }

        if (locationRange !== 'all') {
            filtered = filtered.filter(listing => listing.address == locationRange);
        }

        return filtered;
    }

    renderListings(currentPage);
    renderPagination(totalPages);
});
// Mở modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

// Đóng modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Xử lý đăng nhập
function handleLogin(event) {
    event.preventDefault(); // Ngăn form submit lại

    // Lấy giá trị từ form đăng nhập
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Đây là nơi bạn có thể thêm logic xác thực, ví dụ kiểm tra email/password hợp lệ
    // Tạm thời in ra console để kiểm tra
    console.log('Email:', email);
    console.log('Password:', password);

    // Sau khi xử lý xong, có thể đóng modal
    closeModal('loginModal');
}

// Xử lý đăng ký
function handleRegister(event) {
    event.preventDefault(); // Ngăn form submit lại

    // Lấy giá trị từ form đăng ký
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Đây là nơi bạn có thể thêm logic lưu thông tin người dùng vào cơ sở dữ liệu
    // Tạm thời in ra console để kiểm tra
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Sau khi xử lý xong, có thể đóng modal
    closeModal('registerModal');
}

// Lắng nghe sự kiện submit form đăng nhập và đăng ký
document.getElementById('loginForm').addEventListener('submit', handleLogin);
document.getElementById('registerForm').addEventListener('submit', handleRegister);
