import LikeButton from "./LikeButton";

let likeButton = new LikeButton(5);

console.log(likeButton.likes);
console.log(likeButton.selected);

likeButton.toggleLike();

console.log(likeButton.likes);
console.log(likeButton.selected);

likeButton.toggleLike();

console.log(likeButton.likes);
console.log(likeButton.selected);