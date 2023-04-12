const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const dataRoute = require('./data.route');
const teamRoute = require('./team.route');
const achieveRoute = require('./achieve.route');
const modelRoute = require('./model.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/data',
    route: dataRoute,
  },
  {
    path: '/team',
    route: teamRoute,
  },
  {
    path: '/achieve',
    route: achieveRoute,
  },
  {
    path: '/model',
    route: modelRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
