import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  guildIconContainer: {
    width: 64,
    height: 68,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
  },
  category: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13,
    marginRight: 24,
  },
  body: {
    justifyContent: 'center',
  },
  gameName: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13,
    marginVertical: 4,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playersInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  date: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
    fontSize: 13,
    marginLeft: 7,
  },
  player: {
    fontFamily: theme.fonts.text500,
    fontSize: 13,
    marginLeft: 7,
    marginRight: 24,
  }
});
