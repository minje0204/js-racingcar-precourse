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
import Car from './models/Car.js';

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

  carNamesSubmit.addEventListener('click', () =>
    handleCarNames(carNamesInput, racingCountContainer),
  );
}

const initDom = (racingCountContainer, resultContainer) => {
  hideNode(racingCountContainer);
  hideNode(resultContainer);
};

const handleCarNames = input => {
  const carNames = input.value.split(',');

  if (carNames.length <= 1 || carNames.length != new Set(carNames).size) {
    return requestInputAgain(input);
  }

  for (let name of carNames) {
    if (!validateCarName(name)) {
      return requestInputAgain(input);
    }
  }

  const cars = generateCars(carNames);
  showCountContainer(cars);
};

const validateCarName = name => {
  return name.length > 5 ? false : true;
};

const requestInputAgain = input => {
  alert('잘못된 형식');
  input.value = '';
  input.focus();
};

const generateCars = carNames => {
  let cars = [];
  for (let name of carNames) {
    cars.push(new Car(name));
  }
  return cars;
};

const showCountContainer = cars => {
  const racingCountContainer = document.getElementById(RACING_COUNT_CONTAINER);
  const racingCountInput = document.getElementById(RACING_COUNT_INPUT);
  const racingCountSubmit = document.getElementById(RACING_COUNT_BUTTON);

  showNode(racingCountContainer);
  racingCountSubmit.addEventListener('click', () =>
    handleRacingCount(cars, racingCountInput),
  );
  racingCountInput.focus();
};

const handleRacingCount = (cars, input) => {
  if (input.value <= 0) {
    return requestInputAgain(input);
  }
};

new RacingCarGame();
