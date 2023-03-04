import NavBar from './components/navbar';
import Header from './components/header';
import { useTranslation } from "react-i18next";
import './App.css';



const  App = () => {
  
  const { i18n } = useTranslation();
  return (
    <div className="App" style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}>
         <NavBar />
         <Header />
    </div>
  );
}

export default App;
