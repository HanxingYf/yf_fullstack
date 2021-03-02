// 数据是要类型化的
//  拿这数据做一大波操作， 为了不掉链子

interface User {  // 接口
  name: string
  age: number
  occupation: string
};

interface Admin {
  name: string
  age: number
  role: string
}

export type Person = User | Admin;  // 包含普通用户或管理员

// 用户表里有的用户是 role 管理员
export const users: Person[] = [  // ts 类型约束 每个元素满足
  {
    name: '黄志乾',
    age: 18,
    occupation: "Chimney sweep",
  },
  {
    name: "yf",
    age: 18,
    occupation: "Astronaut"
  },
  {
    name: 'xr',
    age: 20,
    role: 'Administrator'
  }
];

export function logPerson(user: Person) {
  console.log(` - ${user.name}, ${user.age}`);
  let additionalInformation: string;
  // 类型推导
  if ("role" in user) {
    additionalInformation = (<Admin>user).role;
  } else {
    additionalInformation = (<User>user).occupation;
  }
  console.log(`${user.name} ${user.age} ${additionalInformation}`)
}

users.forEach(logPerson)