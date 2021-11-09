import ImageButton from './ImageButton';
import TextButton from './TextButton';
import Widget from './Widget';

export default class ButtonSet extends Widget {
  public _data: {
    buttons: ReturnType<typeof TextButton.prototype.getData>[];
  };

  constructor() {
    super();
    this._data = { buttons: [] };
  }

  getData() {
    return this._data;
  }

  addButton(button: TextButton | ImageButton) {
    if ((button instanceof TextButton) | (ImageButton === false)) {
      throw new Error('Invalid value passed for "addButton"');
    }

    this._data.buttons.push(button.getData());

    return this;
  }
}
