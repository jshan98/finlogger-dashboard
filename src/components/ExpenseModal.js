import { expenseCategories } from "../data";
import { useExpenseModalContext } from "../context/ExpenseModalContext";
import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from "react";

function ExpenseModal() {
    const {showModal, modalMode, modalData, handleClose} = useExpenseModalContext();
    const {validated, setValidated} = useState(false);

    const categories = expenseCategories.categories.map((item) => {
        return (
            <option value={item} key={item}>
                {item}
            </option>
        );
    });
}