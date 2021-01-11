# 字节h5面试题 Drag Drop
良好的用户体验
1. 基础扎实 细节 能力增长梯度
2. 比较复杂的特效

## guthub 拖拽上传功能
1. 给要拖拽的元素，加 draggabe 属性
2. 拖拽元素在上空的感觉
3. drag 有三个事件
  JS 在前端是基于事件的的语言，event 机制 
  - dragstart
  - drag
  - dragend

  drop 异步
  - dragenter 开始进入 classList.add
  - dragover   
  - leave classList.remove

  drap + drap 良好用户真体验模拟的API 比较复杂
  draggable  = true 
  dragstart  drag dragend
  dragenter dragover dragleave + drop
  阻止浏览器默认行为， evnet.preventDefault()
  oForm submit


作业：完成拖回去