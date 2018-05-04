const passport = require('passport')

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  )

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      if (process.env.NODE_ENV === 'production') return res.redirect('/surveys')
      /* With Vue in local it does not return to client localhost port --> We force it */
      res.redirect('http://localhost:3000/surveys')
    }
  )

  app.get('/api/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })

  app.get('/api/current_user', (req, res) => {
    // res.send(req.session) --> This is done by cookieSession middleware in the main index.js + using the passport.serializeUser in passport.js
    res.send(req.user) // data obtained from mthe mongodb database using the passport.deserializeUser in passport.js
  })
}
