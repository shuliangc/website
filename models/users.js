const notion = require("../bin/client");

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    const listUsersResponse = await notion.users
      .list({})
      .catch((error) => reject(error));
    resolve(listUsersResponse?.results[0]);
  });
};

module.exports = {
  getUsers,
};
