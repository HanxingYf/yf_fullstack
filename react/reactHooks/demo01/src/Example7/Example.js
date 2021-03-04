import React , {useState,useMemo} from 'react';

function Example7(){
    const [xiaohong , setXiaohong] = useState('小红待客状态') 
    const [zhiling , setZhiling] = useState('志玲待客状态')
    return (
        <>
            <button onClick={()=>{setXiaohong(new Date().getTime())}}>小红</button>
            <button onClick={()=>{setZhiling(new Date().getTime()+',志玲向我们走来了')}}>志玲</button>
            <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
        </>
    )
}
function ChildComponent({ name, Children }) {
  function changeXiaohong(name) {
    console.log('她来了，她来了。小红向我们走来了')
    return name + ',小红向我们走来了'
  }
  const actionXiaohong = useMemo(()=>changeXiaohong(name),[name])
  return (
    <>
      <div>{actionXiaohong}</div>
      <div>{Children}</div>
    </>
  )
}

export default Example7