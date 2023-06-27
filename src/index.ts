import fetch from 'node-fetch';
import { Response } from 'node-fetch';

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = (url: string): Promise<any> => {
  return fetch(url).then((response: Response) => response.json());
};

// функция проверяет что данные получены
function isDataNotEmpty(obj: object): obj is Comment[] {
  return Object.keys(obj).length > 0;
}

getData(COMMENTS_URL).then((data: object) => {});

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
