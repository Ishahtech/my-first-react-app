import { useState } from "react"

function LearnState() {
    const [dollarPrice, setDollarPrice] = useState(400)

    const handleClick = () => {
        setDollarPrice(prev => {
            console.log(prev)
            return prev + 400;
        })
    }

  return (
    <>
     <p>What is today's dollar rate?</p> 
     <small style={{marginRight: '10px'}}>${dollarPrice}.00</small>
     <button onClick={handleClick} >click</button>
    </>
  )
}

export default LearnState
