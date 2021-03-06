import { createStackNavigator } from "@react-navigation/stack";
import { Background } from "../components/Background";
import { theme } from "../global/styles/theme";
import { useAuth } from "../hooks/auth";
import { AppointmentCreate } from "../screens/AppointmentCreate";
import { AppointmentDetails } from "../screens/AppointmentDetails";
import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  const { user } = useAuth();

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
      {user.id === undefined && <Screen name="Sign In" component={SignIn} />}
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentDetails" component={AppointmentDetails} />
      <Screen name="AppointmentCreate" component={AppointmentCreate} />
    </Navigator>
  );
}
