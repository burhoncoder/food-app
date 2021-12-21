export const isInArray = (array, card) => {
  let duplicate = false;
  array.map((item) => {
    if (item.id === card.id) {
      duplicate = true;
    }
  });
  let temp = [...array];
  if (!duplicate) {
    temp.push(card);
    return temp;
  } else {
    return temp;
  }
};
