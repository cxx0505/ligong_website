//导航栏触摸变颜色
var navItems=document.getElementsByClassName('nav-item');
for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('mouseover', function() {
        this.style.backgroundColor = '#1384E2';
    });

    navItems[i].addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    });
}
//触碰导航栏出现下拉菜单
var xialaParents = document.querySelectorAll('.nav-item.parent');

xialaParents.forEach(function(parent) {
    parent.addEventListener('mouseenter', function() {
        var xialaMenu = this.querySelector('.xiala');
        if (xialaMenu) {
            xialaMenu.style.display = 'block';
        }
    });

    parent.addEventListener('mouseleave', function() {
        var xialaMenu = this.querySelector('.xiala');
        if (xialaMenu) {
            xialaMenu.style.display = 'none';
        }
    });
});
//下拉菜单中选项触碰变色
var xiala = document.querySelectorAll('.xiala li');
for (var i = 0; i < xiala.length; i++) {
    xiala[i].addEventListener('mouseover', function() {
        // 设置当前元素的样式
        this.style.backgroundColor = '#1384E2';
        this.style.color = 'white';
        // 重置其他元素的样式
        for (var j = 0; j < xiala.length; j++) {
            if (xiala[j] !== this) {
                xiala[j].style.backgroundColor = ''; // 重置背景颜色
                xiala[j].style.color = '';
            }
        }
    });

    xiala[i].addEventListener('mouseout', function() {
        // 恢复鼠标移出时的样式
        this.style.backgroundColor = '';
    });
}

//专业介绍触摸变色
var introduce = document.querySelectorAll('.introduce div');

for (var i = 0; i < introduce.length; i++) {
    introduce[i].addEventListener('mouseover', function() {
        // 设置当前元素的样式
        this.style.color = 'blue';

        // 重置其他元素的样式
        for (var j = 0; j < introduce.length; j++) {
            if (introduce[j] !== this) {
                introduce[j].style.color = ''; // 重置颜色
            }
        }
    });

    introduce[i].addEventListener('mouseout', function() {
        // 恢复鼠标移出时的样式
        this.style.color = '';
    });
}
