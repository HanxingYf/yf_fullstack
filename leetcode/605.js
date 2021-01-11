let flowerbed = [1,0,0,0,1], n = 1;
for (let i = 0; i < flowerbed.length && n > 0;) {
  if (flowerbed[i] === 1) {
    i += 2;
  } else if (flowerbed[i + 1] === 0 || i === flowerbed.length - 1) {
    n--;
    i += 2;
  }
  else {
    i += 3;
  }
}