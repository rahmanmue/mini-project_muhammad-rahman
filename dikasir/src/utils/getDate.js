export const getDate = () => {
  let date = new Date();

  let ambilTanggal = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

  return ambilTanggal;
};
