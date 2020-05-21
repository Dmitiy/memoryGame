function shuffle(array) {
  const _arr = array.slice(0);
  for (let i = 0; i < array.length - 1; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = _arr[i];
    _arr[i] = _arr[randomIndex];
    _arr[randomIndex] = temp;
  }
  return _arr;
}

export default function loadCards() {
  let id = 0;

  const cards = [
    "CD",
    "Dish-Antenna",
    "Laptop",
    "Light-Bulb",
    "Loud-Speaker",
    "Table-Lamp",
    "Touch",
    "Keyboard",
    //    "Refrigerator",
    //    "Mixer-Grinder",
    //    "Memory-Card",
    //    "Night-Lamp",
    //    "PBX",
    //    "Tape-Recorder",
    //    "Printer",
    //    "Tools",
  ].reduce((acc, type) => {
    acc.push({
      id: id++,
      type,
    });
    acc.push({
      id: id++,
      type,
    });
    return acc;
  }, []);
  return shuffle(cards);
}
