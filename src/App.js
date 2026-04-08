import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Overview from './components/Overview';
import ExpenseSummary from './components/ExpenseSummary';
import ExpenseDetails from './components/ExpenseDetails';
import { ExpenseModalProvider } from './context/ExpenseModalContext';
import { Container, Row } from 'react-bootstrap';
import { user } from './data';
import { AppProvider, useAppContext } from './context/AppContext';

function AppContent() {
  const {month, expenseSummaryData, expenseDetailsData, totalExpenses, setMonth} = useAppContext();

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  return(
    <div className='App'>
      <Header />
      <ExpenseModalProvider>
        <Container fluid='lg'>
          <Overview />
          <Row className='tbl-container'>
            <ExpenseSummary />
            <ExpenseDetails />
          </Row>
        </Container >
      </ExpenseModalProvider>
    </div>
  );
}

function App() {
  return (
    <AppProvider >
      <AppContent />
    </AppProvider>
  );
}

export default App;
