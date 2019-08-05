class Login {
    constructor (id) {
        this.id = id;
        this.template = `<main class="main-form">
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" id="login" name="userName" placeholder="Логин">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="password" name="userPassword"
                           placeholder="Пароль">
                </div>
                <button id="submit" type="submit" class="btn btn-primary">Войти</button>
            </form>
        </main>`;
    }
    init() {
        return this.template;
    }
    sendUserData() {
        let submit = document.getElementsByTagName('button')[0];
        submit.addEventListener("click", function (e) {
            e.preventDefault();
            let login = document.getElementById("login").value;
            let pass = document.getElementById("password").value;
            if (login && pass) {
                let xhr = new XMLHttpRequest();
                let data = JSON.stringify({login: login, pass: pass});
                console.log(data);
                xhr.open("POST", '/login', true);
                xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                xhr.onreadystatechange = function () {
                    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                        if (JSON.parse(xhr.responseText) === 'manager') {
                            document.getElementsByTagName('body')[0].innerHTML = '';
                            document.body.insertAdjacentHTML('afterbegin', new Form().init());
                        } else if (JSON.parse(xhr.responseText) === 'admin'){
                            document.getElementsByTagName('body')[0].innerHTML = '';
                            document.body.insertAdjacentHTML('afterbegin', new AdminPanel().init());
                        } else if (JSON.parse(xhr.responseText) === 'err') {
                            alert('неправильный логин или пароль');
                        } else {
                            alert('ошибка сервера');
                        }
                    }
                };
                xhr.send(data);
            } else {
                alert("Введите логин и пароль")
            }

        })
    }
}