import { SafeAreaView, ScrollView } from "react-native";
import { COLORS, SPACES } from "../../../constants";
import { Stack, useRouter, useSearchParams } from "expo-router";
import BackIcon from "../../../components/BackIcon";
import { default as DetailsPage } from "../../../components/predictions/details/";

const Details = () => {

    const router = useRouter()
    const params = useSearchParams()

    return (
        <SafeAreaView style={{ paddingVertical: SPACES.md, backgroundColor: COLORS.softDark, minHeight: '100%'}}>
            <ScrollView>
                <Stack.Screen options={{
                    headerLeft: () => {
                        return (
                            <BackIcon onPress={() => router.back()} />
                        )
                    },
                    headerStyle: {
                        backgroundColor: COLORS.softDark,
                    },
                    title: 'Détails du match',
                    headerTitleStyle: { color: '#fff', paddingTop: 5 },
                    headerShadowVisible: false
                }} />
                <DetailsPage />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Details;