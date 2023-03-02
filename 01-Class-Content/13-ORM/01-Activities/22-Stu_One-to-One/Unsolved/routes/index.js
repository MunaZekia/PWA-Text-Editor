const router = require('express').Router();
// Import all of the API routes from /api/index.js
const apiRoutes = require('./api');
// Add  `/api` to all of the api routes imported from the `api` directory

router.use('/api', apiRoutes);
// If no API routes are hit, send the React app

module.exports = router;
// path
