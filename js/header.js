window.addEventListener('scroll', function() {
  var header = document.querySelector('.header');
  var buttons = document.querySelectorAll('.bt');  // 选择所有的按钮
  var title = document.querySelector('.title');  // 选择标题

  buttons.forEach(function(button) {
    if (window.scrollY > 0) {
        header.style.backgroundColor = 'white';
        button.style.color = 'black';  // 当背景色变为白色时，将按钮的文字颜色变为黑色
        title.style.color = 'black';  // 当背景色变为白色时，将标题的颜色变为黑色
    } else {
        header.style.backgroundColor = 'transparent';
        button.style.color = 'white';  // 当背景色变为透明时，将按钮的文字颜色变为白色
        title.style.color = 'white';  // 当背景色变为透明时，将标题的颜色变为白色
    }
  });
});