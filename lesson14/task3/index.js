let memory = 0;

export const add = (num) => {
  return (memory += num);
};

export const decrease = (num) => {
  return (memory -= num);
};

export const reset = () => {
  return (memory = 0);
};

export const getMemo = () => {
  return memory;
};
