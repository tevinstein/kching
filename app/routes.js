module.exports = function(app, passport) {

    app.get('/', function(req, res) {
        res.render('pages/index')
    })

    app.get('/login', function(req, res) {
        res.render('pages/login', { message: req.flash('loginMessage') })
    })

    app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/home',
        successFlash: true,
		failureRedirect: '/login',
		failureFlash   : true
    }))

    //show signup form
    app.get('/signup', function(req, res) {
        res.render('pages/signup', { message: req.flash('signupMessage') })
    })

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/home',
        successFlash: true,
        failureRedirect: '/signup',
        failureFlash   : true
    }))

    app.get('/home', isLoggedIn, function(req, res) {
        res.render('pages/home', {
            user: req.user,
            message: req.flash('successMessage')
        })
    })

    app.get('/logout', function(req, res) {
        req.logout()
        res.redirect('/')
    })
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next()

    res.redirect('/')
}
