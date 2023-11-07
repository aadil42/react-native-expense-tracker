import axios from "axios";

const baseUrl = `https://react-native-expense-tra-5ecc8-default-rtdb.asia-southeast1.firebasedatabase.app`;

export const post = (data) => {
    axios.post(`${baseUrl}/expenses.json`, data);
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
    console.log(expense)
    axios.put(`${baseUrl}/expenses/${id}.json`, expense);
}

export const deleteExpense = async (id) => {
    axios.delete(`${baseUrl}/expenses/${id}.json`);
}