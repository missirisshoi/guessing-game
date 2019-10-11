class GuessingGame {
    constructor() {}

    setRange(min, max) {
        // задаем диапазон поиска
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        // предлагаем в качестве искомого значение из середины диапазона
        this.resultGuess = Math.round((this.minValue + this.maxValue)/2);
        // проверяем результат
        return this.resultGuess;
    }

    lower() {
        // если искомое значение меньше, убираем верхнюю половину диапазона
        this.maxValue = this.resultGuess;
    }

    greater() {
        // если искомое значение больше, убираем нижнюю половину диапазона
        this.minValue = this.resultGuess;
    }
}

module.exports = GuessingGame;
