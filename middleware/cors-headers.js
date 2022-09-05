module.exports = (req, res, next) => {
  
  response.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization,X-Auth-Token'
  });

  // intercept OPTIONS method
  if(req.method === 'OPTIONS') {
      res.send(200);
  } else {
      next();
  }
};
