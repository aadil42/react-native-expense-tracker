import { useState } from "react";

import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";

import IconBtn from "./IconBtn";
import Button from "./Button";

import { GlobalStyles } from "../constants/styles";

const UserInput = ({title, amount, canclePrompt, confirmPress, isEditing, deleteHandler}) => {

    
    const [textInput, setTextInput] = useState(title || "");
    const [inputAmount, setInputAmount] = useState(amount || "");
    const [isTextInvalid, setIsTextInvalid] = useState(false);
    const [isAmountInvalid, setIsAmountInvalid] = useState(false);

    const textInputHandler = (value) => {
        setTextInput(value);
        setIsTextInvalid(false);
    }

    const inputAmountHandler = (value) => {
        const numberOfPeriods = value.split('').filter((char) => {
            return char === '.'
        }).length;
        if(numberOfPeriods < 2) {
            setInputAmount(value.replace(/[^0-9.]/g, ''));
        }
        setIsAmountInvalid(false);
    }

    const submitHandler = () => {

        if(!textInput.trim()) {
            setIsTextInvalid(true);
        };
        
        if(!inputAmount.trim()) {
            setIsAmountInvalid(true);
        }

        if(!textInput.trim() || !inputAmount.trim()) return;

        confirmPress({
            title: textInput,
            amount: inputAmount
        });
    }

    const deleteBtn = <View style={styles.btnContainer}>
                        <IconBtn pressHandler={deleteHandler} incomingStyles={[styles.noPadding]} name="trash" size={30} color={GlobalStyles.colors.error500} />
                      </View>;
                      
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Amount</Text>
                <TextInput 
                    value={inputAmount}
                    keyboardType="decimal-pad"
                    onChangeText={inputAmountHandler}
                    style={[styles.input, (isAmountInvalid && styles.errorStyle)]}
                />
                {isAmountInvalid && <Text style={styles.errorMsg}> Please Enter a valid amount</Text>}
                <Text style={styles.label}>Description</Text>
                <TextInput 
                    value={textInput}
                    onChangeText={textInputHandler}
                    style={[styles.input, styles.descriptionPadding, (isTextInvalid && styles.errorStyle)]}
                    multiline={true}
                    numberOfLines={6}
                    textAlignVertical="top"
                />
                {isTextInvalid && <Text style={styles.errorMsg}> Please Enter a valid description</Text>}
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
        paddingTop: 30,
        alignItems: "center"
    },
    input: {
        borderWidth: 2,
        borderColor: "white",
        padding: 5,
        borderRadius: 8,
        color: "white", 
        marginBottom: 10,
        width: "100%",
        fontSize: 16,
    }, 
    descriptionPadding: {
        paddingLeft: 10,
        paddingTop: 10
    },
    btnContainer: {
        justifyContent: "center",
        backgroundColor: GlobalStyles.colors.primary700,
        flexDirection: "row",
        paddingTop: 30,
        width: "80%"
    },
    inputContainer: {
        width: "80%",
        marginTop: 30,
    },
    label: {
        color: "white",
        fontSize: 16,
        marginBottom: 5
    },
    errorStyle: {
        backgroundColor: GlobalStyles.colors.error50,
        color: GlobalStyles.colors.error500
    },
    errorMsg: {
        color: GlobalStyles.colors.error500
    },  
    cancleStyle:  {
        backgroundColor: GlobalStyles.colors.primary700,
        opacity: .6
    },
    deleteStyle: {
        backgroundColor: GlobalStyles.colors.error500
    },
    noPadding: {
        padding: 0
    },

});
export default UserInput;