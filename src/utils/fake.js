import faker from 'faker';

const createArrayWithNumbers = (length) => (
  Array.from({ length }, (_, k) => k + 1)
);

function generateFakeNames(numOfAbs) {
  return createArrayWithNumbers(numOfAbs).map((_, ind) => ({
    id: faker.random.uuid(),
    fullname: faker.name.findName(),
  }));
}

export {
  createArrayWithNumbers,
  generateFakeNames,
};
