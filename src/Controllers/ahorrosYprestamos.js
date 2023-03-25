function home(req, res){
    res.render('home')
}

function main(req, res){
    res.render("register");
}

function login(req, res){
    res.render('login');
}

module.exports = {
    login,
    main,
    home
}