import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'

function Recommend(props) {
  console.log(props, '----');
  useEffect(()=>{
    props.getBannerDataDispatch();
  },[])
  return (
    <div>
      Recommend
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    bannerList: state.recommend.bannerList
  }
}

const mapDisPatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      // store reducer 得到消息
      dispatch(actionTypes.getBannerList())
    }
  }
}

export default connect(mapStateToProps, mapDisPatchToProps)(Recommend);