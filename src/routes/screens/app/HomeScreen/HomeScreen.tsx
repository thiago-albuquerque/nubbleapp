import React, {useEffect, useState} from 'react';

import {Post, postService} from '@domain';

import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    postService.getList().then(list => setPostList(list));
  }, []);

  return (
    <Screen>
      {postList.map(post => (
        <Text key={post.text} mb="s12">
          {post.text}
        </Text>
      ))}
    </Screen>
  );
}
