import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Overview from './components/Overview';
import ExpenseSummary from './components/ExpenseSummary';
import ExpenseDetails from './components/ExpenseDetails';
import { ExpenseModalProvider } from './context/ExpenseModalContext';
import { Container, Row } from 'react-bootstrap';
import { user } from "./data";
import { AppProvider, useAppContext } from './context/AppContext';

/**
 * Function: AppContent
 * Description: 
 * @param none
 * @returns JSX for app content containing app compoenents
 */
function AppContent() {
  const {month, expenseSummaryData, expenseDetailsData, totalExpenses, setMonth} = useAppContext();

  // handles the month change by setting month, expenseSummaryData, expenseDetailsData, and totalExpenses
  const handleMonthChange = (event) => {
    setMonth(event.target.value);
    //Set expenseSummaryData, expenseDetailsData, overviewCardData
  };

  return(
    <div className='App'>
      <Header />
      <ExpenseModalProvider>
        <Container fluid='lg'>
          <Overview month={month} handleMonthChange={handleMonthChange} totalExpenses={totalExpenses} userIncome={user.income}/>
          <Row className='tbl-container'>
          </Row>
        </Container >
      </ExpenseModalProvider>
    </div>
  );
}

/**
 * Function: App
 * Description:
 * @param none
 * @returns App content wrapped in AppProvider
 */
function App() {
  return (
    <AppProvider >
      <AppContent />
    </AppProvider>
  );
}

export default App;
