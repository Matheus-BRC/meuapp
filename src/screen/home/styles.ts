import { StyleSheet } from 'react-native';
 
import { theme } from '../../global/styles/theme';
 
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',    
  },
  image: {
    width: '100%',
    height: 360,    
  },
  imageLogo: {
   marginTop:20,
   marginBottom:30
  },
  content: {    
    marginTop: -40,    
    paddingHorizontal: 50
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontWeight:'bold',
    fontSize: 40,
    marginBottom: 16,   
    fontFamily: theme.fonts.title700,
    lineHeight: 40
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 20
    ,
    textAlign: 'center',
    marginBottom: 64,
    fontFamily: theme.fonts.title500,
    lineHeight: 25
  }
});