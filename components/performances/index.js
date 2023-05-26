import { View, Text, FlatList, ActivityIndicator } from "react-native";
// import { performancesData } from "../../data";
import styles from "./styles";
import useFetch from "../../utilities/useFetch";

const pastPerformances = () => {

    const { data, loading, fetchData } = useFetch(`performance-stats`);
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.headerTitle}>Performances précédentes</Text>
            </View>
            {loading ? <ActivityIndicator size="large" /> :
                <>
                    {data !== null &&
                        <FlatList 
                            horizontal
                            data={Object.values(data).reverse()}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => {

                                const days = ['Hier', 7, 30, 14];

                                return (
                                    <View style={styles.card}>
                                        <Text style={styles.cardTitle}>
                                            {days[index].length ? `${days[index]} ` : `${days[index]} derniers jours`}
                                        </Text>
                                        <View>
                                            <Text style={styles.cardText}>
                                                Gagné : {item.won}
                                            </Text>
                                            <Text style={styles.cardText}>
                                                Perdu : {item.lost}
                                            </Text>
                                            <Text style={styles.cardText}>
                                                Total : {item.total}
                                            </Text>
                                            <Text style={styles.percentageText}>
                                                Taux de réussite : {(item.won / item.total * 100).toFixed(2)}%
                                            </Text>
                                        </View>
                                    </View>
                                )
                            }}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    }
                </>
            }
        </View>
    )
}

export default pastPerformances