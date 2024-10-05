import Currency from './3-currency'; // Import Currency class

export default class Pricing {
  constructor(amount, currency) {
    // Store attributes in underscore variables
    this._amount = amount;
    this._currency = currency; // currency should be an instance of Currency
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Setter for amount
  set amount(value) {
    this._amount = value;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Setter for currency
  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value; // Ensure the value is an instance of Currency
    } else {
      throw new TypeError('currency must be an instance of Currency');
    }
  }

  // Method to display full price
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
