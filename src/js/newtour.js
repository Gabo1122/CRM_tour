class NewTour {
    constructor() {
        this.template = `
        <header  class="container-fluid">
            <nav class="row">
                <p class="col m-3">
                    <button type="button" class="btn btn-success" id="save" >Сохранить</button> 
                    <button type="button" class="btn btn-outline-danger" id="cancel">Отменить</button>
                </p>
            </nav>
        </header>
        <main class="container-fluid">
            <div class="row">
                <form class="customer-form col">
                    <div class="accordion" id="accordionNewTour">
                        <div class="card">
                            <div class="card-header" id="heading1">
                                <h4 data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                Договор
<!--                                // дата дог - сегодня по умолчанию-->
<!--// № дог - по умолчанию номер за сегодня по порядку-->
<!--// статус - это в описание тура Новая Ожидание подтв. ТО, Подтверждена ТО, Визовые формальности, Готов к туру, Прибыл из тура, Аннулирована-->
<!--// менеджер - текущий (выбор для суперменеджера или админа, обычномку поле не показывать)-->
<!--// вид услуги - турагент, туроператор, оформление визы-->
                                </h4>
                            </div>
                            <div id="collapse1" class="collapse show" aria-labelledby="heading1" data-parent="#accordionNewTour">
                                <div class="card-body">
                                    <div class="form-row">
                                        <div class="col-md-6 mb-3">
                                            <lable>Дата договора
                                            <input type="date" class="form-control" value="23.08.2019" name="contractDate" required>
                                            </lable>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <lable>Номер договора
                                            <input type="text" class="form-control" value="1" name="contractNumber">
                                            </lable>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-md-6 mb-3">
                                            <input type="text" class="form-control" name="customerFirstName" placeholder="FirstName">
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <input type="text" class="form-control" name="customerLastName" placeholder="LastName">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="heading2">
                                <h4 data-toggle="collapse" data-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                                Заказчик
                                </h4>
                            </div>
                            <div id="collapse2" class="collapse show" aria-labelledby="heading2" data-parent="#accordionNewTour">
                                <div class="card-body">
                                    <div class="form-row">
                                        <div class="col-md-4 mb-3">
                                            <input type="text" class="form-control" name="customerFirstNameRu" placeholder="Фамилия/Название организации" required>
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <input type="text" class="form-control" name="customerLastNameRu" placeholder="Имя">
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <input type="text" class="form-control" name="customerMiddleNameRu" placeholder="Отчество">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-md-6 mb-3">
                                            <input type="text" class="form-control" name="customerFirstName" placeholder="FirstName">
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <input type="text" class="form-control" name="customerLastName" placeholder="LastName">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="heading3">
                                <h4 data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                Туристы
                                </h4>
                            </div>
                            <div id="collapse3" class="collapse" aria-labelledby="heading3" data-parent="#accordionNewTour">
                                <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="heading4">
                                <h4 class="mb-0" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                Тур
                                </h4>
                            </div>
                            <div id="collapse4" class="collapse" aria-labelledby="heading4" data-parent="#accordionNewTour">
                                <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                            </div>
                        </div>
                         <div class="card">
                            <div class="card-header" id="heading5">
                                <h4 data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                Cтоимость
                                </h4>
                            </div>
                            <div id="collapse5" class="collapse" aria-labelledby="heading5" data-parent="#accordionNewTour">
                                <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
         </main>`;
    }

    init() {
        document.body.innerHTML = this.template;
        document.getElementsByName('contractDate')[0].valueAsDate = new Date();
        document.querySelector('#save').addEventListener('click', e => {
            e.preventDefault();
            this.addNewTour();
        });
        document.querySelector('#cancel').addEventListener('click', e => {
            e.preventDefault();
            new AdminPanel().init();
        });
    }

    addNewTour() {
        console.log(1);
    }
}

// дата дог - сегодня по умолчанию
// № дог - по умолчанию номер за сегодня по порядку
// статус - это в описание тура Новая Ожидание подтв. ТО, Подтверждена ТО, Визовые формальности, Готов к туру, Прибыл из тура, Аннулирована
// менеджер - текущий (выбор для суперменеджера или админа, обычномку поле не показывать)
// вид услуги - турагент, туроператор, оформление визы

// Блок Заказчик..............
// Фамилия/название организации
// Имя
// Отчество
// Last name
// First Name
// дата рождения
// Гражданство
// паспорт / вид на жительство
// серия/номер
// личный номер
// дата выдачи
// срок действия
// кем выдан
// Адрес
// Телефон

// Блок туристы - Аккордеон видно фио туристов добавленых, при раскрытии появляются поля
// Турист 1 - по умолчанию из заказчика
// // Фамилия
// // Имя
// // Отчество
// // Last name
// // First Name
// // дата рождения
// // Гражданство
// // паспорт / вид на жительство
// // серия/номер
// // личный номер
// // дата выдачи
// // срок действия
// // кем выдан
// // Адрес
// // Телефон
// Туристы 2, 3 ,4............ кнопка добавить туриста

// Блок - Тур
// Страна
// Дата начала тура
// Дата окончания тура
// Число дней / ночей (окошко с автоматом)
// Тур (название, другие параметры)
// Отель
// Тип номера в отеле
// Тип питания
// Трансфер
// Виза (есть, не надо, мы делаем, турист самостоятельно)
// Страховка (есть, не надо, мы делаем, турист самостоятельно)

// Блок финансы
// Полная стоимость туруслуг, валюта
// Курс туроператора на дату договора
// Скидка, BYN
// Полная стоимость со скидкой, BYN
// Срок полной оплаты
// Сумма предоплаты, влюта
// Срок предоплаты
// Форма оплаты (нал, безнал)
// Сумма принимающей стороне, валюта
//
// кнопка сохранить тур, отменить



