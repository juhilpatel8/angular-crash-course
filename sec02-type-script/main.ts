import LikeButton from "./LikeButton";

let likeButton = new LikeButton(6);
console.log(`Init-Stage Likes: ${likeButton.likes}, Selected: ${likeButton.isSelected}`);

likeButton.toggleLike();
console.log(`Likes: ${likeButton.likes}, Selected: ${likeButton.isSelected}`);

likeButton.toggleLike();
console.log(`Likes: ${likeButton.likes}, Selected: ${likeButton.isSelected}`);