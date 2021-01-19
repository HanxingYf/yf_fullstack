// 10000 条数据？  Array.from  内存
  // 4yu  10000 originNews 200个数组 [[50],[50]]
  let page = 0;  // 页码
  let pageNum = Math.ceil(window.innerHeight / 50);
  const chunk = (arr, size) => Array.from({
    length: Math.ceil(arr.length / size)
  }, (v, i) => 
    arr.slice(i * size, i * size + size)
  )
    
  const originNews = Array.from({
    length: 1000
  }, (v, k) => ({
    content: `新闻${k}`
  }))
  let news = chunk(originNews, pageNum) // 当前页需要的数据
  // console.log(news)

  const element = document.querySelector('.news'); // 代孕的
  const loadObserver = new IntersectionObserver((entries) => {
    // if ()
    // console.log(entries);
    if (entries[0].intersectionRatio <= 0) {
      return;
    }
    const hasPrePage = page != 0; // page 当前页面, 
    const hasNextPage = page != news.length - 1 // 最后一页？ 
    const now = news[page]
    const pre = hasPrePage ? news[page - 1]:[];
    const next = hasNextPage ? news[page + 1]: [];

    render(pre.length, [...pre, ...now, ...next]);
    page = entries[0].target.className == 'news-footer' || page == 0
      ? (hasNextPage? page + 1: page)
      : (hasPrePage? page - 1: page)
    
  }, {
    threshold:[1]
  }) // 监听

  loadObserver.observe(document.querySelector('.news-header'));
  loadObserver.observe(document.querySelector('.news-footer'));
 // 建议函数内的代码不要超过10行 封装
  function render(last, data) {
    element.innerHTML = '';
    data.forEach((i, v) => element.innerHTML += v == last 
      ? `<div id="news-href">${i.content}</div>`
      :`<div>${i.content}</div>`
    )
    window.location.href = '#news-href';
  }
