// Создаем массив и выбираем случайно слово из него. 
// Формула: рандомное чилсло от 0 до 1 умножаем на количество слов в массиве.
// И округляем его, к примеру: 3,453 - 3
var words = ['Зебра', 
'Слон', 
'Лошадь',
'Олень',
'Жираф',
'Тигр'];

var gameWord = words[Math.floor(Math.random() * words.length )];

// Создаем массив для угадываемого слова и заменяем буквы на "_"
// remainingLetters - сколько букв осталось угадать
var answerArray = [];
for (var i = 0; i < gameWord.length; i++) {
    answerArray[i] = '_';
}

var remainingLetters = gameWord.length;

// Цикл продолжается до тех пор, пока игрок не угадает все буквы
// Далее показываем игроку сколько осталось угадать букв
// Окно для ввода буквы, если нажали "Отмена" - выход, если букв > 1 - предуприждение
// Цикл что проверяет есть ли буква в слове, если да - записывает вместо "_"
// Если нет - угадываем дальше
// Оновляет подсказку и массив с ответом
while(remainingLetters > 0) {
    alert(answerArray.join(" "));

    var guess = prompt("Угадайте букву или нажмите \"Отмена\"");
    if(guess === null) {
        break;
    } else if(guess.length !== 1) {
        alert("Введите, пожалуйста, только одну букву");
    } else {
        for(var j = 0; j < gameWord.length; j++) {
            if(gameWord[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

// Загаданое слово и поздравление игрока
alert(answerArray.join(" "));
alert("Победа! Слово, что было загадано - " + gameWord);