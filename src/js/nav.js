class Nav {
    constructor() {
        this.template = `
            <header class="container-fluid">

                <nav>
                    
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
        document.querySelector('#add-tour').addEventListener('click', function (e) {
            e.preventDefault();
            new NewTour().init();
        });
        document.querySelector('#list-tours').addEventListener('click', function (e) {
            e.preventDefault();
            new AdminPanel().init();
        });
    }
}