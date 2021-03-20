
let defalutState = {
  bannerList: []
}

// reduce
export default (state = defalutState, action) => {
  console.log('???',action);
  switch (action.type) {
    case "CHANGE_BANNER":
      return {
        ...state,
        bannerList:action.data
      }
      
    default:
      return state
  }
}