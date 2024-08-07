module.exports = function toReadable(number) {
    const digits = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let first = +number.toString().slice(0, 1);
    let second = +number.toString().slice(1, 2);
    let third = +number.toString().slice(2);
    let secondThird = +number.toString().slice(1);

    if (number === 0) {
        return "zero";
    } else if (number < 20) {
        return digits[number];
    } else if (number % 100 === 0 && number <= 999) {
        return digits[first] + " hundred";
    } else if (number % 10 === 0 && number < 100 && number !== 10) {
        return tens[first];
    } else if (number % 10 === 0 && number > 100 && second !== 1) {
        return digits[first] + " hundred" + " " + tens[second];
    } else if (number.toString().length === 2) {
        return tens[first] + " " + digits[second];
    } else {
        if (tens[second]) {
            return (
                digits[first] +
                " hundred" +
                " " +
                tens[second] +
                " " +
                digits[third]
            );
        } else {
            return digits[first] + " hundred" + " " + digits[secondThird];
        }
    }
};
