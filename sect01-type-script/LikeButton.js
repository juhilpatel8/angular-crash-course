"use strict";
exports.__esModule = true;
var LikeButton = /** @class */ (function () {
    function LikeButton(likes) {
        this._likes = likes;
        this._selected = false;
    }
    Object.defineProperty(LikeButton.prototype, "likes", {
        get: function () {
            return this._likes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeButton.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    LikeButton.prototype.toggleLike = function () {
        if (this._selected) {
            this._selected = false;
            this._likes--;
        }
        else {
            this._selected = true;
            this._likes++;
        }
    };
    return LikeButton;
}());
exports["default"] = LikeButton;
