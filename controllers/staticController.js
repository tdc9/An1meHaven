exports.renderHomePage = function(req,res){
    return res.render("home", {
        user: req.user,
    });
}

exports.renderAboutPage = function(req,res){
    return res.render("about",{
        user: req.user,
    });
}
exports.renderLoginPage = function(req,res){
    if(req.user){
        return res.redirect("/");
    }
    return res.render("login");
}

exports.renderSignupPage = function(req,res){
    if(req.user){
        return res.redirect("/");
    }
    
    return res.render("signup");
}