import { StyleSheet } from "react-native"
import { COLORS, SIZES, SPACES } from "../../../constants"

const styles = StyleSheet.create({
    container: {
        padding: SPACES.md,
    },
    header: {
        paddingTop: SPACES.lg,
        marginBottom: SPACES.lg
    },
    headerTitle: {
        fontSize: SIZES.xxl,
        color: COLORS.primary,
        fontWeight: 600,
    },
    card: {
        width: '100%',
        padding: SPACES.md,
        borderRadius: 4,
        marginVertical: SPACES.xs,
        backgroundColor: COLORS.secondary,
    },
    teamText: {
        color: COLORS.primary,
        fontSize: SIZES.lg
    },
    prediction: {
        paddingTop: SPACES.md
    },
    predictText: { 
        color: COLORS.primary,
        fontSize: SIZES.md
    },
})

export default styles
