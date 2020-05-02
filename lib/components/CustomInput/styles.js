import { StyleSheet } from 'react-native';

export default (
  fontSize,
  error,
  errorMessage,
  icon,
  disabled,
  showBorder,
  multiline,
  themeColors
) => (
    StyleSheet.create({
      container: {
        borderBottomWidth: showBorder ? 1 : 0,
        borderBottomColor: themeColors.textInputBorderColor,
        opacity: disabled ? 0.7 : 1,
      },
      inputStyle: {
        height: multiline ? 100 : 50,
        borderWidth: 0,
        textAlignVertical: 'center',
        fontSize,
        paddingRight: icon ? 25 : 0,
        // marginTop: (Platform.OS === 'ios' && multiline) ? 15 : 5,
      },
      iconStyle: {
        position: 'absolute',
        right: 10,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
      },
      error: {
        marginTop: 5,
        color: themeColors.error,
      }
    })
  );
