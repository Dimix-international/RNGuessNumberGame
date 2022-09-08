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
        padding: 12,
       // borderWidth: Platform.OS === 'android' ? 2 : 0,
       // borderWidth: Platform.select({ios:0 , android: 2}),
        maxWidth: '80%', //берет размер родительского компонента
        width: 300,
    }
});

export default Title;