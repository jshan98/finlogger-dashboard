import { Table, Col } from "react-bootstrap";
import DeleteConfirmationModal from './DeleteConfirmationModal';
import { useExpenseModalContext } from "../context/ExpenseModalContext";
import { useState } from "react";

/**
 * Function: updateDateFormat
 * Description: reformats the parameter to the correcr format.
 * @param {*} date 
 * @returns formatted date (MM/DD/DayOfTheWeek)
 */
function updateDateFormat(date){
    const d1 = new Date(date);
    const month = d1.toLocaleString("en-us", {month:"short"});
    const day = d1.getDate();
    const dayOfWeek = d1.toLocaleString("en-us", {weekday:"short"});
    return ('${month}${day},${dayOfWeek}');
}