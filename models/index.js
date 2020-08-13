// create associations
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");
const Object = require("./Object");

//Create associations
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "cascade"
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "cascade"
});

User.hasMany(Object, {
  foreignKey: "user_id",
});

Object.belongsTo(User, {
  foreignKey: "user_id",
});

Post.hasOne(Object, {
  foreignKey: "post_id"
})

module.exports = { User, Post, Comment, Object };
