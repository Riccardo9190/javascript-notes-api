module.exports = (request, response, next) => {
  // http://expressjs.com/en/4x/api.html#res.set
  response.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE,GET,PATCH,POST,PUT',
      'Access-Control-Allow-Headers': 'Content-Type,Authorization'
  });

  // intercept OPTIONS method
  if(request.method === 'OPTIONS') {
      response.send(200);
  } else {
      next();
  }
};
