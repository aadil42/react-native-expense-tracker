import { useContext, useLayoutEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import Button from "../components/Button"
import UserInput from "../components/UserInput";

import { post } from '../utils/http';
import { updateExpense } from "../utils/http";
import { deleteExpense } from "../utils/http";

// get  contexts
import { ExpenseCtx } from "../store/context/ExpenseContext";

const ExpensePrompt = ({ route, navigation }) => {

    const ctx = useContext(ExpenseCtx);
    
    const expenseId = route.params.id;
    const currentTitle = route.params.title;
    const currentAmount = route.params.amount;
    const currentDate = route.params.date
    // const currentDate = route.params.date;

    const isEditing = expenseId === undefined ? false : true;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Update Expense"  : "Add Expense"
        });
    }, [isEditing, navigation]);


    const updateAlert = () => {
        return Alert.alert("Updated.", "Expense is Updated.", [
            {
                text: "Ok",
                onPress: () => {
                    navigation.goBack();
                }
            }
        ]);
    }
    const networkFailer = (msg) => {
        return Alert.alert("Oops.", msg, [
            {
                text: "Ok",
                onPress: () => {
                    navigation.goBack();
                }
            }
        ]);
    }
    const addAlert = () => {
        return Alert.alert("Added.", "Expense is Added.", [
            {
                text: "Ok",
                onPress: () => {
                    navigation.goBack();
                }
            }
        ]);
    }

    const deleteAlert = () => {
        return Alert.alert("Deleted.", "Expense is Deleted.", [
            {
                text: "Ok",
                onPress: () => {
                    navigation.goBack();
                }
            }
        ]);
    }

    const confirmPress = ({title, amount}) => {
        
        if(isEditing) {
            const data = {
                id: expenseId,
                title: title,
                amount: amount,
            };
            const remoteDate = {
                title: title,
                amount: amount,
                date: currentDate
            }

            const updateData = async () => {
                try {
                    const response = await updateExpense(expenseId, remoteDate);
                    if(!response) throw new Error('Something went wrong. Check your API url');
                    ctx.update(data);
                    updateAlert();
                } catch {
                    networkFailer("Something went wrong. Can't update.");
                }
            }

            updateData();
        } else {
            const data = {
                title: title,
                amount: amount,
                date: new Date()
            }
            const addData = async () => {
                try {
                    const response = await post(data);
                    if(!response) throw new Error('Something went wrong. Check your API url'); 
                    ctx.add(data);              
                    addAlert();
                } catch {
                    networkFailer("Something went wrong. Can't add.");
                }
            } 

            addData();
        }
    }

    const canclePrompt = () => {
        navigation.goBack();
    }

    const deleteHandler = () => {

        const deleteData = async () =>  {
            try {
                const response = await deleteExpense(expenseId);
                if(!response) throw new Error('Something went wrong. Check your API url');
                ctx.remove(expenseId);
                deleteAlert();
            } catch {
                networkFailer("Something went wrong. Can't delete.")
            }
        }   
        deleteData();
    }


    return (
        <UserInput 
        canclePrompt={canclePrompt} 
        confirmPress={confirmPress} 
        title={currentTitle} 
        amount={currentAmount}
        isEditing={isEditing}
        deleteHandler={deleteHandler}
        />
    );
}

const styles = StyleSheet.create({

});

export default ExpensePrompt;