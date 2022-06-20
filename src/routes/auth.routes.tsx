import { createStackNavigator } from "@react-navigation/stack";
import { Background } from "../components/Background";
import { theme } from "../global/styles/theme";
import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardOverlayEnabled: true,
        cardOverlay: () => <Background />,
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
    >
      <Screen name="Sign In" component={SignIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
