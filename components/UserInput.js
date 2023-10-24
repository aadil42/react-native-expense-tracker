import { useState } from "react";

import { Text, View, StyleSheet } from "react-native";

import { DatePicker, Input, Button } from "react-native-elements";

const UserInput = () => {

    const [date, setDate] = useState(null);
    const [details, setDetails] = useState(null);
    const [amount, setAmount] = useState(null);

    const dateHandler = () => {

    }

    const detailsHandler = () => {

    }

    const amountHandler = () => {

    }

    const submitHandler = () => {

    }


    return (
        <View style={StyleSheet.container}>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default UserInput;