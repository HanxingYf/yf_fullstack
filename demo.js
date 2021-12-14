function pointToSegmentDist(p, a, b) {
    var AB = [b[0] - a[0], b[1] - a[1]]
    var AP = [p[0] - a[0], p[1] - a[1]]
  
    var AB_AP = AB[0] * AP[0] + AB[1] * AP[1]
    var distAB2 = AB[0] * AB[0] + AB[1] * AB[1]
  
    var D = [a[0], a[1]]
    if (distAB2 != 0) {
      var t = AB_AP / distAB2
  
      if (t > 1) {
        D = [b[0], b[1]]
      } else if (t > 0) {
        D = [a[0] + AB[0] * t, a[1] + AB[1] * t]
      } else {
        D = [a[0], a[1]]
      }
    }
  
    var AD = [p[0] - a[0], p[1] - a[1]]
  
    return Math.sqrt(AD[0] * AD[0] + AD[1] * AD[1])
  }


  let p = [3,3]
  let a = [0,0]
  let b = [2,0]

  console.log(pointToSegmentDist(p, a, b));
  console.log(Math.sqrt(10));