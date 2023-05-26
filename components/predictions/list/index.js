import { ScrollView, View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./styles";
import { useRouter } from "expo-router";
import useFetch from "../../../utilities/useFetch";

const renderSwitch = (item) => {
    switch (item.prediction) {
        case "1": 
            return item.home_team
        case "1X":
            return item.home_team + ' ou nul';
        case "2": 
            return item.away_team
        case "2X":
            return item.away_team + ' ou nul';
        default: 
            return item.prediction
    }
}

const PredictionsList = () => {

    const router = useRouter()
    const {data, loading, fetchData} = useFetch('predictions')

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Match à venir</Text>
            </View>
            {loading ? <ActivityIndicator size="large" /> :
                <>
                    {data?.map(item => {
                        return (
                            <TouchableOpacity onPress={() => {router.push(`/predictions/details/${item.id}`)}} style={styles.card}>
                                <View style={styles.flex}>
                                    <Text style={styles.teamText}>{item.home_team} - {item.away_team}</Text>
                                    <Text style={styles.predictText}>
                                        Prédiction: {renderSwitch(item)}
                                    </Text>
                                </View>
                                <View style={styles.prediction}>

                                    <Text style={styles.predictText}>
                                        Côte de la prédiction : {(item.odds[item.prediction] ? item.odds[item.prediction].toFixed(2) : 'Indisponible')}
                                    </Text>
                                    <Text style={styles.predictText}>
                                        {item.start_date}
                                        {/* Probabilité : {(item.probabilities[item.prediction] * 100).toFixed(0)}% */}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </>
            }
        </ScrollView>
    )
}

export default PredictionsList;
