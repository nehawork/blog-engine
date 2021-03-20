import axios from 'axios';
import useSWR, { responseInterface } from 'swr';
import { User, Post, Album } from './scheme';

const apiEndpoint = 'https://jsonplaceholder.typicode.com/';


const fetcher = url => axios.get(url).then(res => res.data);

export const usersList = (): responseInterface<User[], Error> => {
  return useSWR<User[], Error>(apiEndpoint + 'users', fetcher);
};

export const postsList = (): responseInterface<Post[], Error> => {
  return useSWR<Post[], Error>(apiEndpoint + 'posts', fetcher);
};

export const albumsList = (): responseInterface<Album[], Error> => {
  return useSWR<Album[], Error>(apiEndpoint + 'albums', fetcher);
};