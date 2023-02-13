const axios = require('axios');

async function getUsers() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

module.exports = getUsers;
