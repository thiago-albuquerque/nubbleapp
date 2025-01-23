import {Post} from './Post/types';
import {postListMock} from './postListMock';

async function getList(): Promise<Post[]> {
  // TODO: Simular delay na api
  return postListMock;
}

export const postApi = {
  getList,
};
