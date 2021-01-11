var findMinArrowShots = function (points) {
  let cnt = 1;
  points.sort(function (a, b) {
    return a[1] - b[1];
  });
  let f = points[0][1];
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > f) {
      // console.log(i);
      cnt++;
      f = points[i][1];
    }
  }
  return cnt;
};


let points = [[10,16],[2,8],[1,6],[7,12]];
console.log(findMinArrowShots(points));