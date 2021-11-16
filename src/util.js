export const hideNode = element => {
  element.style.display = 'none';
};
export const showNode = element => {
  element.style.display = 'block';
};

export const appendAtEnd = (parent, type, text) => {
  const parentNode = document.querySelector(parent);
  let newNode = document.createElement(type);

  newNode.innerHTML = text;
  parentNode.append(newNode);
};

export const requestInputAgain = input => {
  alert('잘못된 형식');
  input.value = '';
  input.focus();
};
