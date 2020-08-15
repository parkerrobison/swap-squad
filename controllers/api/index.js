const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const objectRoutes = require('./object-routes');
const emailRoutes = require('./email-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/objects', objectRoutes);
router.use('/email', emailRoutes);
module.exports = router;