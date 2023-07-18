import { log } from 'console';
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

const getData = (url: string): Promise<object> => {
  return fetch(url).then((response: Response) =>
    response.json()
  ) as Promise<object>;
};

// функция проверяет что данные получены
function isDataNotEmpty(obj: object): obj is Comment[] {
  return Object.keys(obj).length > 0;
}

getData(COMMENTS_URL).then((data: object): void => {
  if (isDataNotEmpty(data)) {
    data.forEach((comment: Comment): void => {
      // получение массива ключей объекта Comment
      let keys = Object.keys(comment) as (keyof Comment)[];
      console.log(
        // перебор ключей объекта Comment для склейки ключей и значений объекта в требуемую строку
        keys.reduce(
          (sum: string, key: keyof Comment) =>
            sum + [key, comment[key]].join(': ') + ', ',
          ''
        )
      );
    });
  }
});

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
