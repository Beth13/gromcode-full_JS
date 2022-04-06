"use strict";

export const getDiff = (startDate, endDate) => {
  const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

  const daysDiff = Math.floor(timeDiff / 1000 / 3600 / 24);
  const hoursDiff = Math.floor((timeDiff / 1000 / 3600) % 24);
  const minutesDiff = Math.floor((timeDiff / 1000 / 60) % 60);
  const secondsDiff = Math.floor((timeDiff / 1000) % 60);

  return `${daysDiff}d ${hoursDiff}h ${minutesDiff}m ${secondsDiff}s`;
};

console.log(getDiff(new Date(2022, 0, 1), new Date()));
