import {View, StyleSheet, Image, Text, Dimensions, useWindowDimensions, ScrollView} from "react-native";
import Title from "../components/ui/Title";
import colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({roundsNumber, userNumber,restartGame}) => {

    const {width, height} = useWindowDimensions();

    const getImageSize = () => {
        let imageSize = 300;

        if(width < 380) {
            imageSize = 150;
        }

        if(height < 400) {
            imageSize = 80;
        }

        return {
            width: imageSize,
            height: imageSize,
            borderRadius: imageSize/ 2
        }
    }

    const renderContent = () => {
        return (
            <View style={styles.container}>
                <Title>GAME OVER!</Title>
                <View style={[styles.imageContainer, {...getImageSize()}]}>
                    <Image
                        source={require('../assets/images/success.png')}
                        style={styles.image}
                    />
                </View>
                <Text style={styles.summaryText}>
                    Your phone needed
                    <Text style={styles.highlightText}> {roundsNumber} </Text>
                    rounds to guess the number
                    <Text style={styles.highlightText}> {userNumber} </Text>.
                </Text>
                <PrimaryButton onPress={restartGame}>Start New Game</PrimaryButton>
            </View>
        )
    }
    return (
        <>{
            width > 500
                ? <ScrollView>{renderContent()}</ScrollView>
                : <>{renderContent()}</>
        }</>
    )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: deviceWidth < 380 ? 150 : 300,
        height: deviceWidth < 380 ? 150 : 300,
        borderRadius: deviceWidth < 380 ? 75 : 150,
        borderWidth: 3,
        borderColor: colors.primary300,
        overflow: 'hidden',
        margin: 24
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontWeight: '600',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlightText: {
        color: colors.primary700
    }
})

export default GameOverScreen;