
import { View, Text, StyleSheet } from "react-native"; 

const Message = ({ message }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    },
    text: {
        color: "white"
    }
});

export default Message;