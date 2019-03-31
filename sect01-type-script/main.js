"use strict";
exports.__esModule = true;
var LikeButton_1 = require("./LikeButton");
var likeButton = new LikeButton_1["default"](6);
console.log("Init-Stage Likes: " + likeButton.likes + ", Selected: " + likeButton.isSelected);
likeButton.toggleLike();
console.log("Likes: " + likeButton.likes + ", Selected: " + likeButton.isSelected);
likeButton.toggleLike();
console.log("Likes: " + likeButton.likes + ", Selected: " + likeButton.isSelected);
