type IUserInfoFunc=(user:IUser)=>string
interface IUser{
    name:string;
    age:number;
}
const getUserInfoWithType:IUserInfoFunc=(user)=>{
    return `name:${user.name},age:${user.age}`;
}

getUserInfoWithType({name:"koala",age:18})
