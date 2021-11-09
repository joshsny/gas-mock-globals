export default class Switch {
  public _data: { autoComplete: { items: { text: string }[] } };

  constructor() {
    this._data = {
      autoComplete: {
        items: [],
      },
    };
  }

  getData() {
    return this._data;
  }

  addSuggestion(suggestion = '') {
    this._data.autoComplete.items.push({
      text: suggestion,
    });

    return this;
  }

  addSuggestions(suggestions: string[] = []) {
    suggestions.forEach((s) => this.addSuggestion(s));

    return this;
  }
}
