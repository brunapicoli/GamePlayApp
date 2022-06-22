import { View } from 'react-native';
import { styles } from './styles';

type Props = {
  length: string;
}

export function ListDivider({ length }: Props) {

  return (
    <View style={[styles.container, {width: length}]}>

    </View>
  );
}
