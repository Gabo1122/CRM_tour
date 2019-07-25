
let nav = [
    {
        text: 'Главная',
        address: '/',
        className: '',
        wrapper: 'li',
    },
    {
        text: 'О нас',
        address: '/about',
        className: '',
        wrapper: 'li',
    },
    {
        text: 'Контакты',
        address: '/contacts',
        className: '',
        wrapper: 'li',
    },
    {
        text: 'Корзина',
        address: '#modal-example',
        className: 'uk-text-danger open-modal-btn',
        wrapper: 'li',
        specAttr: 'uk-toggle'
    }
];

let Image = function (classNames, src, alt) {
    this.classNames = classNames || '';
    this.src = src;
    this.alt = alt || 'Broken image';
    this.$template = $('<img/>')
        .addClass(this.classNames)
        .attr({
            'src': this.src,
            'alt': this.alt
        });

    return this.$template;
};

let Button = function (text, classNames) {
    this.text = text;
    this.classNames = classNames || 'uk-button uk-button-default';
    this.$template = $('<button/>')
        .addClass(this.classNames)
        .text(this.text);

    return this.$template;
};

let Heading = function (level, text, classNames) {
    this.text = text;
    this.level = level;
    this.classNames = classNames || 'uk-card-title';
    this.$template = $(`<h${this.level}/>`)
        .text(this.text)
        .addClass(this.classNames);

    return this.$template;
};

let Paragraph = function (text, classNames) {
    this.text = text;
    this.classNames = classNames;
    this.$template = $('<p/>')
        .html(this.text)
        .addClass(this.classNames);

    return this.$template;
};

let Input = function (val, placeholder, classNames, type) {
    this.val = val;
    this.className = classNames || 'uk-input';
    this.type = type || 'text';
    this.$template = $('<input/>')
        .addClass(this.className)
        .attr({
            type: this.type,
            placeholder: this.placeholder
        })
        .val(this.val);

    return this.$template;
};

let List = function (id, className) {
    this.id = id;
    this.className = className || '';
    this.$template = $('<ul/>')
        .addClass(this.className)
        .attr('id', this.id);

    return this.$template;
};

window.onload = function () {
    products.forEach(function (product) {
        $('.pizza-list').append(new Card(product));
    });

    drinks.forEach(function (drink) {
        $('.drinks-list').append(new Card(drink));
    });

    $('#nav-container').append(new Nav(nav));
};
