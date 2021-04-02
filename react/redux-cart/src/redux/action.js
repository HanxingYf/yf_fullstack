import api from '../api';

export const addGoods = (goods) => ({
  type: 'ADD-GOODS',
  payload:{
    goods
  }
})

// 页面上引入action useEffect
export const getGoods = () => {
  
}