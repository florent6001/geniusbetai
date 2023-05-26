import { Stack } from 'expo-router'
import { SafeAreaView, RefreshControl, ScrollView } from "react-native"
import PredictionsList from '../components/predictions/list';
import LastPerformances from '../components/performances/'
import { COLORS } from '../constants/'
import { useCallback, useState } from 'react';
import useFetch from '../utilities/useFetch';

const Home = () => {

    const [refreshing, setRefreshing] = useState(false)
    const { data, loading, fetchData } = useFetch()

    const OnRefresh = useCallback(() => {
        fetchData()
    })

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.softDark, minHeight: '100%' }}>
            <ScrollView refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={OnRefresh} /> }>
                <Stack.Screen options={{
                    headerShown: false,
                }} />
                <LastPerformances />
                <PredictionsList />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;
