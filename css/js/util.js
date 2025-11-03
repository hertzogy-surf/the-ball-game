function getRandomInt(min, max) {
    min = Math.ceil(min) // Rounds the minimum value up to the nearest whole number
    max = Math.floor(max) // Rounds the maximum value down to the nearest whole number
    return Math.floor(Math.random() * (max - min + 1)) + min
}