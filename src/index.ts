import fetch from 'node-fetch';
import { Response } from 'node-fetch';

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments1';

const getData = (url: string): Promise<any> => {
  return fetch(url).then((response: Response) => response.json());
};

getData(COMMENTS_URL).then((data) => {});

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
