"use strict";
exports.__esModule = true;
var LikeButton = /** @class */ (function () {
    function LikeButton(likes) {
        if (likes === void 0) { likes = 5; }
        this._likes = likes;
        this._isSelected = false;
    }
    Object.defineProperty(LikeButton.prototype, "likes", {
        get: function () {
            return this._likes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeButton.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    LikeButton.prototype.toggleLike = function () {
        this._likes += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
    };
    return LikeButton;
}());
exports["default"] = LikeButton;
