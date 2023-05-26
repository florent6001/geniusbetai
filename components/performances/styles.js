import { StyleSheet } from "react-native"
import { COLORS, SIZES, SPACES } from "../../constants"

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SPACES.md,
        paddingTop: SPACES.xl
    },
    headerTitle: {
        fontSize: SIZES.xxl,
        color: COLORS.primary,
        fontWeight: 600,
    },
    card: {
        padding: SPACES.md,
        marginLeft: SPACES.md,
        backgroundColor: COLORS.secondary,
        marginTop: SPACES.lg,
        marginRight: SPACES.lg,
        borderRadius: 4,
        paddingLeft: SPACES.lg,
        paddingRight: 40
    },
    cardTitle: {
        fontSize: SIZES.xl,
        marginBottom: SPACES.sm,
        fontWeight: 800, 
        color: COLORS.primary
    },
    cardText: {
        fontSize: SIZES.md,
        color: COLORS.primary
    },
    percentageText: {
        marginTop: SPACES.md,
        fontSize: SIZES.md,
        fontWeight: 'bold',
        color: COLORS.primary
    }
})

export default styles