"use strict";

const getUsersBlogs = async (users) => {
  const usersArray = users.map((userId) => {
    const response = fetch(`https://api.github.com/users/${userId}`)
      .catch((response) => {
        if (!response.ok) {
          throw new Error("Failed to get user data");
        }
      })
      .then((userData) => userData.json())
      .then((userData) => userData.blog);

    return response;
  });

  const result = await Promise.all(usersArray);
  return result;
};

// examples
getUsersBlogs(["google", "facebook", "reactjs"]).then((linksList) =>
  console.log(linksList)
); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(["microsoft"]).then((linksList) => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
