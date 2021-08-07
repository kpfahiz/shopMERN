

const logoutController = {
    logout(req, res) {
       req.logout();
       req.session.destroy();
       res.redirect('/')
    }
}

module.exports = logoutController;