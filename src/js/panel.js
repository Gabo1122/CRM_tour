class AdminPanel {
    constructor() {
        this.template = `
            
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
    }

    loadData() {
        fetch('/getAllData')
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.buildPanel(data)
            })
            .catch(err => {
                alert('ошибка сервера');
            })
    }
    buildPanel(data) {
        document.body.innerHTML = this.template;
        //document.querySelector('.user-name').innerHTML = data.user;
        window.currentUser = data.user;
        window.currentUserRole = data.userRole;
        new Nav().init();
        let rowTemplate = data.data.map(item => `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.dateOfContract}</td>
                    <td>${item.customerLastName}</td>
                    <td>${item.countryOfTour}</td>
                    <td>${item.dateStartTour}</td>
                    <td><button class="btn btn-primary" id="detail">подробнее</button> <button class="btn btn-secondary" id="print">печать</button></td>
                </tr>`
        );
        for (let i = 0; i < rowTemplate.length; i++) {
            document.querySelector('.customers-all tbody').insertAdjacentHTML('beforeend', rowTemplate[i]);
        }
        document.querySelector('#detail').addEventListener('click', e => {
            e.preventDefault();
            new Tour().init();
        });
        document.querySelector('#print').addEventListener('click', e => {
            e.preventDefault();
            new Print().newWindow();
        });
    }
}