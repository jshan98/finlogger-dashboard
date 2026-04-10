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

function ExpenseDetails({data}){
    const { handleShow } = useExpenseModalContext();
    const {showDM, setShowDM} = useState(false);

    const handleEdit = (event, expenseData) => {
        event.preventDefault();
        handleShow("edit", "expense");
    }

    const handleDMShow = (event, expenseId) => {
        event.preventDefault();
        setShowDM(true);
        setExpenseIdToBeDeleted(expenseId);
    } 

    const handleClose = () => {
        setShowDM(false);
    }

    {/* Left intentionally empty until next stage of project */}
    handleDelete = () => {

    }

    const tableItems = data.map((expense) => {
        return (
            <tr key={expense._id} >
                <td className="text-nowrap">{updateDateFormat(expense.date)}</td>
                <td>{expense.description}</td>
                <td>${expense.amount}</td>
                <td>
                    <a
                        href="#"
                        className="me-2 edit expButton"
                        onClick={(e) => handleEdit(e, expense)}
                    >
                        <img src="./images/edit.png" alt="Edit" />
                    </a>
                    <a 
                        href="#"
                        className="delete"
                        onClick={(e) => handleDMShow(e, expense._id)}
                    >
                        <img src="./images/delete.png" alt="Delete" />
                    </a>
                </td>
            </tr>
        );
    });

    return (
        <Col md="8">
            <p className="heading">Expense Details</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th width="31%">DATE</th>
                        <th width="31%">DESCRIPTION</th>
                        <th width="31%">AMOUNT</th>
                        <th width="7%" className="editDeleteTd"></th>
                    </tr>
                </thead>
                <tbody>{tableItems}</tbody>
            </Table>
            {showDM && <DeleteConfirmationModal 
                showDM={showDM}
                handleClose={handleClose}
                handleDelete={handleDelete}
            />}
        </Col>
    );
}

export default ExpenseDetails;