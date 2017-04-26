import {RkTheme} from 'react-native-ui-kitten';
import {KittenTheme} from './theme';

export let bootstrap = () => {

  RkTheme.setTheme(KittenTheme);

  /*
   RkText types
   */

  RkTheme.setType('RkText', 'basic', {
    text: {
      fontFamily: 'Roboto-Medium',
    }
  });

  RkTheme.setType('RkText', 'light', {
    text: {
      fontFamily: 'Roboto-Light',
    }
  });

  RkTheme.setType('RkText', 'moon', {
    text: {
      fontFamily: 'icomoon',
    }
  });

  /*
   RkButton types
   */

  RkTheme.setType('RkButton', 'square', {
    borderRadius: 3,
    backgroundColor: KittenTheme.colors.back.background,
    container: {
      flexDirection:'column',
      margin: 8
    },
  });

  RkTheme.setType('RkButton', 'shadow', {

  });
};