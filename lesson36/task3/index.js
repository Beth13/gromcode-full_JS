"use strict";

const getUsersBlogs = (users) => {
  return Promise.all(
    users.map(async (userId) => {
      const response = await fetch(`https://api.github.com/users/${userId}`);

      if (!response.ok) {
        throw new Error("Failed to get user data");
      }

      const userData = await response.json();
      return userData.blog;
    })
  );
};

// examples
getUsersBlogs(["google", "facebook", "reactjs"]).then((linksList) =>
  console.log(linksList)
); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(["microsoft"]).then((linksList) => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
