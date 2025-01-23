import {Post} from '@domain';

import {postListMock} from './postListMock';

async function getList(): Promise<Post[]> {
  // TODO: Simular delay na api
  await new Promise(resolve => setTimeout(() => resolve(''), 2000));
  return postListMock;
}

export const postApi = {
  getList,
};
