import React from 'react';

import {Post} from '@domain';

import {Box, Text} from '@components';

type Props = Pick<Post, 'author' | 'text' | 'commentCount'>;

export function PostBottom({author, text, commentCount}: Props) {
  return (
    <Box>
      <Text preset="paragraphMedium" bold color="backgroundContrast">
        {author.userName}
      </Text>
      {text && (
        <>
          <Text preset="paragraphMedium" color="gray1" mb="s8">
            {text}
          </Text>
          <Text preset="paragraphSmall" bold color="primary">
            ver {commentCount} comentário{commentCount > 1 && 's'}
          </Text>
        </>
      )}
    </Box>
  );
}
