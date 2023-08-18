// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const filterByType = (cards,arcano) => {
  const arcanoSelected = cards.filter((obj) => obj.type === arcano);
  return arcanoSelected;
};

export const filterBySuit = (cards,tipo) => {
  const tiposSelected = cards.filter((obj) => obj.suit === tipo);
  return tiposSelected;
};

/*export const example = () => {
  return 'example';
};*/



