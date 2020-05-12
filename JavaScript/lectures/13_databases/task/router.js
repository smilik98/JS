const Router = require('koa-router');
const db = require('./mongo');

const router = new Router();
const USERID = '558098a65133816958968d88';

router.get('/', async ctx => {
  let { page, itemsPerPage, category } = ctx.request.query;

  page = parseInt(page) || 0;
  itemsPerPage = parseInt(itemsPerPage) || 10;
  category = category || 'All';

  const categories = await db.getCategories();
  const items = await db.getItems(category, page, itemsPerPage);
  const itemCount = await db.getItemCount(category);
  let numPages = 0;

  if (itemCount > itemsPerPage) {
      numPages = Math.ceil(itemCount / itemsPerPage);
  }

  await ctx.render('home', {
    category_param: category,
    categories,
    useRangeBasedPagination: false,
    itemCount,
    pages: numPages,
    page,
    items,
  });
});

router.get('/search', async ctx => {
  let { page, itemsPerPage, query } = ctx.request.query;

  page = parseInt(page) || 0;
  itemsPerPage = itemsPerPage || 10;
  query = query || '';

  const items = await db.searchItems(query, page, itemsPerPage);
  const itemCount = await db.getSearchItemsNumber(query);
  let pages = 0;
                
  if (itemCount > itemsPerPage) {
    pages = Math.ceil(itemCount / itemsPerPage);
  }

  console.log({
    queryString: query,
    itemCount,
    pages,
    page: page,
    items,
  });

  await ctx.render('search', {
    queryString: query,
    itemCount,
    pages,
    page: page,
    items,
  });
});

router.get('/item/:itemId', async ctx => {
  const itemId = parseInt(ctx.params.itemId);
  const item = await db.getItem(itemId);

  let stars = 0;
  let numReviews = 0;
  
  if (item.reviews) {
    numReviews = item.reviews.length;

    item.reviews.forEach(review => {
      stars += review.stars;
    });

    if (numReviews > 0) {
      stars = stars / numReviews;
      reviews = item.reviews;
    }
  }

  const relatedItems = await db.getRelatedItems();

  await ctx.render('item', {
    userId: USERID,
    item: item,
    stars: stars,
    reviews: reviews,
    numReviews: numReviews,
    relatedItems: relatedItems
  });
});

router.post('/item/:itemId/reviews', async ctx => {
  const  { body } = ctx.request;
  const itemId = parseInt(ctx.params.itemId);
  const review = body.review;
  const name = body.name;
  const stars = parseInt(body.stars);
  
  await db.addReview(itemId, review, name, stars);
  await ctx.response.redirect(`/item/${itemId}`);
});

router.get('/cart', async ctx => {
  ctx.response.redirect(`/user/${USERID}/cart`);
});

         
router.get(`/user/:userId/cart`, async ctx => {
  const userId = ctx.params.userId;
  const cart = await db.getCart(userId);
  let total = 0;

  cart.items.forEach(item => {
    total += item.price * item.quantity;
  });

  await ctx.render('cart', {
    userId,
    updated: false,
    cart,
    total
  });
});

module.exports = router;
