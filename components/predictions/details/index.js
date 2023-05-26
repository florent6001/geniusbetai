import { Text, View, ActivityIndicator } from "react-native"
import moment from "moment"
import 'moment/locale/fr'
import styles from "./styles"
import { useSearchParams } from "expo-router"
import useFetch from "../../../utilities/useFetch";

const renderSwitch = (item) => {
    switch (item.prediction_per_market.classic.prediction) {
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

const Details = () => {
    
    const params = useSearchParams()
    const { data, loading, fetchData } = useFetch(`predictions/${params.id}`)

    return (
        <>
            {loading || data == undefined ? <ActivityIndicator size="large" /> :
                <View style={styles.container}>
                    <View>
                        <Text style={styles.teamTitle}>
                            {data.home_team}&nbsp;-&nbsp;{data.away_team}
                        </Text>

                        {data.is_expired ?(
                            <>
                                <Text style={styles.result}>
                                    {data.result}
                                </Text>
                                <Text style={styles.finished}>
                                    Match terminé
                                </Text>
                            </>
                        ) : (
                            <Text style={styles.isExpired}>
                                Début du match {moment(data.start_date).locale('fr').fromNow()}
                            </Text>
                        )}

                        
                        <Text style={styles.predictedResult}>
                            Prédiction: {renderSwitch(data)}
                        </Text>

                    </View>

                    <View>
                        <Text style={styles.sectionTitle}>
                            Derniers match à domicile pour {data.home_team}
                        </Text>
                        {homeTeamMatches.encounters.map(match => (
                            <TeamResult key={match.start_date} match={match} />
                        ))}
                    </View>

                    <Text style={styles.sectionTitle}>
                        Derniers match en extérieur pour {data.away_team}
                    </Text>
                    {awayTeamMatches.encounters.map(match => (
                        <TeamResult key={match.start_date} match={match} />
                    ))}
                </View>
            }
        </>
    )
}

const TeamResult = ({ match }) => {
    return (
        <View style={styles.matchResult}>
            <Text style={styles.encounters}>{match.played_against}</Text>
            <Text style={[styles.badge, styles.encounters, {
                backgroundColor: match.result == 'W' ? 'green' 
                : match.result == 'L' ? 
                    'red' : 
                    'black'
                }]}>
                {match.fulltime_result}
            </Text>
        </View>
    )
}
export default Details