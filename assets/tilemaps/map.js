(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("map",
{ "height":20,
 "infinite":false,
 "layers":[
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 60, 60, 60, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 60, 60, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 60, 60, 60, 60, 60, 60, 60, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 60, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 60, 60, 60, 60, 60, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 0, 0, 0, 0, 0, 0, 60, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 60, 60, 60, 60, 60, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 18, 18, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 18, 18, 18, 71, 71, 18, 18, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 15, 0, 0, 0, 0, 0, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 60, 60, 60, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 18, 18, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 18, 18, 18, 18, 18, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 60, 60, 60, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 18, 18, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 18, 18, 18, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 15, 15, 15, 15, 0, 15, 15, 15, 15, 0, 15, 15, 15, 0, 15, 15, 0, 15, 15, 15, 18, 18, 45, 0, 0, 0, 0, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 18, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 71, 71, 18, 18, 18, 18, 71, 18, 18, 18, 18, 71, 18, 18, 18, 71, 18, 18, 71, 18, 18, 18, 18, 45, 0, 0, 0, 0, 0, 0, 0, 60, 18, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 30, 30, 30, 30, 30, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 0, 0, 0, 0, 4, 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 45, 0, 0, 0, 0, 0, 0, 0, 60, 18, 18, 18, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 30, 0, 0, 0, 0, 30, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 30, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 60, 5, 5, 5, 5, 4, 4, 4, 4, 1, 0, 0, 18, 18, 71, 18, 18, 18, 71, 18, 18, 18, 0, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 45, 0, 0, 0, 0, 0, 0, 0, 60, 18, 18, 18, 18, 18, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 30, 0, 0, 30, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 30, 30, 0, 30, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 60, 60, 19, 19, 19, 19, 4, 4, 4, 4, 4, 0, 0, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 0, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 0, 0, 0, 0, 0, 0, 0, 60, 18, 18, 18, 18, 18, 18, 18, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 30, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 60, 60, 60, 19, 19, 19, 19, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 18, 18, 18, 18, 18, 18, 18, 18, 18, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 30, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 19, 19, 19, 19, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 18, 0, 0, 0, 0, 18, 18, 18, 18, 18, 18, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 46, 46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 16, 16, 16, 16, 0, 0, 16, 16, 16, 16, 16, 16, 0, 0, 30, 30, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 19, 19, 19, 19, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 18, 0, 0, 0, 0, 0, 18, 18, 18, 18, 18, 18, 18, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 46, 46, 46, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 18, 18, 18, 18, 18, 71, 71, 18, 18, 18, 18, 18, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 19, 19, 19, 19, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 60, 0, 0, 0, 0, 0, 0, 0, 18, 18, 18, 18, 18, 18, 18, 18, 60, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 46, 46, 46, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 19, 19, 19, 19, 4, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 19, 19, 19, 19, 4, 4, 4, 4, 4, 4, 4, 4, 4, 71, 71, 4, 4, 4, 4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 71, 71, 4, 4, 4, 4, 4, 4, 4, 4, 4, 71, 71, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 71, 4, 71, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
         "height":20,
         "id":1,
         "name":"ground",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":200,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":7,
         "name":"endPoint",
         "objects":[
                {
                 "gid":90,
                 "height":100,
                 "id":107,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":70,
                 "x":4352,
                 "y":512
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":5,
         "name":"speedPowerUp",
         "objects":[
                {
                 "gid":51,
                 "height":64,
                 "id":94,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":6720,
                 "y":1088
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":6,
         "name":"sizePowerUp",
         "objects":[
                {
                 "gid":53,
                 "height":64,
                 "id":95,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":4608,
                 "y":704
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":4,
         "name":"crystals",
         "objects":[
                {
                 "gid":50,
                 "height":64,
                 "id":22,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":448,
                 "y":896
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":30,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":576,
                 "y":896
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":38,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":2432,
                 "y":896
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":39,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":2560,
                 "y":896
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":40,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":2688,
                 "y":896
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":41,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":2816,
                 "y":896
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":42,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":4032,
                 "y":1152
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":43,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":4416,
                 "y":1152
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":44,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":6784,
                 "y":512
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":45,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":7552,
                 "y":1024
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":46,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":7808,
                 "y":1024
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":47,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":7680,
                 "y":1024
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":48,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":7936,
                 "y":1024
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":49,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":8064,
                 "y":1024
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":50,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":4544,
                 "y":1152
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":52,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":5184,
                 "y":1152
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":53,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":5312,
                 "y":1152
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":54,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":5760,
                 "y":1152
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":55,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":5888,
                 "y":1152
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":56,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":8960,
                 "y":704
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":57,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":9536,
                 "y":640
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":58,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":10368,
                 "y":896
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":59,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":10880,
                 "y":896
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":60,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":11008,
                 "y":896
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":61,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":11776,
                 "y":256
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":62,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":11648,
                 "y":256
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":63,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":11520,
                 "y":256
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":64,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":11392,
                 "y":256
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":65,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":9024,
                 "y":256
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":66,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":9152,
                 "y":256
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":67,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":9664,
                 "y":256
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":68,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":9792,
                 "y":256
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":69,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":10048,
                 "y":256
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":70,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":10176,
                 "y":256
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":71,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":10496,
                 "y":256
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":72,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":10624,
                 "y":256
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":73,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":8320,
                 "y":256
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":74,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":8256,
                 "y":256
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":75,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":7936,
                 "y":256
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":76,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":7808,
                 "y":256
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":77,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":7424,
                 "y":256
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":78,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":7168,
                 "y":256
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":79,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":7296,
                 "y":256
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":80,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":6720,
                 "y":256
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":81,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":6592,
                 "y":256
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":82,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":6464,
                 "y":256
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":83,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":6016,
                 "y":512
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":84,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":5568,
                 "y":512
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":85,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":5248,
                 "y":512
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":87,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":4608,
                 "y":512
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":108,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":704,
                 "y":896
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":110,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":4992,
                 "y":512
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":111,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":4480,
                 "y":512
                }, 
                {
                 "gid":50,
                 "height":64,
                 "id":112,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":3712,
                 "y":1152
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }],
 "nextlayerid":8,
 "nextobjectid":116,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.2.5",
 "tileheight":64,
 "tilesets":[
        {
         "columns":14,
         "firstgid":1,
         "image":"..\/tilesets\/platformPack_tilesheet.png",
         "imageheight":448,
         "imagewidth":896,
         "margin":0,
         "name":"tileset",
         "spacing":0,
         "tilecount":98,
         "tileheight":64,
         "tilewidth":64
        }],
 "tilewidth":64,
 "type":"map",
 "version":1.2,
 "width":200
});