import { appendAtEnd } from './util.js';

export default function Car(name) {
  this.name = name;
  this.path = '';

  this.move = () => {
    this.path += canMove() ? '-' : '';
  };

  this.print = () => {
    appendAtEnd('#result-container', 'div', `${this.name}: ${this.path}`);
  };
}

function canMove() {
  return Math.floor(Math.random() * 10) > 3 ? true : false;
}
