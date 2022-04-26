export const delay = (time) => {
  const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, time);
  });

  return pr;
};

delay(3000).then((data) => {
  console.log(data);
});
