import ImageCropType from '../enums/ImageCropType';
import Widget from './Widget';

export default class IconImage extends Widget {
  public _data: {
    url?: string;
    imageCropType?: ImageCropType;
    altText?: string;
  };

  constructor() {
    super();
    this._data = {};
  }

  getData() {
    return this._data;
  }

  setIconUrl(url: string) {
    this._data.url = url;

    return this;
  }

  setAltText(altText: string) {
    this._data.altText = altText;

    return this;
  }

  setImageCropType(imageCropType: ImageCropType) {
    this._data.imageCropType = imageCropType;

    return this;
  }
}
