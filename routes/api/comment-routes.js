const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

// set up GET all and POST at /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// set up DELETE /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;
