import Card from './Card';

export default class Navigation {
  public _data: {
    cardNavigations: (
      | { pushCard: ReturnType<Card['getData']> }
      | { updateCard: ReturnType<Card['getData']> }
      | { popCard: null }
    )[];
  };

  constructor() {
    this._data = { cardNavigations: [] };
  }

  getData() {
    return this._data;
  }

  popToRoot() {
    // NOTE: This needs to access a global stack of cards, whereas here it only pops the current stack to root.
    // to properly implement this, we need to use a global stack of cards, and pop the stack to root.
    this._data.cardNavigations = [];
    return this;
  }

  pushCard(card: Card) {
    if (card instanceof Card === false) {
      throw new Error('Invalid value passed for "pushCard"');
    }
    this._data.cardNavigations.push({ pushCard: card.getData() });
    return this;
  }

  updateCard(card: Card) {
    if (card instanceof Card === false) {
      throw new Error('Invalid value passed for "updateCard"');
    }
    this._data.cardNavigations.push({ updateCard: card.getData() });
    return this;
  }

  popCard() {
    this._data.cardNavigations.push({ popCard: null });
    return this;
  }
}
