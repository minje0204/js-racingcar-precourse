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
  const getElements = () => {
    return {
      carNamesContainer: document.getElementById(CAR_NAMES_CONTAINER),
      carNamesInput: document.getElementById(CAR_NAMES_INPUT),
      carNamesSubmit: document.getElementById(CAR_NAMES_BUTTON),
      racingCountContainer: document.getElementById(RACING_COUNT_CONTAINER),
      racingCountInput: document.getElementById(RACING_COUNT_INPUT),
      racingCountSubmit: document.getElementById(RACING_COUNT_BUTTON),
      resultContainer: document.getElementById(RESULT_CONTAINER),
      resultContent: document.getElementById(RESULT_CONTENT),
    };
  };
  const initDom = () => {
    hideNode(elements.racingCountContainer);
    hideNode(elements.resultContainer);
  };

  const elements = getElements();
  initDom();
}

new RacingCarGame();
