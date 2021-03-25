
import { Request, Response } from 'express' // @types/express
import { createPost } from './post.service';


export const store = async (request: Request, response: Response) => {
  console.log(request.body, '/////');
  const { title, author } = request.body;
  // console.log(title, author);
  // 存 -> 数据存储服务 service

  const data = await createPost({ title })
  response.status(201).send('保存成功')
}