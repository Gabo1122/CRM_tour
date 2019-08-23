class Nav {
    constructor() {
        this.currentUserRole = (window.currentUserRole === 'admin')? 'Администратор': (window.currentUserRole === 'manager')? 'менеджер': (window.currentUserRole === 'supermanager')? 'Суперменеджер': 'noRole';
        this.template = `
            <header class="container-fluid">
                <div class="row">
                   <div class="col">
                    <p>Добрый день: <span class="user-role">${this.currentUserRole}</span> - <span class="user-name">${window.currentUser}</span></p>
                   </div>
                </div>
                <nav class="row">
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a class="nav-link" id="list-tours" href="#">Все туры</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="add-tour" href="#">Добавить тур</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                        </li>
                    </ul>
                </nav>
            </header>
        `;
    }

    init() {
        document.body.insertAdjacentHTML('afterbegin', this.template);
        document.querySelector('#add-tour').addEventListener('click',e => {
            e.preventDefault();
            new NewTour().init();
        });
        document.querySelector('#list-tours').addEventListener('click', e => {
            e.preventDefault();
            new AdminPanel().init();
        });
    }
}