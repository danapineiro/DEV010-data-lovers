
export const randomCard = (cards) => {
  const randomIndex = Math.floor(Math.random() * cards.length);
  return randomIndex;
};

export const filterByType = (cards,arcano) => {
  const arcanoSelected = cards.filter((obj) => obj.type === arcano);
  return arcanoSelected;
};

export const filterBySuit = (cards,tipo) => {
  const tiposSelected = cards.filter((obj) => obj.suit === tipo);
  return tiposSelected;
};





