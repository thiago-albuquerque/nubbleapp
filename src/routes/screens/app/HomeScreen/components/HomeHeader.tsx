import React from 'react';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SimpleLogo} from 'src/assets/brand';

import {Box, BoxProps, Icon} from '@components';

export function HomeHeader() {
  const {top} = useSafeAreaInsets();
  return (
    <Box {...$headerWrapper} style={{marginTop: top}}>
      {/* <Box backgroundColor="grayBlack" width={70} height={16} /> */}
      <SimpleLogo width={70} />
      <Box flexDirection="row" gap="s24">
        <Icon name="search" color="backgroundContrast" />
        <Icon name="bellOn" color="backgroundContrast" />
        <Icon name="chatOn" color="backgroundContrast" />
      </Box>
    </Box>
  );
}

const $headerWrapper: BoxProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 's24',
};
