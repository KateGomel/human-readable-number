module.exports = function toReadable(number) {
  const digits = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const first = +number.toString().slice(0, 1);
  const second = +number.toString().slice(1, 2);
  const third = +number.toString().slice(2);
  const secondThird = +number.toString().slice(1);

  if (number === 0) {
    return 'zero';
  }
  if (number < 20) {
    return digits[number];
  }
  if (number % 100 === 0 && number <= 999) {
    return `${digits[first]} hundred`;
  }
  if (number % 10 === 0 && number < 100 && number !== 10) {
    return tens[first];
  }
  if (number % 10 === 0 && number > 100 && second !== 1) {
    return `${digits[first]} hundred ${tens[second]}`;
  }
  if (number.toString().length === 2) {
    return `${tens[first]} ${digits[second]}`;
  }
  if (tens[second]) {
    return `${digits[first]} hundred ${tens[second]} ${digits[third]}`;
  }
  return `${digits[first]} hundred ${digits[secondThird]}`;
};
