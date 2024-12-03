import { View, Text, Image } from 'react-native';
import { styles  } from './styles';
import IllustrationImg from '../../assets/Ilustration.png';
//import logoSmall from '../../assets/LogoSmall.png';
import { ButtonWhite } from '../../components/buttonWhite';
import { Background } from '../../components/background';
import { useNavigation } from '@react-navigation/native';

export  function Home() {

    const navigation = useNavigation<any>();
    
    const handleNavigate = () => {
        navigation.navigate('SignIn');
    }

    return (
        <Background>
            <View style={styles.container}>    
            
            <Image
                source={require('../../assets/LogoSmall.png')}
                style={styles.imageLogo}
                resizeMode="stretch"
            />
                <Text style={styles.title}>
                    Marketplace  {'\n'} Inteligente para você  {'\n'}
                </Text>
            <Image
                source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />

            <View style={styles.content}>
            
                <Text style={styles.subtitle}>
                Sua solução para vender seus produtos {'\n'}
                </Text>
            
                <ButtonWhite
                    title="Continuar" onPress={handleNavigate}
                />
                                        
            </View>
            </View>
        </Background>
    );
}