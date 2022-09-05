module.exports = (req, res, next) => {
  
  response.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS,DELETE,GET,PATCH,POST,PUT',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization'
  });

  // intercept OPTIONS method
  if(req.method === 'OPTIONS') {
      res.send(200);
  } else {
      next();
  }
};
