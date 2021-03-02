// 山月老师的面试，每天刷几道
// interface 接口 type 自定义类型 ts 的基础
export type User = {
  name: string
  age: number
  occupation: string
};   // 自定义类型

export const users: User[] = [  // ts 类型约束 每个元素满足
  {
    name: '黄志乾',
    age: 18,
    occupation: "Chimney sweep"
  },
  {
    name: "yf",
    age: 18,
    occupation: "Astronaut"
  }
];

export function logPerson(user: User) {
  console.log(`- ${user.name}, ${user.age} `);
}

console.log("Users:");
users.forEach(logPerson);

