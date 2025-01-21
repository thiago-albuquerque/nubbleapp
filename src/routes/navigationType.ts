import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppStackParamList} from './AppStack';
import {AppBottomTabParamList} from './AppTabNavigator';
import {AuthStackParamList} from './AuthStack';

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

export type AppTabScreenProps<RouteName extends keyof AppBottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<AppBottomTabParamList, RouteName>,
    NativeStackScreenProps<AppStackParamList, 'AppTabNavigator'>
  >;
