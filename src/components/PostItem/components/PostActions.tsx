import React from 'react';

import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'favoriteCount' | 'commentCount' | 'reactionCount'>;

export function PostActions({
  favoriteCount,
  commentCount,
  reactionCount,
}: Props) {
  function likePost() {
    // TODO: Implement
  }

  function navigateToComments() {
    // TODO: Implement
  }

  function favoritePost() {
    // TODO: Implement
  }

  return (
    <Box flexDirection="row" gap="s24">
      <Item
        onPress={likePost}
        icon={{default: 'heart', marked: 'heartFill'}}
        marked
        text={favoriteCount}
      />
      <Item
        onPress={navigateToComments}
        icon={{default: 'comment', marked: 'comment'}}
        marked={false}
        text={commentCount}
      />
      <Item
        onPress={favoritePost}
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        text={reactionCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked?: boolean;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
}

function Item({onPress, marked, icon, text}: ItemProps) {
  return (
    <TouchableOpacityBox
      onPress={onPress}
      flexDirection="row"
      alignItems="center"
      gap="s4">
      <Icon
        name={marked ? icon.marked : icon.default}
        color={marked ? 'marked' : undefined}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" bold>
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
