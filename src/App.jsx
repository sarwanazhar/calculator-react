import React, { useState } from 'react'
import Button from './components/button'
import Input from './components/Input'
import * as math from "mathjs"

const App = () => {
  const [text, settext] = useState("")
  const [result, setresult] = useState("")

  const addToText = (e) => {
    settext((prev) => [...prev, e + " "])
  }

  const calculate = () => {
    const input = text.join("")

    setresult(math.evaluate(input))
  }

  const reset = ()=>{
    settext("")
    setresult("")
  }

  return (
    <div className='App'>
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
        <Button symbol={"7"} handleClick={addToText}/>
        <Button symbol={"8"} handleClick={addToText}/>
        <Button symbol={"9"} handleClick={addToText}/>
        <Button symbol={"/"} color={"#F29835"} handleClick={addToText}/>
        </div>
        <div className="row">
        <Button symbol={"4"} handleClick={addToText}/>
        <Button symbol={"5"} handleClick={addToText}/>
        <Button symbol={"6"} handleClick={addToText}/>
        <Button symbol={"*"} color={"#F29835"} handleClick={addToText}/>
        </div>
        <div className="row">
        <Button symbol={"1"} handleClick={addToText}/>
        <Button symbol={"2"} handleClick={addToText}/>
        <Button symbol={"3"} handleClick={addToText}/>
        <Button symbol={"+"} color={"#F29835"} handleClick={addToText}/>
        </div>
        <div className="row">
        <Button symbol={"0"} handleClick={addToText}/>
        <Button symbol={"."} handleClick={addToText}/>
        <Button symbol={"="} handleClick={calculate}/>
        <Button symbol={"-"} color={"#F29835"} handleClick={addToText}/>
        </div>
        <Button symbol={"clear"} color={"#ba2133"} handleClick={reset}/>
      </div>
    </div>
  )
}

export default App