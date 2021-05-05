var request = require('request');
module.exports = {
    findAssets : function (req, res){
var options = {
      'method': 'POST',
  'url': 'https://api.shipengine.com/v1/addresses/validate',
  'headers': {
    'Host': 'api.shipengine.com',
    'API-Key': 'TEST_J6h+wzVuOOQlnxi4H6VwhZoBWolFjnM61n6J3K1bTcY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify([{"address_line1":"525 S Winchester Blvd","city_locality":"San Jose","state_province":"CA","postal_code":"95128","country_code":"US"}])

};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
}
}