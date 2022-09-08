import {Dimensions, StyleSheet, View} from "react-native";
import colors from "../../constants/colors";

const Card = ({children}) => {
    return (
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: colors.primary300,
        borderRadius: 8,
        elevation: 4, // box-shadow for android
        // box-shadow for iOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
});

export default Card;