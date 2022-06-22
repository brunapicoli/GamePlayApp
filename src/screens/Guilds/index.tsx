import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { Background } from "../../components/Background";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

type Props = {
  handleGuildSelected: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelected }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      game: 'League of Legends',
      icon: 'image.png',
      owner: true,
    },
    {
      id: '2',
      name: 'Lendários',
      game: 'League of Legends',
      icon: null,
      owner: true,
    },
  ];

  return (
    <Background>
      <View style={styles.container}>
        <FlatList
          data={guilds}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Guild data={item} onPress={() => handleGuildSelected(item)} />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider length='74%' />}
          contentContainerStyle={{ paddingBottom: 68 }}
          style={styles.guilds}
        />
      </View>
    </Background>
  );
}
