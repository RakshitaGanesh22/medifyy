import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './ThemeProvider';
import { LocationProvider } from './Location';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import BookingPage from './Pages/Booking';
import MyBooking from './Pages/MyBooking';
function App() {
  return (
    
      <LocationProvider>
    <ThemeProvider theme={theme}>
    <div className="App">
    <Router>
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Booking" element={<BookingPage/>} />
        <Route path="/appointment" element={<MyBooking/>} />
    </Routes>
    </Router>
    {/* <ABanner/> */}
      </div>
    </ThemeProvider>
    </LocationProvider>
      
    
  );
}

export default App;
