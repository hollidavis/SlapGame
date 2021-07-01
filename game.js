let health = 100
let hits = 0

//#region NOTE Phase 1
// function slap() {

//   health--
//   hits++
//   update()
// }
// function punch() {
//   health -= 5
//   hits++
//   update()
// }
// function kick() {
//   health -= 10
//   hits++
//   update()
// }
//#endregion

let attacks = {
  slap: {
    damage: 1
  },

  punch: {
    damage: 5
  },
  kick: {
    damage: 10
  }
}

function pain(attackName) {
  let type = attacks[attackName]
  health -= type.damage
  if (health < 0) {
    health = 0
    alert('they have died')
    document.getElementById('slap-button').disabled = true
    document.getElementById('punch-button').disabled = true
    document.getElementById('kick-button').disabled = true
  }
  update()
}

function reset() {
  document.getElementById('slap-button').disabled = false
  document.getElementById('punch-button').disabled = false
  document.getElementById('kick-button').disabled = false
  health = 100
  hits = 0
  update()
}

function update() {
  document.getElementById('health').innerText = health.toString()
  document.getElementById('hits').innerText = hits.toString()
}

update()

