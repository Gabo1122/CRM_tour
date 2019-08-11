class OrderList {
    constructor () {
        this.template = `<main class="customer-form">
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" name="customerFirstName" placeholder="Имя" required>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" name="customerLastName" placeholder="Фамилия">
                </div>
                <button id="submit" type="submit" class="btn btn-primary">Отправить</button>
            </form>
        </main>`;
    }
    init() {
        return this.template;
    }
}