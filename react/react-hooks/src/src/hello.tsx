// tsx  jsx 组件
// .tsx -> main.ts 加载的路上 
// webpack  index.tsx -> hello.tsx .tsx -> modules -> awesome-typescript-loader
// -> typescript-> tsconfig.json  -> jsx  -> babel-core-> .babelrc -> es5 

import * as React from 'react';
// props react 函数组件有的参数
// react 组件数据  state状态自己的  props 外界给的 
// ts 类型约束 react props 检查
// 静态编译
// ts 容易出问题的地方， 请一定用ts  ts 是js 的超级 
// 传值的时候不按约定来传 代码的严格性 
interface Props { // 父组件和自组件想要做个约束， 一定会传某个props, 类型是什么
    // 好处是， 程序更安全  
    userName: string;
    // 修改这个值
    // ts   @types/React
    // <> 
    // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// ts 加类型
// 约束组件类型的写法 泛型<>
export const HelloComponent: React.FC<Props> = (props) => (
// export const HelloComponent = (props: Props) => (
    <h2>Hello user: {props.userName}</h2>
    // <>
    //     <label>Update name:</label>
    //     <input value={props.userName} onChange={props.onChange} />
    // </>
)
