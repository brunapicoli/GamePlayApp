import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  select: {
    width: '100%',
    height: 68,
    flexDirection: 'row',
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 34,
    alignItems: 'center',
    paddingRight: 35,
    overflow: 'hidden',
  },
  image: {
    width: 66,
    height: 66,
    backgroundColor: theme.colors.secondary40,
    borderColor: theme.colors.secondary50,
    borderRightWidth: 1,
    borderRadius: 33,
  },
  selectBody: {
    flex: 1,
    alignItems: 'center'
  },
  field: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
  },
  caracteresLimit: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight,
  },
  footer: {
    marginVertical: 48,
  }
});
