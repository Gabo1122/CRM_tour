class Tourist {
    constructor(id) {
        this.template = `
        <div id="tourist-${id}" class="tourist-block">
            <p>
              <a class="btn btn-primary" data-toggle="collapse" href="#touristdata-${id}" role="button" aria-expanded="false" aria-controls="collapseExample">
                Новый турист
              </a> <button type="button" class="btn btn-outline-warning del-tourist" id="del-tourist${id}" >Удалить туриста</button>
            </p>
            <div class="collapse tourist" id="touristdata-${id}">
              <div class="card card-body mb-3">
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <input type="text" class="form-control" name="touristFirstNameRu" placeholder="Фамилия">
                        </div>
                        <div class="col-md-4 mb-3">
                            <input type="text" class="form-control" name="touristLastNameRu" placeholder="Имя">
                        </div>
                        <div class="col-md-4 mb-3">
                            <input type="text" class="form-control" name="touristMiddleNameRu" placeholder="Отчество">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <input type="text" class="form-control" name="touristLastName" placeholder="LastName">
                        </div>
                        <div class="col-md-6 mb-3">
                            <input type="text" class="form-control" name="touristFirstName" placeholder="FirstName">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <lable>Дата рождения
                            <input type="date" class="form-control" value="" name="touristDateOfBirth">
                            </lable>
                        </div>
                        <div class="col-md-6 mb-3">
                            <lable>Гражданство
                            <input type="text" class="form-control" value="РБ" name="touristCitizenship">
                            </lable>
                        </div>
                    </div>
                     <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <lable>Документ
                                <select  class="form-control" name="touristPassport">
                                    <option value="passport">Паспорт</option>
                                    <option value="vid">Вид на жительство</option>
                                </select>
                            </lable>
                        </div>
                        <div class="col-md-6 mb-3">
                            <lable>Серия/номер
                            <input type="text" class="form-control" name="touristPassportNumber">
                            </lable>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <lable>Дата выдачи 
                            <input type="date" class="form-control" name="touristDateOfIssue">
                            </lable>
                        </div>
                        <div class="col-md-6 mb-3">
                            <lable>Срок действия
                            <input type="date" class="form-control"  name="touristDateOfExpiry">
                            </lable>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        `;
    }

    add() {
        return this.template;
    }
}