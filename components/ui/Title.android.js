import {StyleSheet, Text, View, Platform} from "react-native";
import colors from "../../constants/colors";

const Title = ({children}) => {

    return (
        <View>
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.primary400,
        textAlign: 'center',
        borderColor: colors.primary400,
        padding: 12,
        borderWidth: 2,
        maxWidth: '80%', //берет размер родительского компонента
        width: 300,
    }
});

export default Title;