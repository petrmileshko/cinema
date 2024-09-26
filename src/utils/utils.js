import dayjs from 'dayjs';

// Получение случайного числа из диапазона между min и max включительно
function getRandomNumber(min, max) {

  if (min === max) {
    return min;
  }
  const from = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const till = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (till - from + 1)) + from;
}


//Получить случайный элемент из массива
function getRandomElement(elements) {
  return elements[getRandomNumber(0, elements.length - 1)];
}

function getRandomFloat(min, max, decimals = 1) {

  if (min === max) {
    return min;
  }
  const from = Math.min(Math.abs(min), Math.abs(max));
  const till = Math.max(Math.abs(min), Math.abs(max));
  return (Math.random() * (till - from + 1) + from).toFixed(decimals);
}

// Проверка длины введенной строки на соблюдение условия не более max
function validateTextLength(text, max) {
  if (text === '' || text === null || text === undefined || max < 1 || typeof (text) !== 'string') {
    return false;
  }
  return text.length <= max;
}

function convertDate(date) {
  return dayjs(date).format('YYYY');
}

function convertMinutesToTime(min) {
  const minutesString = (min < 60) ? `${min}m` : `${Math.floor(min / 60)}h ${min % 60}m`;
  return minutesString;
}
export {
  getRandomNumber,
  getRandomFloat,
  validateTextLength,
  getRandomElement,
  convertMinutesToTime,
  convertDate
};
