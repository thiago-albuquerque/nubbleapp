import {IconProps} from '@components';
import {AppBottomTabParamList} from '@routes';

export const mapScreenToProps: Record<
  keyof AppBottomTabParamList,
  {
    label: string;
    icon: {
      focused: IconProps['name'];
      unFocused: IconProps['name'];
    };
  }
> = {
  HomeScreen: {
    label: 'Início',
    icon: {
      focused: 'homeFill',
      unFocused: 'home',
    },
  },
  NewPostScreen: {
    label: 'Novo Post',
    icon: {
      focused: 'newPost',
      unFocused: 'newPost',
    },
  },
  FavoriteScreen: {
    label: 'Favoritos',
    icon: {
      focused: 'bookmarkFill',
      unFocused: 'bookmark',
    },
  },
  MyProfileScreen: {
    label: 'Meu Perfil',
    icon: {
      focused: 'profileFill',
      unFocused: 'profile',
    },
  },
};
