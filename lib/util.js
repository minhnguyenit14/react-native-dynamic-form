import { Platform } from 'react-native';

export const getInputType = (subtype) => {
  switch (subtype) {
    case 'text':
      return 'default';
    case 'tel':
      return 'phone-pad';
    case 'email':
      return 'email-address';
    case 'numeric':
      return Platform.select({
        ios: 'number-pad',
        android: 'numeric'
      })
    default:
      return 'default';
  }
};
