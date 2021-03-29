import { connection } from '../app/database/mysql';

/**
 * 创建用户
 */
export const createUser = async (user) => {
  const statement = `
  INSERT INTO user
  SET ?
  `
  const [data] = await connection.promise().query(statement, user);
  return data;
}

export const getUser = (condition: string) => {
  return async (param: string | number) => {
    // console.log(param, '-----');
    const statement = `
      SELECT
        user.id,
        user.name
      FROM
        user
      WHERE
        ${condition} = ?
    `;

    const [data] = await connection.promise().query(statement, param);
    console.log(data, '111');
    return data[0] ? data[0] : null
  }
}

export const getUserByName = getUser('user.name');
export const getUserById = getUser('user.id');
