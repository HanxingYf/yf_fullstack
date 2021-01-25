function timedCount() {
  for(var i = 0; i < 100000000000; i++) {
    if (i % 100000 === 0) {
      postMessage(i);
    }
  }
}

timedCount();
