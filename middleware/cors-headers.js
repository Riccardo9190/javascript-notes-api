module.exports = (req, res, next) => {
  
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  // intercept OPTIONS method
  if(req.method === 'OPTIONS') {
      res.send(200);
  } else {
      next();
  }
};
