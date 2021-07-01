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
  if (health > 0) {
    health -= type.damage
  } else {
    health = 0
  }
  update()
}

function update() {
  document.getElementById('health').innerText = health
  document.getElementById('hits').innerText = hits

}

update()

