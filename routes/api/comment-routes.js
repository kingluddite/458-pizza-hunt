const router = require("express").Router();
const {
  addComment,
  removeComment,
  addReply,
  removeReply,
} = require("../../controllers/comment-controller");

// set up GET all and POST at /api/comments/<pizzaId>
router.route("/:pizzaId").post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route("/:pizzaId/:commentId").put(addReply).delete(removeComment);

// set up DELETE /api/comments/pizzaId/commentId/replyId
router.route("/:pizzaId/:commentId/:replyId").delete(removeReply);

module.exports = router;
