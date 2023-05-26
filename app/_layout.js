import { Stack } from "expo-router"

export const unstable_settings = {
    initialRouteName: 'index'
  }
  
export default function Layout() {
    return (
        <Stack initialRouteName="home">
            <Stack.Screen name="home" options={{ title: 'Liste des prédictions' }} />
            <Stack.Screen name="index" options={{ href: null }} />
            <Stack.Screen name="predictions/details/[id]" options={{ href: null }} />
        </Stack>
    )
}
