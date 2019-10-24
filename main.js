$(document).ready(function() {
  let turns = 6

  $(".keyboard button").on("click", function() {
    turns = turns - 1

    $("#turns").html(`Body Parts Left: ${turns}`)
    // End Game
    if (turns === 0) {
      alert("GAME OVER")
      turns = 6
    }
  })
})
