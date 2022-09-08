import {View, StyleSheet, Alert, FlatList, Dimensions, useWindowDimensions} from "react-native";
import Title from "../components/ui/Title";
import {useEffect, useRef, useState} from "react";
import {generateRandomBetween} from "../helpers";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import {Ionicons} from '@expo/vector-icons';
import GuessLogItem from "../components/game/GuessLogItem";


const GameScreen = ({userNumber, stopGame}) => {

    const minBoundary = useRef(1);
    const maxBoundary = useRef(100);

    const initialGuess = generateRandomBetween(
        minBoundary.current,
        maxBoundary.current,
        userNumber
    );
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);
    const {width} = useWindowDimensions();

    const renderContent = () => {

        if(width > 500) {
            return (
                <>
                    <View style={styles.buttonsContainerWide}>
                        <View style={styles.containerBtn}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                                <Ionicons name={'md-remove'} size={24} color={'white'}/>
                            </PrimaryButton>
                        </View>
                        <NumberContainer>{currentGuess}</NumberContainer>
                        <View style={styles.containerBtn}>
                            <PrimaryButton onPress={() => nextGuessHandler('greater')}>
                                <Ionicons name={'md-add'} size={24} color={'white'}/>
                            </PrimaryButton>
                        </View>
                    </View>
                </>
            )
        }

        return (
            <>
                <NumberContainer>{currentGuess}</NumberContainer>
                <Card>
                    <InstructionText style={styles.instructionText}>Higher or lower ?</InstructionText>
                    <View style={styles.containerBtns}>
                        <View style={styles.containerBtn}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                                <Ionicons name={'md-remove'} size={24} color={'white'}/>
                            </PrimaryButton>
                        </View>
                        <View style={styles.containerBtn}>
                            <PrimaryButton onPress={() => nextGuessHandler('greater')}>
                                <Ionicons name={'md-add'} size={24} color={'white'}/>
                            </PrimaryButton>
                        </View>
                    </View>
                </Card>
            </>
        )
    }

    const nextGuessHandler = (direction) => {

        if(
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert(
                "Don't lie!",
                'You know that this is wrong...',
                [{text: 'Sorry', style: 'cancel'}]
                )
            return;
        }

        if(direction === 'lower') {
            maxBoundary.current = currentGuess;
        } else {
            minBoundary.current = currentGuess + 1;
        }

        if(maxBoundary.current - minBoundary.current === 1) {
            //when we have for example min 18, max - 20, and current will be 19
            stopGame(guessRounds.length + 1);
            return;
        }

        const newRndNumber = generateRandomBetween(
            minBoundary.current,
            maxBoundary.current,
            currentGuess
        )
        setCurrentGuess(newRndNumber);
        setGuessRounds(prev => [newRndNumber, ...prev])

    }

    useEffect(() => {
        if(currentGuess === userNumber) {
            stopGame(guessRounds.length);
        }
    },[currentGuess, userNumber, stopGame]);

    useEffect(() => {
        minBoundary.current = 1
        maxBoundary.current = 100;
    },[])

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess!</Title>
            {renderContent()}
            <View style={styles.guessList}>
                {/*{guessRounds.map(round => <Text key={round}>{round}</Text>)}*/}
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => (
                        <GuessLogItem
                             roundNumber={guessRounds.length - itemData.index}
                             guess={itemData.item}
                         />
                    )}
                    keyExtractor={(item) => item}
                    alwaysBounceVertical={false}
                />
            </View>
        </View>
    )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: deviceWidth < 380 ? 26 : 50,
        alignItems: 'center'
    },
    instructionText: {
        marginBottom: 15,
    },
    containerBtns: {
        flexDirection: 'row'
    },
    containerBtn: {
        flex: 1,
    },
    guessList: {
        flex: 1,
        marginTop: 10,
    },
    buttonsContainerWide: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default GameScreen;