import { Image, TouchableOpacity } from "react-native"
import { COLORS } from "../constants"
const iconUrl = require('../assets/arrow_left.png')

const BackIcon = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image
                source={iconUrl}
                resizeMode={'cover'}
                style={{
                    width: 30,
                    height: 30,
                    backgroundColor: COLORS.white,
                    borderRadius: 4,
                }}
            />
        </TouchableOpacity>
    )
}

export default BackIcon