import * as React from 'react';

interface Props {
  member: {
    id: number;
    login: string;
    avatar_url: string;
  }
}

export const MemberRow:React.FC<Props> = (props) => {
  return (
    <tr>
      <td>
        <img src={props.member.avatar_url} alt=""/>
      </td>
      <td>
        <span>{props.member.id}</span>
      </td>
      <td>
        <span>{props.member.login}</span>
      </td>
    </tr>
  )
}