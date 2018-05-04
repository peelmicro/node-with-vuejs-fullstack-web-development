require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

if (false) {
  // we are in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  // we are development - return the dev keys
  module.exports = __webpack_require__(8);
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookie_session__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookie_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cookie_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_passport__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_body_parser__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_keys__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__config_keys__);








__webpack_require__(9); // Just to execute it
__webpack_require__(10); // Just to execute it

__WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_6__config_keys___default.a.mongoUri);

// import api from './api'

const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

app.set('port', port);

app.use(__WEBPACK_IMPORTED_MODULE_5_body_parser___default.a.json());

// express middlewares
app.use(__WEBPACK_IMPORTED_MODULE_3_cookie_session___default()({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [__WEBPACK_IMPORTED_MODULE_6__config_keys___default.a.cookieKey]
}));
app.use(__WEBPACK_IMPORTED_MODULE_4_passport___default.a.initialize());
app.use(__WEBPACK_IMPORTED_MODULE_4_passport___default.a.session());

__webpack_require__(12)(app);
__webpack_require__(13)(app);

// Import API Routes
// app.use('/api', api)

// Import and Set Nuxt.js options
let config = __webpack_require__(16);
config.dev = !("development" === 'production');

// Init Nuxt.js
const nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](config);

// Build only in dev mode
if (config.dev) {
  const builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
  builder.build();
}

// Give nuxt middleware to express
app.use(nuxt.render);

// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("cookie-session");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {
  googleClientID: '1068023276725-i20uqjvkb0ij6qegjioj8nb5v2muregb.apps.googleusercontent.com',
  googleClientSecret: 'qT7W_2XvuK-UpTPG0hexUWyW',
  mongoUri: 'mongodb://juan.pablo.perez:admin2018@ds153682.mlab.com:53682/emaily-dev',
  cookieKey: '<l7<91D1"lGHylbC,BY{..bDfLpU90Mr',
  stripePublishableKey: 'pk_test_TAxyscASw6HzuArW1lBMAqvI',
  stripeSecretKey: 'sk_test_0LJistMngdrwTKvSbP0LOxG7'
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(0);
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

const passport = __webpack_require__(1);
const GoogleStrategy = __webpack_require__(11).Strategy;
const mongoose = __webpack_require__(0);
const keys = __webpack_require__(2);

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true
}, async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({ googleId: profile.id });
  if (existingUser) {
    // We already have a record with the given profile ID
    return done(null, existingUser);
  }
  // We don't have a user record with this ID, make a new record!
  const user = await new User({ googleId: profile.id }).save();
  done(null, user);
}));

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("passport-google-oauth20");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

const passport = __webpack_require__(1);

module.exports = app => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    if (false) return res.redirect('/surveys');
    /* With Vue in local it does not return to client localhost port --> We force it */
    res.redirect('http://localhost:3000/surveys');
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    // res.send(req.session) --> This is done by cookieSession middleware in the main index.js + using the passport.serializeUser in passport.js
    res.send(req.user); // data obtained from mthe mongodb database using the passport.deserializeUser in passport.js
  });
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

const keys = __webpack_require__(2);
const stripe = __webpack_require__(14)(keys.stripeSecretKey);
const requireLogin = __webpack_require__(15);
module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("stripe");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must log in!' }); // Unauthorized
  }
  next();
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {


module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-with-node',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'nuxt client version for Node with React Fullstack Web Dev' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }],
    script: [{ src: 'https://js.stripe.com/v3/' }]
  },
  plugins: ['~/plugins/vuetify.js'],
  css: ['~/assets/style/app.styl'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['~/plugins/vuetify.js'],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },
  modules: ['@nuxtjs/axios'],
  env: {
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY || 'pk_test_TAxyscASw6HzuArW1lBMAqvI'
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map