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
        document.getElementsByName('button')[0].addEventListener("click", function (e) {
            e.preventDefault();
            console.log(111);
        })
    }
}