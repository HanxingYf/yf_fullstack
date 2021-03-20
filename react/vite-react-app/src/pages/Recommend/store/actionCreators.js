// 与API通信的地方
import {getBannerRequest}from '../../../api/request';

// com useEffect->action ->api ->dispatchEvent(action-type)->reducer->新的值

export const channgeBannerList = (data) => ({
    type: 'CHANGE_BANNER',
    data: data
  })
  
export const getBannerList=()=>{
    return (dispatch)=>{
        getBannerRequest()
            .then(data=>{
                console.log(data,'++++++');
                dispatch(channgeBannerList(data.data.banners))
            })
    }
}
