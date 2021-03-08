// ts props 约束
import * as React from 'react';
import { MemberEntity } from '../../model';
// 组件  
// 传的时候  member  类型MemberEntity
interface Props {
  member: MemberEntity
}
export const MemberRow:React.FC<Props> = ({member}) => {
  return (
    <tr>
      <td>
        <img src={member.avatar_url} className="avatar" />
      </td>
      <td>
        <span>{member.id}</span>
      </td>
      <td>
        <span>{member.login}</span>
      </td>
    </tr>
  )
}
