import { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  View,
  Platform,
  ScrollView,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView>
        {/* <Background> */}
        <Header title="Agendar partida" />
        <Text
          style={[
            styles.label,
            { marginLeft: 24, marginTop: 32, marginBottom: 18 },
          ]}
        >
          Categoria
        </Text>

        <CategorySelect
          hasCheckBox
          setCategory={setCategory}
          categorySelected={category}
        />

        <View style={styles.form}>
          <RectButton>
            <View style={styles.select}>
              {
                // <View style={styles.image} />
                <GuildIcon />
              }

              <View style={styles.selectBody}>
                <Text style={styles.label}>Selecione um servidor</Text>
              </View>

              <Feather
                name="chevron-right"
                color={theme.colors.heading}
                size={18}
              />
            </View>
          </RectButton>

          <View style={styles.field}>
            <View>
              <Text style={[styles.label, { marginBottom: 12 }]}>
                Dia e mês
              </Text>
              <SmallInput maxLength={4} placeholder="dd/mm" />
            </View>

            <View>
              <Text style={[styles.label, { marginBottom: 12 }]}>Horário</Text>
              <SmallInput maxLength={4} placeholder="hh:mm" />
            </View>
          </View>

          <View style={[styles.field, { marginBottom: 12 }]}>
            <Text style={styles.label}>Descrição</Text>
            <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
          </View>
          <TextArea
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
          />

          <View style={styles.footer}>
            <Button title="Agendar" />
          </View>
        </View>
      </ScrollView>
      {/* </Background> */}
    </KeyboardAvoidingView>
  );
}