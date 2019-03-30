export default class LikeButton {
    private _likes: number;
    private _selected: boolean;

    constructor (likes: number) {
        this._likes = likes;
        this._selected = false;
    }

    get likes(): number {
        return this._likes;
    }

    get selected(): boolean {
        return this._selected;
    }

    toggleLike() {
        if (this._selected) {
            this._selected = false;
            this._likes--;
        } else {
            this._selected = true;
            this._likes++;
        }
    }
}