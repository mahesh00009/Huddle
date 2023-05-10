import Header from "./Components/Header";
import { ThemeProvider } from "styled-components";
import Styled from "./Components/Styled/Styled";
import GlobalStyles from "./Components/Styled/Global";
import content from "./Content"
import Card from "./Components/Card";
import Footer from "./Components/Footer";
function App() {
  const theme = {
    colors : {
      header : '#ebfbff',
      body : '#fff', 
      footer : '#003333'
    },

    mobile: "768px"
  }
  return (
    <ThemeProvider theme = {theme}>

    <>
    <GlobalStyles/>
      <Header />
      <Styled>

        {
          content.map((item, index) =>{
           return <Card key={index} item = {item}/>
          })
        }

      </Styled>

      <Footer/>

    </>
    </ThemeProvider>
  );
}

export default App;
