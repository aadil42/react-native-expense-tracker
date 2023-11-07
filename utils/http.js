import axios from "axios";

const baseUrl = `https://react-native-expense-tra-5ecc8-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json`;

export const post = (data) => {
    axios.post(baseUrl, data);
}

export const get = async () => {
    let data = await axios.get(baseUrl);
    console.log(data);
    return data;
}