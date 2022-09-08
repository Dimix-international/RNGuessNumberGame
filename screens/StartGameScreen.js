import {View, TextInput, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView} from "react-native";
import {useState} from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({onPickNumber}) => {

    const [enteredNumber, setEnteredNumber] = useState('');

    const {width, height} = useWindowDimensions(); //динамическое определение и изменение размеров

    const enterNumberHandler = (enteredText) => {
        setEnteredNumber(enteredText)
    };
    const resetEnteredNumber = () => setEnteredNumber('');
    const confirmNumberHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if(!chosenNumber || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number',
                'Number has to be a number between 1 adn 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetEnteredNumber}]
            )
            return;
        }

        onPickNumber(chosenNumber);
    }

    const marginTopDistance = height < 380 ? 30 : 100;

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView
                style={styles.screen}
                behavior={'position'}
        >
            <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
                <Title>Guess My Number!</Title>
                <Card>
                    <InstructionText>Enter a Number</InstructionText>
                    <TextInput
                        value={enteredNumber}
                        style={styles.numberInput}
                        maxLength={2}
                        keyboardType={"number-pad"}
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        onChangeText={enterNumberHandler}
                    />
                    <View style={styles.containerButtons}>
                        <View style={styles.containerButton}>
                            <PrimaryButton onPress={resetEnteredNumber}>
                                Resets
                            </PrimaryButton>
                        </View>
                        <View style={styles.containerButton}>
                            <PrimaryButton onPress={confirmNumberHandler}>Confirm</PrimaryButton>
                        </View>
                    </View>
                </Card>
            </View>
        </KeyboardAvoidingView>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
    rootContainer: {
        flex: 1,
        alignItems: 'center',
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: colors.accent500,
        borderBottomWidth: 2,
        color: colors.accent500,
        marginVertical: 8,
        fontWeight: "600",
        textAlign: 'center',
    },
    containerButtons: {
        flexDirection: 'row',
    },
    containerButton: {
        flex: 1,
    }
});

export default StartGameScreen;