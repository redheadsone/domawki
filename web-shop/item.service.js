export function getItems() {
  let items = [
    {
      name: "Теплый костюм",
      images: [
        "http://twohearts.com.ua/data/uploads/2018/07/DSC02362-750x1100.jpg",
        "http://twohearts.com.ua/data/uploads/2018/07/DSC02370-750x1100.jpg"
      ],
      price: 1500,
      details:
        "Костюм из 100 % хлопка . Приятный к телу, идеален для зимних вечеров."
    },
    {
      name: "Костюм плиссе",
      images: [
        "https://static.tildacdn.com/tild3261-3131-4564-b032-323230353366/IMG_3147.JPG",
        "https://static.tildacdn.com/tild3833-6139-4661-b331-373066303338/IMG_3145__.JPG"
      ],
      price: 3500,
      details: `Костюм плиссе с объемным свитером с горловиной
          Состав: 50% шерсть, 50% акрил`
    },
    {
      name: "Пуховик бархатный",
      images: [
        "http://twohearts.com.ua/data/uploads/2018/11/puhovik-roz-zol-750x1100.jpg"
      ],
      price: 6500,
      details: `Подходит на температуру до -30 градусов`
    }
  ];
  return items;
}
