const VERBS = ['eat', 'get', 'make', 'play with', 'sit on', 'sing about', 'take out'];
const OBJECTS = ['cat', 'computer', 'dog', 'friends', 'hamburger', 'mouse', 'strangers', 'trash'];

export function generateRandomToDoItems(): string[] {
  return VERBS.map(v => OBJECTS.map(o => `${v} ${o}`)).flat()
    .map(x => ({ value: x, index: Math.random() }))
    .sort((a, b) => a.index - b.index)
    .map(x => x.value)
}

export function getRandomToDoItem(): string {
  return `${VERBS[Math.floor(VERBS.length * Math.random())]} ${OBJECTS[Math.floor(OBJECTS.length * Math.random())]}`;
}
