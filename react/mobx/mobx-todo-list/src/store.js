import { makeAutoObservable } from 'mobx';  // 可以被观察

class AppStore {
  constructor() {
    makeAutoObservable(this)
  }
  todos = [
    { id: 0, title: "todo标题", done: false },
    { id: 1, title: "已经完成todo的标题", done: false }
  ]

  changeFinished(id) {
    const list = this.todos.filter((item, index) => item.id === id);
    list[0].done = !list[0].done
  }
}

export default new AppStore()