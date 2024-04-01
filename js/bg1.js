var images = [
    'url(../image/image1.jpg)',
    'url(../image/image2.jpg)',
    'url(../image/image3.jpg)'
];
var index = 0;

// 预加载所有的图片
for (var i = 0; i < images.length; i++) {
    var img = new Image();
    img.src = images[i];
}

setInterval(function() {
    var bg1 = document.querySelector('.bg1');
    bg1.style.backgroundImage = images[index];
    index = (index + 1) % images.length;
}, 3000);