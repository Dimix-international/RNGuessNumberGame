import {View, Text, Pressable, StyleSheet} from "react-native";
import colors from "../constants/colors";

export const PrimaryButton = ({children, onPress}) => {
    return (
        <View style={styles.buttonOuterContainer}>
             <Pressable
                style={({pressed}) => pressed
                    ? [styles.buttonInnerContainer, styles.pressed]
                    : styles.buttonInnerContainer}
                onPress={onPress}
                android_ripple={{color: colors.primary600}}
              >
                 <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: colors.primary700,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2, // box-shadow for android
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        //ripple эффект для iOS
        opacity: 0.75,
    }
})

export default PrimaryButton;