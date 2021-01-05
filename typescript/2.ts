const getUserInfoWithTs = (user:{name:string, age: number}):string => `name:${user.name} age:${user.age}`

console.log(getUserInfoWithTs({name: 'kaola', age:21}));

