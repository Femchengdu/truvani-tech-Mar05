/*
  
 Example data 1:
 =============== 
 const movies = {
    minions: {
      animated: true,
      marvel: false,
      superVilan: true,
      db_test: false,
      pr_alum: true,
    },
    insideOut: {
      animated: true,
      marvel: false,
      superVilan: false,
      db_test: true,
      pr_alum: true,
    },

    avengers: {
      animated: false,
      marvel: true,
      superVilan: true,
      db_test: true,
      pr_alum: false,
    },

    antMan: {
      animated: false,
      marvel: true,
      superVilan: true,
      db_test: false,
      pr_alum: true,
    },
  };
  const selectedMovieKey = "insideOut";

  Example data 2:
  ===============
  const users = {
    Json: {
      insideBook: true,
      minionBook: true,
      ultronBook: true,
      antBook: true,
      manBook: true,
    },

    Andi: {
      insideBook: false,
      minionBook: true,
      ultronBook: false,
      antBook: true,
      manBook: true,
    },

    Sarah: {
      insideBook: true,
      minionBook: false,
      ultronBook: true,
      antBook: false,
      manBook: true,
    },

    Sam: {
      insideBook: false,
      minionBook: false,
      ultronBook: true,
      antBook: true,
      manBook: true,
    },

    rdev: { insideBook: true },
  };
  const selectedUserKey = "rdev";

*/

/**
 * @description Recommends based on properties of a product
 * @param {string} selectedProductKey
 * @param {object} products
 * @returns {object} Returns an object containing the recmmended product and productScores
 */
const recommendByProductProperties = (selectedProductKey, products) => {
  /*Find or recommend the most similar movie based on its properties*/
  const productScores = {};
  const featureKeys = Object.keys(products[selectedProductKey]);
  const otherUserKeys = Object.keys(products).filter(
    (product) => product !== selectedProductKey
  );

  /* For each feature in feature keys, compare selected movie to every other movie  */
  featureKeys.forEach((key) => {
    otherUserKeys.forEach((product) => {
      const selectedProductValue = products[selectedProductKey][key];
      const currentProductValue = products[product][key];

      if (selectedProductValue === currentProductValue) {
        if (selectedProductValue && currentProductValue) {
          if (product in productScores) {
            productScores[product] += 1;
          } else {
            productScores[product] = 1;
          }
        }
      }
    });
  });

  // return book with maxScore
  let bestScore = 0;
  let possibleProductMatch;
  for (const key in productScores) {
    if (productScores[key] > bestScore) {
      bestScore = productScores[key];
      possibleProductMatch = key;
    }
  }

  return { possibleProductMatch, productScores };
};

/**
 * @description Recommends based on Collaboration of users
 * @param {string} selectedUserKey
 * @param {object} users
 * @returns {object} Returns an object containing the recommended product and productScores
 */

const recommendByProductByLikes = (selectedUserKey, users) => {
  const productScores = {};

  const allUsersKeys = Object.keys(users);
  // Remove the selected user form the list
  const otherUserKeys = allUsersKeys.filter((user) => user !== selectedUserKey);

  // Filter the other users based on the selected users book preference
  const selectedUser = users[selectedUserKey];
  const selectedUserProductKeys = Object.keys(selectedUser);
  /*
    Here I assume there is only one key and pick the first 
    value in the array of keys for the selected user.
    If there are more than one key, how will this 
    change the algorithm?
  */
  const selectedUserProductKey = selectedUserProductKeys[0];
  // Filter the other users based on the fact that they liked the same book
  const filteredUserKeys = otherUserKeys.filter(
    (userKey) =>
      users[userKey][selectedUserProductKey] ===
      users[selectedUserKey][selectedUserProductKey]
  );
  // Remove the book which is liked by the selected user
  const filteredUsers = filteredUserKeys.map((filterKey) => {
    const copiedUser = { ...users[filterKey] };
    delete copiedUser[selectedUserProductKey];
    return copiedUser;
  });

  // Now compare the filterd users and update the book scores object
  filteredUsers.forEach((filteredUser) => {
    const filteredUserProducts = Object.keys(filteredUser);
    filteredUserProducts.forEach((productKey) => {
      if (productKey in productScores && filteredUser[productKey] === true) {
        productScores[productKey] += 1;
      } else if (
        !(productKey in productScores) &&
        filteredUser[productKey] === true
      ) {
        productScores[productKey] = 1;
      }
    });
  });

  // return book with maxScore
  let possibleMax = 0;
  let possibleProduct;
  for (const key in productScores) {
    if (productScores[key] > possibleMax) {
      possibleMax = productScores[key];
      possibleProduct = key;
    }
  }

  return { possibleProduct, productScores };
};

module.exports = {
  recommendByProductByLikes,
  recommendByProductProperties,
};
