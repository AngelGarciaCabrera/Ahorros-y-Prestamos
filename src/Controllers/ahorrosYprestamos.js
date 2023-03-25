function main(req, res){
    res.render("register");
}

function login(req, res){
    res.render('login');
}

module.exports = {
    login,
    main
}