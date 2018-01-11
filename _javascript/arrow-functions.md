https://youtu.be/6sQDTgOqh-I

const dragonEvents = [
  { type: 'attack', value: 12, target: 'player-dorkman' },
  { type: 'yawn', value: 40 },
  { type: 'eat', target: 'horse' },
  { type: 'attack', value: 23, target: 'player-fluffykins' },
  { type: 'attack', value: 12, target: 'player-dorkman' },
]


const reduceTotal = (prev, x) => (prev || 0) + x
const isAttack = e => e.type === 'attack'

const totalDamageOnDorkman = dragonEvents
  .filter(isAttack)
  .filter(e => e.target === 'player-dorkman')
  .map(e => e.value)
  .reduce(reduceTotal)
