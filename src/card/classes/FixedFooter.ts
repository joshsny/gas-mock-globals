import Button from './Button';
import Widget from './Widget';

export default class FixedFooter extends Widget {
  public _data: {
    primaryButton?: ReturnType<Button['getData']>;
    secondaryButton?: ReturnType<Button['getData']>;
  };

  constructor() {
    super();

    this._data = {};
  }

  setPrimaryButton(button: Button) {
    if (button instanceof Button === false) {
      throw new Error('Invalid value passed for "setPrimaryButton"');
    }

    this._data.primaryButton = button.getData();

    return this;
  }

  setSecondaryButton(button: Button) {
    if (button instanceof Button === false) {
      throw new Error('Invalid value passed for "setSecondaryButton"');
    }

    this._data.secondaryButton = button.getData();

    return this;
  }

  getData() {
    return { fixedFooter: super.getData() };
  }
}
