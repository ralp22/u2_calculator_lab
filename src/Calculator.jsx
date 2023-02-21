import { useState } from 'react'
import './App.css';

export default function Calculator () {

        const [display, setDisplay] = useState(0)
        const [currentCalc, setCurrentCalc] = useState('')
    

        const handleClick = (e) => {
            e.preventDefault()
            const newValue = currentCalc + e.target.value
            setCurrentCalc(newValue)
            setDisplay(newValue)
        }
    
        const handleSubmit = (e) => {
            e.preventDefault();
            setDisplay(eval(currentCalc));
            let total = eval(currentCalc)
            setCurrentCalc(total)
        }
    
        const resetCalc = (e) =>{
            e.preventDefault();
            setDisplay(0);
            setCurrentCalc('');
        }

        const backSpace = (e) =>{
            e.preventDefault();
            const newValue = currentCalc.slice(0, -1);
            setCurrentCalc(newValue);
            setDisplay(newValue);
        }
    
    return (
        <div id="container">
            <section id="result"><h1>{display}</h1></section>
            <section id="buttons-container">
                <button className="calc-button" onClick={resetCalc}>AC</button>
                <button className="calc-button" onClick={backSpace}>Back</button>
                <button className="calc-button" onChange={(e) => setDisplay(e.target.value)} onClick={handleClick} value="%">%</button>
                <button className="calc-button" onChange={(e) => setDisplay(e.target.value)} onClick={handleClick} value="/">/</button>
                <button className="calc-button" onChange={(e) => setDisplay(e.target.value)} onClick={handleClick} value="7">7</button>
                <button className="calc-button" onChange={(e) => setDisplay(e.target.value)} onClick={handleClick} value="8">8</button>
                <button className="calc-button" onChange={(e) => setDisplay(e.target.value)} onClick={handleClick} value="9">9</button>
                <button className="calc-button" onChange={(e) => setDisplay(e.target.value)} onClick={handleClick} value="*">*</button>
                <button className="calc-button" onChange={(e) => setDisplay(e.target.value)} onClick={handleClick} value="4">4</button>
                <button className="calc-button" onChange={(e) => setDisplay(e.target.value)} onClick={handleClick} value="5">5</button>
                <button className="calc-button" onChange={(e) => setDisplay(e.target.value)} onClick={handleClick} value="6">6</button>
                <button className="calc-button" onChange={(e) => setDisplay(e.target.value)} onClick={handleClick} value="-">-</button>
                <button className="calc-button" onChange={(e) => setDisplay(e.target.value)} onClick={handleClick} value="1">1</button>
                <button className="calc-button" onChange={(e) => setDisplay(e.target.value)} onClick={handleClick} value="2">2</button>
                <button className="calc-button" onChange={(e) => setDisplay(e.target.value)} onClick={handleClick} value="3">3</button>
                <button className="calc-button" onChange={(e) => setDisplay(e.target.value)} onClick={handleClick} value="+">+</button>
            </section>
            <section className="bottom-button">
                <button className="calc-button btm" onChange={(e) => setDisplay(e.target.value)} onClick={handleClick} value="0">0</button>
                <button className="calc-button btm" onChange={(e) => setDisplay(e.target.value)}onClick={handleClick} value=".">.</button>
                <button className="calc-button btm" onClick={handleSubmit}>=</button>
            </section>
        </div>
    )

}
