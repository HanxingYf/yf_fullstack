import { PostModel } from './post.model'

/**
 * 新增文章
 */
export const createPost = (post: PostModel) => {
  const statement = `
  INSERT INTO post 
  SET ? 
  `
}