
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix===undefined) return [];
  return matrix.reduce((arr, a, i) => {
    return i%2==0 ? arr.concat(a) : arr.concat(a.reverse());
  }, []);
}
