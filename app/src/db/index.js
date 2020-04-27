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
    {
      id: 1,
      name: "CD",
      imgSrc: "./assets/images/CD.png",
    },
    {
      id: 2,
      name: "Dish-Antenna",
      imgSrc: "./assets/images/Dish-Antenna.png",
    },
    {
      id: 3,
      name: "Laptop",
      imgSrc: "./assets/images/Laptop.png",
    },
    {
      id: 4,
      name: "Light-Bulb",
      imgSrc: "./assets/images/Light-Bulb.png",
    },
    {
      id: 5,
      name: "Loud-Speaker",
      imgSrc: "./assets/images/Loud-Speaker.png",
    },
    {
      id: 6,
      name: "Table-Lamp",
      imgSrc: "./assets/images/Table-Lamp.png",
    },
    {
      id: 7,
      name: "Touch",
      imgSrc: "./assets/images/Touch.png",
    },
    {
      id: 8,
      name: "Keyboard",
      imgSrc: "./assets/images/Keyboard.png",
    },
    // {
    //   id: 9,
    //   name: "Refrigerator",
    //   imgSrc: "./assets/images/Refrigerator.png",
    // },
    // {
    //   id: 10,
    //   name: "Mixer-Grinder",
    //   imgSrc: "./assets/images/Mixer-Grinder.png",
    // },
    // {
    //   id: 11,
    //   name: "Memory-Card",
    //   imgSrc: "./assets/images/Memory-Card.png",
    // },
    // {
    //   id: 12,
    //   name: "Night-Lamp",
    //   imgSrc: "./assets/images/Night-Lamp.png",
    // },
    // {
    //   id: 13,
    //   name: "PBX",
    //   imgSrc: "./assets/images/PBX.png",
    // },
    // {
    //   id: 14,
    //   name: "Tape-Recorder",
    //   imgSrc: "./assets/images/Tape-Recorder.png",
    // },
    // {
    //   id: 15,
    //   name: "Printer",
    //   imgSrc: "./assets/images/Printer.png",
    // },
    // {
    //   id: 16,
    //   name: "Tools",
    //   imgSrc: "./assets/images/Tools.png",
    // },
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
