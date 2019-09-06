class Nav {
    constructor() {
        this.currentUserRole = (window.currentUserRole === 'admin')? 'Администратор': (window.currentUserRole === 'manager')? 'менеджер': (window.currentUserRole === 'supermanager')? 'Суперменеджер': 'noRole';
        this.template = `
            <header>
                <div class="container">
                    <div class="row">
                       <div class="col">
                        <p class="m-1"><small>Добрый день: <span class="user-role">${this.currentUserRole}</span> - <span class="user-name">${window.currentUser}</span></small></p>
                       </div>
                    </div>
                </div>
                <nav class="navbar navbar-expand-lg bg-info">
                    <div class="container">
                        <a class="navbar-brand" href="#">CRM-tour</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                            </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" id="list-tours" href="#">Все туры</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="add-tour" href="#">Добавить тур</a>
                                </li>
                            </ul>
                        </div>
                    </div>
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