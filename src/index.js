import {
  CAR_NAMES_CONTAINER,
  CAR_NAMES_INPUT,
  CAR_NAMES_BUTTON,
  RACING_COUNT_CONTAINER,
  RACING_COUNT_INPUT,
  RACING_COUNT_BUTTON,
  RESULT_CONTAINER,
  RESULT_CONTENT,
} from './utils/constants.js';
import { hideNode, showNode } from './utils/domUtil.js';

export default function RacingCarGame() {
  const carNamesContainer = document.getElementById(CAR_NAMES_CONTAINER);
  const carNamesInput = document.getElementById(CAR_NAMES_INPUT);
  const carNamesSubmit = document.getElementById(CAR_NAMES_BUTTON);
  const racingCountContainer = document.getElementById(RACING_COUNT_CONTAINER);
  const racingCountInput = document.getElementById(RACING_COUNT_INPUT);
  const racingCountSubmit = document.getElementById(RACING_COUNT_BUTTON);
  const resultContainer = document.getElementById(RESULT_CONTAINER);
  const resultContent = document.getElementById(RESULT_CONTENT);

  initDom(racingCountContainer, resultContainer);

  carNamesSubmit.addEventListener('click', () => handleCarNames(carNamesInput));
}

const initDom = (racingCountContainer, resultContainer) => {
  hideNode(racingCountContainer);
  hideNode(resultContainer);
};

const handleCarNames = input => {
  const carNames = input.value.split(',');

  if (carNames.length <= 1 || carNames.length != new Set(carNames).size) {
    alert('잘못된 형식');
    input.value = '';
    return input.focus();
  }

  generateCars(); //todo
};

new RacingCarGame();
