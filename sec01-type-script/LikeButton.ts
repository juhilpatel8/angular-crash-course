export default class LikeButton {
    private _likes: number;
    private _isSelected: boolean;

    constructor (likes: number = 5) {
        this._likes = likes;
        this._isSelected = false;
    }

    get likes(): number {
        return this._likes;
    }

    get isSelected(): boolean {
        return this._isSelected;
    }

    toggleLike() {
        this._likes += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
    }
}