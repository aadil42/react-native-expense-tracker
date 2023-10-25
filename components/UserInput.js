import { useState } from "react";

import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";

import IconBtn from "./IconBtn";
import Button from "./Button";

import { GlobalStyles } from "../constants/styles";

const UserInput = ({title, date, amount, canclePrompt, confirmPress, isEditing, deleteHandler}) => {

    const [textInput, setTextInput] = useState(title);
    const [inputAmount, setInputAmount] = useState(amount);
    
    const textInputHandler = (value) => {
        setTextInput(value);
    }

    const inputAmountHandler = (value) => {
        const numberOfPeriods = value.split('').filter((char) => {
            return char === '.'
        }).length;

        console.log(numberOfPeriods, 'nums');

        if(numberOfPeriods < 2) {
            setInputAmount(value.replace(/[^0-9.]/g, ''));
        }
    }

    const submitHandler = () => {
        confirmPress({
            title: textInput,
            amount: inputAmount
        });
    }

    const deleteBtn = <View style={styles.btnContainer}>
                        <IconBtn pressHandler={deleteHandler} name="trash" size={30} color={GlobalStyles.colors.error500} />
                      </View>;
                      
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                    value={textInput}
                    placeholder="Enter Title"
                    onChangeText={textInputHandler}
                    style={styles.input}
                    placeholderTextColor="white"
                />
                <TextInput 
                    value={inputAmount}
                    placeholder="Enter Amount"
                    keyboardType="numeric"
                    onChangeText={inputAmountHandler}
                    style={styles.input}
                    placeholderTextColor="white"
                />
            </View>
            <View style={styles.btnContainer}>
                <Button pressHandler={canclePrompt} incomingStyle={[styles.cancleStyle]} title="Cancel" /> 
                <Button pressHandler={submitHandler} incomingStyle={[]} title={(isEditing && "Edit") || "Add"}/>
            </View>
            {isEditing && deleteBtn}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary700,
        paddingTop: 30
    },
    input: {
        borderWidth: 2,
        borderColor: "white",
        padding: 5,
        width: 150,
        borderRadius: 8,
        color: "white",   
    },
    btnContainer: {
        justifyContent: "center",
        backgroundColor: GlobalStyles.colors.primary700,
        flexDirection: "row",
        paddingTop: 30
    },
    inputContainer: {
        justifyContent: "space-evenly",
        backgroundColor: GlobalStyles.colors.primary700,
        flexDirection: "row",
        paddingTop: 30
    },
    cancleStyle:  {
        backgroundColor: GlobalStyles.colors.primary700,
        opacity: .6
    },
    deleteStyle: {
        backgroundColor: GlobalStyles.colors.error500
    }
});
export default UserInput;