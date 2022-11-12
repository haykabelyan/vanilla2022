// SELECTORS
var $start = document.querySelector('#start')
var $game = document.querySelector('#game')
var $time = document.querySelector('#time')             // Seconds
var $result = document.querySelector('#result')
var $gameTime = document.querySelector('#game-time')    // input

var colors = ['#CB356B', '#BD3F32', '#3A1C71', '#D76D77', '#283c86', '#45a247', '#8e44ad', '#155799', '#159957', '#000046', '#1CB5E0', '#2F80ED']
var score = 0

// EVENTS
$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)
$gameTime.addEventListener('input', setGameTime)

function startGame() {
    score = 0
    $result.textContent = score // xaxy skseluc Result: zroyacnum enk

    $game.style.backgroundColor = '#fff'
    hide($start)
    $gameTime.setAttribute('disabled', 'true')  // input@ anum enk disable

    var interval = setInterval(function () {
        var time = parseFloat($time.textContent)

        if (time <= 0) {
            clearInterval(interval)
            endGame()
        } else {
            $time.textContent = (time - 0.1).toFixed(1)
        }
    }, 100)
    renderBox()
}


function renderBox() {
    $game.innerHTML = ''
    var box = document.createElement('div')
    var boxSize = getRandom(30, 100)
    var gameSize = $game.getBoundingClientRect()
    var maxTop = gameSize.height - boxSize
    var maxLeft = gameSize.width - boxSize
    // [1, 2, 3] -> length == 3
    var randomColorIndex = getRandom(0, colors.length)

    box.style.height = box.style.width = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.backgroundColor = colors[randomColorIndex]
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')

    $game.insertAdjacentElement('afterbegin', box)

}


function handleBoxClick(event) {
    if (event.target.dataset.box) {  //  box.setAttribute('data-box', 'true')
      score++
      renderBox()
    }
  }

  function endGame() {
    show($start)
    $game.innerHTML = ''
    $game.style.backgroundColor = '#ccc'
    $result.textContent = score.toString()
    $gameTime.removeAttribute('disabled')
    setGameTime()
  }
  

  function setGameTime() {
    var time = +$gameTime.value
    $time.textContent = time.toFixed(1)
  }


function show($el) {
    $el.classList.remove('hide')
}

function hide($el) {
    $el.classList.add('hide')
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}