let image = document.querySelectorAll('.img');
image.forEach(img => {
    img.addEventListener('click', function () {
        image.forEach(remove => {
            remove.classList.remove('active');
        }) 
        img.classList.toggle('active');
    })
    
});