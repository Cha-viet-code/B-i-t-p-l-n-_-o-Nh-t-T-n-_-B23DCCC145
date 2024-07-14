document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = 'Đăng tải thành công!';
        console.log(data);
    })
    .catch(error => {
        document.getElementById('result').innerText = 'Đăng tải thất bại.';
        console.error('Error:', error);
    });
});
