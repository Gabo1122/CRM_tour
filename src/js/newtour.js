class NewTour {
  constructor() {
    this.currentUserRole = (window.currentUserRole === 'admin') ? 'Администратор' : (window.currentUserRole === 'manager') ? 'менеджер' : (window.currentUserRole === 'supermanager') ? 'Суперменеджер' : 'noRole';
    this.touristNumber = 1;
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
                            <a class="nav-link" id="back-to-all" href="#">Все туры</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="delete-tour" href="#">Удалить тур</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="print-tour" href="#">Печать</a>
                        </li>
                    </ul>
                </div>
            </div>
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
                            </h4>
                        </div>
                        <div id="collapse1" class="collapse show" aria-labelledby="heading1" data-parent="#accordionNewTour">
                            <div class="card-body">
                                <div class="form-row">
                                    <div class="col-md-6 mb-3">
                                        <lable>Дата договора
                                        <input type="date" class="form-control" value="" name="contractDate" required>
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
                                        <lable>Вид услуги
                                            <select  class="form-control" name="service_type">
                                                <option value="touragent" selected>турагент</option>
                                                <option value="touroperator">туроператор</option>
                                            </select>
                                        </lable>
                                    </div>
                                    <div class="col-md-6 mb-3 manager">
                                        <lable>Менеджер
                                            <select  class="form-control" name="manager">
                                                <option value="manager_tatyana" selected>Татьяна</option>
                                                <option value="manager_kseniya">Ксения</option>
                                            </select>
                                        </lable>
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
                        <div id="collapse2" class="collapse" aria-labelledby="heading2" data-parent="#accordionNewTour">
                            <div class="card-body">
                                <div class="form-row">
                                    <div class="col-md-4 mb-3">
                                        <lable>Фамилия/Название организации
                                        <input type="text" class="form-control" name="customerFirstNameRu" required>
                                    </lable>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <lable>Имя
                                        <input type="text" class="form-control" name="customerLastNameRu">
                                        </lable>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <lable>Отчество
                                        <input type="text" class="form-control" name="customerMiddleNameRu">
                                        </lable>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-6 mb-3">
                                        <lable>LastName
                                        <input type="text" class="form-control" name="customerLastName">
                                        </lable>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <lable>FirstName
                                        <input type="text" class="form-control" name="customerFirstName">
                                        </lable>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-6 mb-3">
                                        <lable>Дата рождения
                                        <input type="date" class="form-control" value="" name="customerDateOfBirth">
                                        </lable>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <lable>Гражданство
                                        <input type="text" class="form-control" value="РБ" name="customerCitizenship">
                                        </lable>
                                    </div>
                                </div>
                                 <div class="form-row">
                                    <div class="col-md-4 mb-3">
                                        <lable>Документ
                                            <select  class="form-control" name="customerPassport">
                                                <option value="passport" selected>Паспорт</option>
                                                <option value="vid">Вид на жительство</option>
                                            </select>
                                        </lable>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <lable>Серия/номер
                                        <input type="text" class="form-control" name="customerPassportNumber">
                                        </lable>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <lable>Личный номер
                                        <input type="text" class="form-control" name="customerIDNumber">
                                        </lable>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-4 mb-3">
                                        <lable>Дата выдачи 
                                        <input type="date" class="form-control" name="customerDateOfIssue">
                                        </lable>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <lable>Срок действия
                                        <input type="date" class="form-control"  name="customerDateOfExpiry">
                                        </lable>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <lable>Кем выдан
                                        <input type="text" class="form-control" name="customerIssuedBy">
                                        </lable>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-6 mb-3">
                                        <lable>Адрес регистрации
                                        <input type="text" class="form-control" name="customerAddress">
                                        </lable>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <lable>Телефон
                                        <input type="text" class="form-control" name="customerPhone">
                                        </lable>
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
                                <div class="tourists-count mb-3">Количество туристов: 1</div>
                                <div class="tourists-list">
                                ${new Tourist(1).add()}
                                </div>
                                <button type="button" class="btn btn-primary" id="add-tourist" >Добавить туриста</button>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="heading4">
                            <h4 data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                            Тур
                            </h4>
                        </div>
                        <div id="collapse4" class="collapse" aria-labelledby="heading4" data-parent="#accordionNewTour">
                            <div class="card-body">
                                <div class="form-row">
                                    <div class="col-md-4 mb-3">
                                        <lable>Дата начала тура
                                        <input type="date" class="form-control" value="" name="startDate">
                                        </lable>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <lable>Дата окончания тура
                                        <input type="date" class="form-control" value="" name="endDate">
                                        </lable>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <p><br><strong>Дней:</strong> <span class="days-of-tour">0</span>, <strong>Ночей:</strong> <span class="nights-of-tour">0</span></p>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-6 mb-3">
                                        <lable>Страна
                                        <input type="text" class="form-control" value="" name="tourToCountry">
                                        </lable>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <lable>Название тура/доп.описание
                                        <textarea class="form-control" name="TourDesc"></textarea>
                                        </lable>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-4 mb-3">
                                        <lable>Отель
                                        <input type="text" class="form-control" value="" name="hotelName">
                                        </lable>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <lable>Тип номера
                                        <input type="text" class="form-control" name="roomType">
                                        </lable>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <lable>Тип питания
                                        <input type="text" class="form-control" name="typeOfFood">
                                        </lable>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-4 mb-3">
                                        <lable>Трансфер
                                        <input type="text" class="form-control" value="" name="transfer">
                                        </lable>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <lable>Виза
                                        <input type="text" class="form-control" name="visa">
                                        </lable>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <lable>Страховка
                                        <input type="text" class="form-control" name="insurance">
                                        </lable>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   <div class="card block-value">
                      <div class="card-header" id="heading5">
                          <h4 data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                          Cтоимость
                          </h4>
                      </div>
                      <div id="collapse5" class="collapse" aria-labelledby="heading5" data-parent="#accordionNewTour">
                        <div class="card-body">
                          <div class="row">
                            <p><strong>Полная стоимость тура в BYN: <span class="fullValueBYN">0</span></strong></p>
                          </div>
                          <div class="form-row">
                            <div class="col-md-4 mb-3">
                              <lable>Полная стоимость в валюте
                              <input type="text" class="form-control" value="0" name="fullValueCY">
                              </lable>
                            </div>
                            <div class="col-md-4 mb-3">
                              <lable>Валюта
                              <select  class="form-control" name="fullValueCurrency">
                                <option value="byn" selected>BYN</option>
                                <option value="usd">USD</option>
                                <option value="eur">EUR</option>
                                <option value="rur">RUR</option>
                              </select>
                              </lable>
                            </div>
                            <div class="col-md-4 mb-3">
                              <lable>Курс туроператора на дату договора
                              <input type="text" class="form-control" value="1" name="operatorCyRate">
                              </lable>
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="col-md-4 mb-3">
                              <lable>Скидка
                              <input type="text" class="form-control" value="0" name="discount">
                              </lable>
                            </div>
                            <div class="col-md-4 mb-3">
                              <lable>ед.изм.
                              <select  class="form-control" name="discountType">
                                <option value="byn" selected>BYN</option>
                                <option value="cy">Валюта</option>
                                <option value="percent">%</option>
                              </select>
                              </lable>
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="col-md-6 mb-3">
                              <lable>Сумма принимающей стороне
                              <input type="text" class="form-control" name="hostCost">
                              </lable>
                            </div>
                            <div class="col-md-6 mb-3">
                              <lable>Валюта
                              <select  class="form-control" name="hostCostCurrency">
                                <option value="usd" selected>USD</option>
                                <option value="eur">EUR</option>
                                <option value="rur">RUR</option>
                                <option value="byn">BYN</option>
                              </select>
                              </lable>
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="col-md-3 mb-3">
                              <lable>Сумма предоплаты
                              <input type="text" class="form-control" name="prepayment">
                              </lable>
                            </div>
                            <div class="col-md-3 mb-3">
                              <lable>Валюта
                              <select  class="form-control" name="prepaymentCurrency">
                                <option value="byn" selected>BYN</option>
                                <option value="usd">USD</option>
                                <option value="eur">EUR</option>
                                <option value="rur">RUR</option>
                              </select>
                              </lable>
                            </div>
                            <div class="col-md-3 mb-3">
                              <lable>Дата предоплаты
                              <input type="date" class="form-control" value="" name="prepaymentDate">
                              </lable>
                            </div>
                            <div class="col-md-3 mb-3">
                              <lable>Срок предоплаты
                              <input type="date" class="form-control" value="" name="prepaymentTerm">
                              </lable>
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="col-md-3 mb-3">
                              <lable>Сумма доплаты
                              <input type="text" class="form-control" name="paymentPart">
                              </lable>
                            </div>
                            <div class="col-md-3 mb-3">
                              <lable>Валюта
                              <select  class="form-control" name="paymentPartCurrency">
                                <option value="byn" selected>BYN</option>
                                <option value="usd">USD</option>
                                <option value="eur">EUR</option>
                                <option value="rur">RUR</option>
                              </select>
                              </lable>
                            </div>
                            <div class="col-md-3 mb-3">
                              <lable>Дата доплаты
                              <input type="date" class="form-control" value="" name="paymentPartDate">
                              </lable>
                            </div>
                            <div class="col-md-3 mb-3">
                              <lable>Срок полной оплаты
                              <input type="date" class="form-control" value="" name="paymentFullTerm">
                              </lable>
                            </div>
                          </div>
                          <div class="row">
                            <p><strong>Долг туриста: <span class="touristDebt">0</span></strong></p>
                          </div>
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
    if (window.currentUserRole === 'manager') {
      let managerSelect = document.querySelector('.manager');
      managerSelect.style = 'display:none;';
      managerSelect.value = window.currentUser;
    }
    document.querySelector('#delete-tour').addEventListener('click', e => {
      this.deleteTour();
    });
    document.querySelector('#back-to-all').addEventListener('click', e => {
      new AdminPanel().init();
    });
    document.querySelector('#add-tourist').addEventListener('click', e => {
      this.addTourist();
    });
    document.querySelector('.tourists-list').addEventListener('click', e => {
      if (e.target.id.slice(0, 11) === 'del-tourist') {
        if (this.touristNumber === 1) {
          alert('Невозможно сделать тур без туристов');
        } else {
          let confirmDel = confirm('Вы действительно хотите удалить этого туриста?');
          if (confirmDel === true) {
            this.deleteTourist(e.target.id.slice(11, 12));
          }

        }
      }

    });
    document.querySelector('.customer-form').addEventListener('change', e => {
      // console.log(e.target.name, e.target.value);
      this.changeValue(e);
    });
  }

  deleteTourist(n) {
    document.querySelector(`#tourist-${n}`).remove();
    this.touristsCount();
  }

  addTourist() {
    this.touristNumber++;
    document.querySelector('.tourists-list').insertAdjacentHTML('beforeend', new Tourist(this.touristNumber).add());
    this.touristsCount();
  }

  touristsCount() {
    let touristsCount = document.querySelectorAll('.tourist-block').length;
    document.querySelector('.tourists-count').innerHTML = `Количество туристов: ${touristsCount}`;
  }

  deleteTour() {
    console.log(1);
  }

  changeValue(e) {
    let fullValueCY = Number(document.getElementsByName('fullValueCY')[0].value).toFixed(2);
    let fullValueCurrency = document.getElementsByName('fullValueCurrency')[0].value;
    let operatorCyRate = Number(document.getElementsByName('operatorCyRate')[0].value).toFixed(4);
    let discount = Number(document.getElementsByName('discount')[0].value).toFixed(2);
    let discountType = document.getElementsByName('discountType')[0].value;
    let hostCost = Number(document.getElementsByName('hostCost')[0].value).toFixed(2);
    let hostCostCurrency = document.getElementsByName('hostCostCurrency')[0].value;
    let prepayment = Number(document.getElementsByName('prepayment')[0].value).toFixed(2);
    let prepaymentCurrency = document.getElementsByName('prepaymentCurrency')[0].value;
    let prepaymentDate = document.getElementsByName('prepaymentDate')[0].value;
    let prepaymentTerm = document.getElementsByName('prepaymentTerm')[0].value;
    let paymentPart = Number(document.getElementsByName('paymentPart')[0].value).toFixed(2);
    let paymentPartCurrency = document.getElementsByName('paymentPartCurrency')[0].value;
    let paymentPartDate = document.getElementsByName('paymentPartDate')[0].value;
    let paymentFullTerm = document.getElementsByName('paymentFullTerm')[0].value;

    if (e.target.name === 'fullValueCY' || 'fullValueCurrency' || 'operatorCyRate' || 'discount' || 'discountType' || 'hostCost' || 'hostCostCurrency') {
      this.calcTour({
        fullValueCY: fullValueCY,
        fullValueCurrency: fullValueCurrency,
        operatorCyRate: operatorCyRate,
        discount: discount,
        discountType: discountType,
        hostCost: hostCost,
        hostCostCurrency: hostCostCurrency
      });
    }
  }

  calcTour(props) {
    let fullValueBYN = document.querySelector('.fullValueBYN');
    let discountRatio = (props.discountType === 'byn') ? 1 :
      (props.discountType === 'cy') ? props.operatorCyRate :
         0.01;
    let totalValueBYN = (Number(props.fullValueCY) * Number(props.operatorCyRate)).toFixed(2) - Number(props.discount * discountRatio).toFixed(2);
    console.log(props.fullValueCY, props.operatorCyRate, props.discount,  discountRatio, totalValueBYN);
    fullValueBYN.innerHTML = totalValueBYN;
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
// // дата выдачи
// // срок действия

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



