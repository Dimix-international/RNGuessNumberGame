import {StyleSheet, Text} from "react-native";
import colors from "../../constants/colors";

const InstructionText = ({children, style}) => {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    instructionText: {
        color: colors.accent500,
        fontSize: 24,
    },
});

export default InstructionText;