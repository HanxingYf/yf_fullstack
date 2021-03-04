import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
const Home = () => {
  return(
    <>
      <div>我是首页</div>
      <div>
        <Link href="/xiaojiejie?name=波多野结衣"><a>选波多野结衣</a></Link><br/>
        <Link href="/xiaojiejie?name=苍井空"><a>选苍井空</a></Link>
      </div>
    </>
  )

}
export default Home