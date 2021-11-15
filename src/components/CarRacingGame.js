export default class CarRacingGame {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    const test = document.createElement("div");
    test.innerText = "hello~!";

    this.$target.appendChild(test);
  }
}
