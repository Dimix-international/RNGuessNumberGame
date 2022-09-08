import {Text, View, StyleSheet} from "react-native";

const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Opponent's Guess!</Text>
            <View>
                <Text>Higher or lower &?</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#f3c62d',
        textAlign: 'center',
        borderColor: '#f3c62d',
        padding: 12,
        borderWidth: 2,
    }
});

export default GameScreen;