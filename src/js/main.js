window.onload = function () {
    window.currentUser = 'noname';
    window.currentUserRole = 'manager';
    let panel = (new AdminPanel());
    panel.init();
};

