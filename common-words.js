$(document).ready(function() {
  var commonWords = [
    "the",
    "of",
    "and",
    "a",
    "to",
    "in",
    "is",
    "you",
    "that",
    "it",
    "he",
    "was",
    "for",
    "on",
    "are",
    "as",
    "with",
    "his",
    "they",
    "I",
    "at",
    "be",
    "this",
    "have",
    "from",
    "or",
    "one",
    "had",
    "by",
    "word",
    "but",
    "not",
    "what",
    "all",
    "were",
    "we",
    "when",
    "your",
    "can",
    "said",
    "there",
    "use",
    "an",
    "each",
    "which",
    "she",
    "do",
    "how",
    "their",
    "if",
    "will",
    "up",
    "other",
    "about",
    "out",
    "many",
    "then",
    "them",
    "these",
    "so",
    "some",
    "her",
    "would",
    "make",
    "like",
    "him",
    "into",
    "time",
    "has",
    "look",
    "two",
    "more",
    "write",
    "go",
    "see",
    "number",
    "no",
    "way",
    "could",
    "people",
    "my",
    "than",
    "first",
    "water",
    "been",
    "call",
    "who",
    "oil",
    "its",
    "now",
    "find",
    "long",
    "down",
    "day",
    "did",
    "get",
    "come",
    "made",
    "may",
    "part"
  ]

  var words = commonWords.filter(words => {
    if (words.length >= 3) {
      return words
    }
  })

  const shuffle = array => {
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
  words = shuffle(words)

  var current = words[Math.floor(Math.random() * words.length)]

  let currentToArray = []

  currentToArray.push(...current)

  console.log(currentToArray)
  console.log(current)

  async function onScreen() {
    try {
      $("#word").html(`
  <ul>
    <li>${current}</li>
  </ul>
  `)
    } catch {
      console.log(error)
    }
  }

  onScreen()

  function repeat(item, times) {
    let result = []
    for (let i = 0; i < times; i++) {
      result.push(item)
    }
    return result
  }

  var underscores = currentToArray.map(function(under) {
    return "_"
  })

  function displayUnders() {
    $(".underscores").html(
      `
    <p>${underscores.join(" ")}</p>
    `
    )
  }

  displayUnders()

  var alphabet = "abcdefghijklmnopqrstuvwxyz"
  let keyboard = ""
  alphabet.split("").forEach(letter => {
    keyboard += `<button>${letter.toUpperCase()}</button>`
  })
  $(".keyboard").html(keyboard)

  $(".keyboard button").on("click", function(e) {
    e.preventDefault()
    let value = $(this)
      .html()
      .toLowerCase()

    underscores = underscores.map(function(under, index) {
      if (currentToArray[index] === value) {
        return value
      } else {
        return under
      }
    })

    displayUnders()
  })
})

// let dash = []

// if (currentToArray.includes(value)) {
//   underscores = currentToArray.map(function(letter, index) {
//     if (letter == value) {
//       // dash.push(underscores)
//       dash = underscores.split("")
//       dash[index] = letter

//       console.log(dash[index] + " dashindex")

//       underscores = dash.join(" ")
//       console.log(underscores + " underscores")
//       return $(".underscores").html(underscores)
//     } else {
//       underscores
//     }
//   })
// }

// console.log(underscores)
