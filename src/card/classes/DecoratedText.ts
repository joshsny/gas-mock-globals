import set from 'lodash.set';
import Action from './Action';
import AuthorizationAction from './AuthorizationAction';
import Button from './Button';
import IconImage from './IconImage';
import OpenLink from './OpenLink';
import Switch from './Switch';
import Widget from './Widget';

export default class DecoratedText extends Widget {
  public _data: {
    bottomLabel?: string;
    text?: string;
    iconUrl?: string;
    startIcon?: ReturnType<IconImage['getData']>;
    endIcon?: ReturnType<IconImage['getData']>;
    wrapText?: boolean;
    onClick?: { action: Action };
    openLink?: ReturnType<OpenLink['getData']>;
    textButton?: ReturnType<Button['getData']>;
    topLabel?: string;
    switch?: ReturnType<Switch['getData']>;
  };

  constructor() {
    super();

    this._data = {};
  }

  setBottomLabel(bottomLabel: string) {
    this._data.bottomLabel = bottomLabel;

    return this;
  }

  setAuthorizationAction(authorizationAction: AuthorizationAction) {
    if (authorizationAction instanceof AuthorizationAction === false) {
      throw new Error('Invalid value passed for "setAuthorizationAction"');
    }

    set(this._data, 'onClick.action', authorizationAction.getData());

    return this;
  }

  setButton(button: Button) {
    if (button instanceof Button === false) {
      throw new Error('Invalid value passed for "setButton"');
    }

    this._data.textButton = button.getData();

    return this;
  }

  setStartIcon(iconImage: IconImage) {
    if (iconImage instanceof IconImage === false) {
      throw new Error('Invalid value passed for "setStartIcon"');
    }

    set(this._data, 'startIcon', iconImage.getData());

    return this;
  }

  setEndIcon(iconImage: IconImage) {
    if (iconImage instanceof IconImage === false) {
      throw new Error('Invalid value passed for "setStartIcon"');
    }

    set(this._data, 'endIcon', iconImage.getData());

    return this;
  }

  setIconUrl(iconUrl: string) {
    this._data.iconUrl = iconUrl;

    return this;
  }

  setWrapText(wrapText: boolean) {
    this._data.wrapText = wrapText;

    return this;
  }

  setOnClickAction(onClickAction: Action) {
    if (onClickAction instanceof Action === false) {
      throw new Error('Invalid value passed for "setOnClickAction"');
    }

    set(this._data, 'onClick.action', onClickAction.getData());

    return this;
  }

  setOnClickOpenLinkAction(onClickOpenLinkAction: Action) {
    if (onClickOpenLinkAction instanceof Action === false) {
      throw new Error('Invalid value passed for "setOnClickOpenLinkAction"');
    }

    set(this._data, 'onClick.action', onClickOpenLinkAction.getData());

    return this;
  }

  setOpenLink(openLink: OpenLink) {
    if (openLink instanceof OpenLink === false) {
      throw new Error('Invalid value passed for "setOpenLink"');
    }

    // TODO: check the name of the property
    this._data.openLink = openLink.getData();

    return this;
  }

  setSwitchControl(switchToSet: Switch) {
    this._data.switch = switchToSet.getData();

    return this;
  }

  setText(text: string) {
    this._data.text = text;

    return this;
  }

  setTopLabel(topLabel: string) {
    this._data.topLabel = topLabel;

    return this;
  }

  getData() {
    return { decoratedText: super.getData() };
  }
}
