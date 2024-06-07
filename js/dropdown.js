// 下拉菜单
window.onload = function() {
    var dropdowns = ['dropdown2', 'dropdown3', 'dropdown4'];

    dropdowns.forEach(function(dropdownId) {
        var bt = document.getElementById('bt' + dropdownId.slice(-1));
        var dropdown = document.getElementById(dropdownId);

        bt.addEventListener('mouseover', function() {
            dropdown.style.display = 'block';
        });

        dropdown.addEventListener('mouseover', function() {
            dropdown.style.display = 'block';
        });

        bt.addEventListener('mouseout', function() {
            dropdown.style.display = 'none';
        });

        dropdown.addEventListener('mouseout', function() {
            dropdown.style.display = 'none';
        });
    });
}
