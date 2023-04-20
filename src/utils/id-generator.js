export const generateUUID = () => {
  let id = "";
  for (let i = 0; i < 13; i++) {
    const num = Math.floor(Math.random() * 10);
    id += num;
  }
  return id;
};

export const numToBase62 = (number) => {
  let alphabets = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let encoded = "";
  while (number > 0) {
    let r = number % 62;
    encoded = alphabets[r] + encoded;
    number = Math.floor(number / 62);
  }
  return encoded;
};
