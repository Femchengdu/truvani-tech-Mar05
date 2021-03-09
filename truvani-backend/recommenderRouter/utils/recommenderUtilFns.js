const g = require("ger");
// Initialize the Event Store Manager
const esm = new g.MemESM();
// Create a good enough recommender
const ger = new g.GER(esm);

const getCategoryMatch = (
  selectedCategory,
  productCategory,
  sensitivity = 0.6
) => {
  let categoryMatch = 0;
  selectedCategory.forEach((category) => {
    if (productCategory.includes(category)) {
      categoryMatch += 1;
    }
  });
  let matchPercent;
  if (categoryMatch > 0) {
    matchPercent = categoryMatch / selectedCategory.length;
  } else if (categoryMatch === 0) {
    matchPercent = 0;
  }

  return matchPercent > sensitivity ? "match" : "noMatch";
};

const createEventsArrayFromData = (
  dataArray,
  nameSapace,
  person,
  propertiesKeysArray
) => {
  const modelEvent = {
    namespace: nameSapace,
    person,
    action: "likes",
    thing: "match",
    expires_at: "2022-06-06",
  };
  const eventsArray = dataArray.map((product) => {
    const currentEvent = {
      namespace: nameSapace,
      person: product.id + "",
      action: "likes",
      thing: getCategoryMatch(propertiesKeysArray, product.categories),
      expires_at: "2022-06-06",
    };
    return currentEvent;
  });

  eventsArray.push(modelEvent);
  return eventsArray;
};

const recommendByProductProperty = (
  productId,
  dataArray,
  nameSpace,
  person,
  responseCb
) => {
  // Setup
  const selectedProduct = dataArray.find(
    (product) => product.id === parseInt(productId)
  );
  const propertiesKeysArray = selectedProduct.categories;
  // Events array
  const eventsArray = createEventsArrayFromData(
    dataArray,
    nameSpace,
    person,
    propertiesKeysArray
  );
  // Do work
  ger
    .initialize_namespace(nameSpace)
    .then(function () {
      return ger.events(eventsArray);
    })
    .then(function () {
      // What things might rdev like?
      return ger.recommendations_for_person(nameSpace, person, {
        actions: { likes: 1 },
      });
    })
    .then(function (recommendations) {
      const { recommendations: innerRecommendations } = recommendations;
      console.log("myResults ?", innerRecommendations);
      if (innerRecommendations.length === 0) {
        responseCb([]);
      } else {
        const recommendationObj = innerRecommendations[0];
        const { people } = recommendationObj;

        // Render result
        if (people) {
          const numberPeopleArr = people.map((val) => parseInt(val));
          responseCb(numberPeopleArr);
        }
      }
    });
};
module.exports = {
  recommendByProductProperty,
};
