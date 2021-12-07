
var gQuests = createQuests()
var gCurrQuestIdx = 0

function init() {
  renderQuests()
}

function createQuests(){
  var quests = [
    { id: 1, opts: ['Hermon', 'Everest'], correctOptIndex: 1 },
    { id: 2, opts: ['Dog', 'Unicorn'], correctOptIndex: 0 },
    { id: 3, opts: ['Eiffel', 'Pisa'], correctOptIndex: 0 },
  ]
  return quests
}


function renderQuests() {
  if (gCurrQuestIdx >= 3) gCurrQuestIdx = 0
  var elAns0 = document.querySelector('.answer0')
  var elAns1 = document.querySelector('.answer1')
   
  elAns0.innerHTML = gQuests[gCurrQuestIdx].opts[0]
  elAns1.innerHTML = gQuests[gCurrQuestIdx].opts[1]

  var elcard = document.querySelector('.card')
  var bgColor = getRandomColor()
  elcard.style.backgroundColor = bgColor

  var img = `imgs/${gQuests[gCurrQuestIdx].id}.jpg`
  var elimg = document.querySelector('img')
  elimg.src = img
}

function checkAnswer(elBtn) {
  var answer = gQuests[gCurrQuestIdx].correctOptIndex
  if (elBtn === answer) {
    gCurrQuestIdx++
    renderQuests()
  }
}

