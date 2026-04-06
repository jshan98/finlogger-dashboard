// AppContext.js

import { createContext, useContext, useState, useEffect } from "react";
import { expenseData, expenseSummaryData as summaryData, expenseCategories as categoriesData } from 'data.js';

// Create a new context for the app
const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [month, setMonth] = useState("2020-01");
    const [expenseSummaryData, setExpenseSummaryData] = useState(null);
    const [expenseDetailsData, setExpenseDetailsData] = useState(null);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [expenseCategories, setExpenseCategories] = useState(null);
    const [expenseIdToBeDeleted, setexpenseIdToBeDeleted] = useState(null);

    const fetchExpenseCategories = async () => {
        setExpenseCategories(categoriesData.categories);
    }

    const fetchExpenseData = async () => {
        setExpenseSummaryData(summaryData);
        setTotalExpenses(expenseData.totalExpenses);
        setExpenseDetailsData(expenseData.expenses);
    }

};

export const useAppContext = () => {
    return useContext(AppContext);
};