import {View, TextInput, StyleSheet, Alert} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import {useState} from "react";

const StartGameScreen = ({onPickNumber}) => {

    const [enteredNumber, setEnteredNumber] = useState('');

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

    return (
        <View style={styles.inputContainer}>
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
                        Reset
                    </PrimaryButton>
                </View>
                <View style={styles.containerButton}>
                    <PrimaryButton onPress={confirmNumberHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#3b021f',
        borderRadius: 8,
        elevation: 4, // box-shadow for android
        // box-shadow for iOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
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