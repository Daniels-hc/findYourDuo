import { ImageBackground } from 'react-native';

import backgorundImg from '../../assets/background-galaxy.png';

import { styles } from './styles';

interface Props {
    children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground 
    source={backgorundImg} 
    defaultSource={backgorundImg} 
    style={styles.container}>
        {children}
    </ImageBackground>
  );
}