import React from 'react';
import {Box} from '../Box/Box';
import {Icon} from '../Icons/Icon';
import {Text} from '../Text/Text';
import {KeyboardAvoidingView, Platform, Pressable} from 'react-native';
import {
  ScrollViewContainer,
  ViewContainer,
} from './component/ScrollViewContainer';
import {useAppTheme} from '../../hooks/useAppTheme';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
}: ScreenProps) {
  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  const {colors} = useAppTheme();

  return (
    <KeyboardAvoidingView
      style={{height: '100%'}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box paddingHorizontal="s24" pb="s24">
          {canGoBack && (
            <Pressable>
              <Box flexDirection="row" alignItems="center" mt="s12" gap="s8">
                <Icon name="arrowLeft" color="primary" />
                <Text preset="paragraphMedium" semiBold>
                  Voltar
                </Text>
              </Box>
            </Pressable>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
