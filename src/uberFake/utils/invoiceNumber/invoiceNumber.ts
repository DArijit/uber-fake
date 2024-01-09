const generateRandomString = () => {
  const getRandomCharacter = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
  };

  const prefix =
    getRandomCharacter() +
    getRandomCharacter() +
    getRandomCharacter() +
    getRandomCharacter() +
    getRandomCharacter() +
    getRandomCharacter() +
    getRandomCharacter() +
    getRandomCharacter();
  const randomPart = Math.floor(Math.random() * 100000000)
    .toString()
    .padStart(4, "0");
  const randomString = prefix + randomPart;

  return randomString;
};

export const invoiceNumber = generateRandomString();
