
import { Header } from './components/header/Header'
import { InputComponent } from './components/input-component/InputComponent'
import { Results } from './components/results/Results'
import { calculateInvestmentResults } from "./util/investment.js"
import { useState } from "react";

function App() {

  const [results, setResults] = useState([])
  const [annualInvestment, setAnnualInvestment] = useState(0)

  const handleInputChange = (values) => {
    const value = calculateInvestmentResults(values);
    setAnnualInvestment(values.annualInvestment)
    setResults(value);
  }

  return (
    <>
     <Header title="React Investment Calculator" />   
     <InputComponent onInputChange={handleInputChange} /> 
     <Results results={results} annualInvestment={annualInvestment} />    
    </>
  )
}

export default App
