import axios from "axios";

const baseUrl = `https://react-native-expense-tra-5ecc8-default-rtdb.asia-southeast1.firebasedatabase.app`;

export const post = async (data) => {
    const response = await axios.post(`${baseUrl}/expenses.json`, data);
    return response;
}

export const get = async () => {
    let response = await axios.get(`${baseUrl}/expenses.json`);

    const expenses = [];
    for(const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            title: response.data[key].title,
            date: new Date(response.data[key].date)
        }
        expenses.push(expenseObj);
    }
    return expenses;
}

export const updateExpense = async (id, expense) => {
    const response = await axios.put(`${baseUrl}/expenses/${id}.json`, expense);
    return response;
}

export const deleteExpense = async (id) => {
    const response = await axios.delete(`${baseUrl}/expenses/${id}.json`);
    return response;
}