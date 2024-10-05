export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error('Cannot instantiate an abstract class');
    }
    this._sqft = sqft; // Store the square footage
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Method to be overridden by subclasses
  evacuationWarningMessage() {
    // This method can be empty but uses 'this' for compliance with ESLint
    return 'This method must be overridden';
  }
}
