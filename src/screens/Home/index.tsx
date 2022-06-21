import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FlatList, View } from "react-native";
import { Appointment } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState("");
  const navigation = useNavigation();

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        game: "League of Legends",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 as 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Lendários",
        game: "League of Legends",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 as 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate("AppointmentDetails" as never);
  }

  function handleAppointmentCreate() {
    navigation.navigate("AppointmentCreate" as never);
  }

  return (
    <Background>
      <View>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd onPress={handleAppointmentCreate} />
        </View>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <View style={styles.content}>
          <ListHeader title="Partidas agendadas" subtitle="Total 6" />
          <FlatList
            style={styles.matches}
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Appointment data={item} onPress={handleAppointmentDetails} />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </Background>
  );
}