import { Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/Button"
import UserInput from "../components/UserInput";

const ExpensePrompt = ({ route }) => {

    const expenseId = route.params.id;
    const isEditing = expenseId === undefined ? false : true;

    const confirmPress = () => {
        if(isEditing) {
            console.log('editing');
            // edit new expense.
        } else {
            console.log('adding new');
            // add new expense.
        }
    }

    const canclePrompt = () => {
        console.log('cancel...');
    }

    return (
        <View style={styles.container}>
          <Button pressHandler={canclePrompt} incomingStyle={[styles.cancleStyle]} title="Cancel" /> 
          <Button pressHandler={confirmPress} incomingStyle={[]} title={(isEditing && "Edit") || "Add"}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: GlobalStyles.colors.primary700,
        flexDirection: "row",
        paddingTop: 30
    },
    cancleStyle:  {
        backgroundColor: GlobalStyles.colors.primary700,
        opacity: .6
    }
});

export default ExpensePrompt;