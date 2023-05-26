import { StyleSheet } from 'react-native';
import { COLORS, SIZES, SPACES } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SPACES.md
    }, 
    teamTitle: {
        fontSize: SIZES.lg,
        textAlign: 'center',
        color: COLORS.primary
    },
    sectionTitle: {
        fontSize: SIZES.lg,
        color: COLORS.primary,
        fontWeight: 700,
        paddingTop: SPACES.xl,
        paddingBottom: SPACES.md
    },
    isExpired: {
        paddingTop: SPACES.xs,
        fontSize: SIZES.md,
        color: COLORS.primary,
        textAlign: 'center'
    },
    result: {
        margin: SPACES.md,
        fontSize: SIZES.xl,
        textAlign: 'center', 
        color: COLORS.primary
    },
    finished: {
        fontSize: SIZES.md,
        textAlign: 'center', 
        color: COLORS.primary
    },
    matchResult: {
        color: COLORS.primary,
        paddingVertical: 10,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        borderBottomWidth: 1,
        borderColor: '#FFF',
    },
    encounters: {
        color: COLORS.primary,
    },
    badge: {
        color: COLORS.primary,
        fontSize: SIZES.sm,
        paddingHorizontal: 10,
        paddingVertical: 5,
    }, 
    predictedResult: {
        color: COLORS.primary,
        fontSize: SIZES.lg,
        marginTop: SPACES.xl,
    }
})

export default styles;