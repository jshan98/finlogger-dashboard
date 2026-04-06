// AppContext.js

import { createContext, useContext, useState, useEffect } from "react";
import { expenseData, expenseSummaryData, expenseCategories } from 'data.js';

const AppContext = createContext();