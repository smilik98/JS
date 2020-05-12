const mongo = require('mongoskin');
const db = mongo.db('mongodb://localhost:27017/mongomart', { useNewUrlParser: true });

db.on('close', err => {
  if (err) {
    return console.log('Closing during error:', err);
  }

  console.log('Connection closed');
});

db.on('connected', () => {
  console.log('Connected to mongodb');
});

db.getCategories = async () => {
  // Collect all categories in items
  // Count them and return
  // Example: { _id: 'Category name', num: 5 }
  return new Promise((resolve, reject) => {
    db.collection('item').aggregate([
      ], (err, result) => {
        if (err) {
          return reject(err);
        }

        result.toArray((error, categories) => {
          if (error) {
            return reject(error);
          }

          const category = {
            _id: 'All',
            num: 0
          };
          categories.forEach(c => category.num += c.num);
          categories.unshift(category);

          resolve(categories);
        });
    });
  });
};

db.getItems = async (category, page, itemsPerPage) => {
  // Select items by category
  return new Promise((resolve, reject) => {
    const query = {};

    if (category !== 'All') {
      query.category = category;
    }

    db.collection('item')
      //...
      .toArray((err, items) => {
        if (err) {
          return reject(err);
        }
  
        resolve(items);
      });
  });
};

db.getItemCount = async category => {
  // Get items count by category
  return new Promise((resolve, reject) => {
  });
};

// db.getCollection('item').createIndex(
//   {
//     title: 'text',
//     slogan: 'text',
//     description: 'text'
//   }
// )

db.searchItems = async (query, page, itemsPerPage) => {
  // Search items by query using text index.
  // Create index before!! See   https://docs.mongodb.com/manual/text-search/
  return new Promise((resolve, reject) => {
  });
};

db.getSearchItemsNumber = async query => {
  // Get search items count
  return new Promise((resolve, reject) => {
  });
};

db.getItem = async itemId => {
  // Get one item
 return new Promise((resolve, reject) => {
  });
};

db.getRelatedItems = async () => {
  // Return first 4 items
  return new Promise((resolve, reject) => {
  });
};

db.addReview = async (itemId, comment, name, stars) => {
  // Create new review doc and push it to reviews nested array
  return new Promise((resolve, reject) => {
  });
};

db.getCart = async userId => {
  // Get cart by user id
  return new Promise((resolve, reject) => {
  });
};

module.exports = db;
