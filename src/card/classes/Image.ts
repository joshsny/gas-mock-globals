import Widget from './Widget';

export default class Image extends Widget {
  public _data: {
    url?: string;
    altText?: string;
  };

  constructor() {
    super();
    this._data = {};
  }

  setAltText(altText: string) {
    this._data.altText = altText;

    return this;
  }

  getData() {
    return this._data;
  }

  setImageUrl(url: string) {
    this._data.url = url;

    return this;
  }
}
