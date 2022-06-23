import { FlatList, View } from "react-native";
import { styles } from "./styles";
import { Background } from "../../components/Background";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { useEffect, useState } from "react";
import { Load } from "../../components/Load";
import { api } from "../../services/api";

type Props = {
  handleGuildSelected: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelected }: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds');
    setGuilds(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchGuilds();
  }, [])

  return (
    <Background>
      <View style={styles.container}>
        {
          loading ? <Load /> :
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
        }
      </View>
    </Background>
  );
}
