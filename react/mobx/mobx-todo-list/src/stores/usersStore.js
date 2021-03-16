import { observable, action } from 'mobx';

class UsersStore{
  @observable inProgress = false;
  @action login(){
    this.inProgress = true
  }
}

export default new UsersStore();