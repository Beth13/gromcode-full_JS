const jsonStr = '{"name": "Tom"}';

export const parseUser = (jsonStr) => {
  try {
    const parserResult = JSON.parse(jsonStr);
    return parserResult;
  } catch (error) {
    return null;
  }
};

console.log(parseUser(jsonStr));
