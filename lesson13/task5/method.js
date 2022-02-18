//TASK1

export const reverseArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  if (arr.length === 0) {
    return [];
  }
  return arr.slice().reverse();
};

//TASK2

export function withdraw(clients, balances, client, amount) {
  if (!Array.isArray(clients)) {
    return null;
  }

  let index = clients.indexOf(client);

  if (balances[index] >= amount) {
    return (balances[index] -= amount);
  }

  return -1;
}

//TASK3

export const getAdults = (obj) => {
  let resultObj = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      resultObj[key] = obj[key];
    }
  }
  return resultObj;
};
