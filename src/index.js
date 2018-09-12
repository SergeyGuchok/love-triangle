/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  if(preferences.length==0) return 0;
  let count = 0;
  let l;
  let k;
  let n;
  for(let i = 0; i<preferences.length; i++){
  	k = preferences[i];
  	l = preferences[k-1];
  	n = preferences[l-1];
  	if(n==i+1){
  		count++;
    }
  }
  
  return Math.floor(count/3);
};
