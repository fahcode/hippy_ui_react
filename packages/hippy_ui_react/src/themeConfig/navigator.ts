import { ThemeConfigNavigator } from './types/navigator';
import { STATUSBAR_HEIGHT } from '../utils/Dimensions';
import { ThemeMode } from '../themeConfig';

/**
 * Navigator 组件
 */
export const navigatorConfig: ThemeConfigNavigator = {
  navigatorWrapStyle: {},
  navigatorStatusBarStyle: {
    height: STATUSBAR_HEIGHT(),
  },
  navigatorStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 48,
  },
  navigatorBackPropsFn: (params) => {
    const uriWhite =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUdwTP///////////////////////////////////////////xR6XWcAAAALdFJOUwDdIIFfMO9IoxBvT6WWbwAAAKhJREFUOMvN07EOAUEUheEba4NOdLINtUYp2Ual0dB4A5VGr9HqPIJaJyNWnJez+vNLJIqd8p58xZw7E9GQ07uOfDDW0M5bhe4AVAFQH8DtDODkwFp6unm+k44u2HwBUxcspOTmbQFY/gpKABmBiaDvg3QJEAMbdOvC/bZLItmfyTagrccqoF9/+069wnnA0l82yAuo+PMSEz12JhWRRD+qgj8420fDzxvSrEzZSe8rLgAAAABJRU5ErkJggg==';
    const uriBlack =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTBERERERERAQEBERERERERAQEBAQEBAQEBAQEBEREfZ+ZJQAAAAKdFJOUwCB5SCizmIQNFBZusZZAAAA+UlEQVRIx+2WsQqCUBSGjxjW6NLSJAglThG0C229gOAUtTU11F4+QfQGWVacp8zr3f1/4rZ55o9P7/X/D4r089v44xWGFqpXxIxS1QhBpao+CJG+AXRrGM26mcAw1bwb2hsoJkQ1EE0MlHczXis6OBI9GVHGiMSR6A5EawOF3czAlehEiIaFI5HfijawRqov5mhAJOZpU1Q20yNY2wLH3wYAFcl+uESI41VnIcKUMG8Fb8pj7tyqQnEQcbtQkCqgVFtG1a5LqCqJCoufElvFpjhnVDWlihkVTN+SUbV1h6qjUUVMkD9CdAJCJn0zCHk4681cdv0vzR/nC3vQowVgv1ZeAAAAAElFTkSuQmCC';
    return {
      accessible: true,
      accessibilityLabel: '返回 按钮',
      source: { uri: params.consumerValue.theme === ThemeMode.dark ? uriWhite : uriBlack },
      style: {
        width: 24,
        height: 24,
        backgroundColor: 'transparent',
      },
    };
  },
  navigatorTitlePropsFn: () => {
    return {
      numberOfLines: 1,
      style: {
        flex: 1,
        flexShrink: 1,
        marginHorizontal: 16,
        fontSize: 17,
        fontWeight: '500',
      },
    };
  },
};
