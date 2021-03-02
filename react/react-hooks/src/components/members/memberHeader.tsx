// members 页面的相关组件都放置在members 文件夹下， 有利于管理
import * as React from 'react';

export const MemberHeader: React.FC<{}> = () => {
  return (
    <tr>
      <th>Avatar</th>
      <th>Id</th>
      <th>Name</th>
    </tr>
  )
}