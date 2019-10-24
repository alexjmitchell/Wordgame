var alphabet = "abcdefghijklmnopqrstuvwxyz"
var userGuesses = []

function handleGamePlay(gameWordToLetters, gameBoard) {
  console.log("---> handleGamePlay")
  $(".keyboard button").on("click", function(e) {
    e.preventDefault()

    let value = $(this)
      .html()
      .toLowerCase()

    function guess() {
      // let guesses = ""
      // guesses = value
      // userGuesses.push(guesses)
      // userGuesses = userGuesses.forEach(letter => {
      //   guesses = `<p>${letter}</p>`
      //   return guesses
      // })

      return $(".guesses").html(value)
    }

    guess()

    gameBoard = gameBoard.map(function(under, index) {
      if (gameWordToLetters[index] === value) {
        return value
      } else {
        return under
      }
    })

    if (!gameBoard.includes("_")) {
      setTimeout(function() {
        alert("You Win!!!!!!!!")
      }, 500)
    }

    $(this).attr("disabled", "disabled")
    return renderGameWord(gameBoard)
  })
}

function renderKeyboard() {
  console.log("---> renderKeyboard")
  let keyboard = ""
  alphabet.split("").forEach(letter => {
    keyboard += `<button>${letter.toUpperCase()}</button>`
  })
  $(".keyboard").html(keyboard)
}

function renderGameWord(gameBoard) {
  console.log("---> renderGameWord")
  $(".underscores").html(`<p>${gameBoard.join(" ")}</p>`)
}

function filterCommonWords(commonWords) {
  console.log("---> filterCommonWords")
  return commonWords.filter(word => {
    if (word.length >= 3) {
      return word
    }
  })
}

function shuffleWords(array) {
  console.log("---> shuffleWords")
  let currentIndex = array.length
  let temporaryValue
  let randomIndex
  const newArray = array.slice()
  // While there remains elements to shuffle...
  while (currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    // Swap it with the current element.
    temporaryValue = newArray[currentIndex]
    newArray[currentIndex] = newArray[randomIndex]
    newArray[randomIndex] = temporaryValue
  }
  return newArray
}

function getGameWord(words) {
  console.log("---> getGameWord")
  if (!words) {
    return null
  }
  const gameWord = words[Math.floor(Math.random() * words.length)]
  console.log("+++++ CHEAT +++++", gameWord)
  return gameWord
}

$(document).ready(function() {
  let gameWordToLetters = []

  // Fetch filtered list of words for game
  var list = filterCommonWords(commonWords)

  // Shuffle word list
  var shuffledList = shuffleWords(list)

  // Select random word for game
  var currentGameWord = getGameWord(shuffledList)

  // Split game word in to playable letters
  gameWordToLetters.push(...currentGameWord)

  // console.log(currentToArray)
  // console.log(current)

  var gameBoard = gameWordToLetters.map(function(letter) {
    return "_"
  })

  renderGameWord(gameBoard)
  renderKeyboard()
  handleGamePlay(gameWordToLetters, gameBoard)
})
