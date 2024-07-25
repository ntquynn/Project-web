
function login(e){
    e.defaultPrevented();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = localStorage.setItem(username);
    var data = JSON.parse(user);
    if(user == null){
        alert("Vui lòng nhập tên đăng nhập hoặc mật khẩu")
    }
    else if(username == data.username && password == data.password){
        alert("Đăng nhập thành công");
        window.location.href="htuh4.html"
    }
    else alert("Đăng nhập thất bại");
}