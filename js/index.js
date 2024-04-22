//登录用户名和密码正确则跳转到自制理工大学网站
//用户名或密码错误则弹出"输入的用户名或密码错误"
function login() {
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;
    if(username == 'admin' && password == '123'){
        var nextPageUrl = 'website.html';
        // 使用 window.location.href 实现页面重定向
        window.location.href = nextPageUrl;
    }else{
        alert("输入的用户名或密码错误");
    }
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
}

//点击注册按钮可在控制台中显示注册用户的信息
function register() {
    var username = document.getElementById('registerUsername').value;
    var password = document.getElementById('registerPassword').value;
    console.log(username);
    console.log(password);
    document.getElementById('registerUsername').value = '';
    document.getElementById('registerPassword').value = '';
}

