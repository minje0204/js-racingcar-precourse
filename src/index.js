import {
  CAR_NAMES_INPUT,
  CAR_NAMES_BUTTON,
  RACING_COUNT_INPUT,
  RACING_COUNT_BUTTON,
} from './utils/constants.js';

export default function RacingCarGame() {
  const elements = getElements();
}
const getElements = () => {
  return {
    carNamesInput: document.querySelector(CAR_NAMES_INPUT),
    carNamesSubmit: document.querySelector(CAR_NAMES_BUTTON),
    racingCountInput: document.querySelectorAll(RACING_COUNT_INPUT),
    racingCountSubmit: document.querySelectorAll(RACING_COUNT_BUTTON),
  };
};
new RacingCarGame();
