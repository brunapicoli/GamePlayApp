import { TextInput, TextInputProps } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type Props = TextInputProps & {
  placeholder: string;
}

export function SmallInput({ placeholder, ...rest }: Props) {
  return (
    <TextInput
      style={styles.container}
      {...rest}
      keyboardType="numeric"
      placeholder={placeholder}
      placeholderTextColor={theme.colors.highlight}
    />
  );
}
