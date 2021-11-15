export default function Car(name) {
  this.name = name;
  this.path = '';

  this.move = () => {
    this.path += canMove() ? '-' : '';
  };
}

function canMove() {
  return Math.floor(Math.random() * 10) > 3 ? true : false;
}
