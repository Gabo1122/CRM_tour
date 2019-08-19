class AdminPanel {
    constructor() {
        this.template = `
            <header class="container-fluid">
                <div class="row">
                   <div class="col">
                    <p>Добрый день <span></span></p>
                   </div>
                </div>
                <nav>
                    
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Все туры</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Добавить тур</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main class="container-fluid">
                <div class="row">
                    <div class="col">
                        <table class="customers-all table">
                            <thead class="thead-dark">
                                <tr><th>№</th><th>дата договора</th><th>Заказчик</th><th>Страна</th><th>дата начала тура</th><th></th></tr>
                            </thead>
                            <tbody>               
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        `;
    }

    init() {
        this.loadData();
        return this.template;
    }

    loadData() {
        let xhr = new XMLHttpRequest();
        xhr.open("get", '/getAllData', true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                if (data) {
                    buildPanel(data);
                } else {
                    alert('ошибка сервера');
                }
            }
        };

        function buildPanel(data) {
            console.log(data);
            document.querySelector('header p span').textContent = data.user;
            let rowTemplate = data.data.map(item => `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.dateOfContract}</td>
                    <td>${item.customerLastName}</td>
                    <td>${item.countryOfTour}</td>
                    <td>${item.dateStartTour}</td>
                    <td><button class="btn btn-primary">подробнее</button> <button class="btn btn-secondary">печать</button></td>
                </tr>`
            );
            for (let i = 0; i < rowTemplate.length; i++) {
                document.querySelector('.customers-all tbody').insertAdjacentHTML('beforeend', rowTemplate[i]);
            }

        }
    }


}