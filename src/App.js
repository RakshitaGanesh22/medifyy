import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import MainBanner from "./Component/Banner";
import theme from './ThemeProvider';
import NavBar from './Component/NavBar';
import Logo from './Component/logo';
import SearchCard from './Component/SearchCard';
import CardWithCarousal from './Component/CardWithCarousal';
import Specialization from './Component/Specialization';
import MedicalSpecialist from './Component/MedicalSpecialist';
import LatestNews from './Component/LatestNews';
import Caring from './Component/Caring';
import OurFamily from './Component/OurFamily';
import Question from './Component/Question';
import MobileBanner from './Component/smallBanner';
import Footer from './Component/Footer';
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <MainBanner/>
      <NavBar />  
      <Logo /> 
      <SearchCard />
      <CardWithCarousal />
      <Specialization />
      <MedicalSpecialist />
      <Caring />
      <LatestNews />
      <OurFamily />
      <Question />
      <MobileBanner />
      </div>
    </ThemeProvider>
  );
}

export default App;
