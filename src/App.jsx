// import { useState } from "react"
import Header from "./components/Header"
import LearnState from "./components/LearnState"
import ListFellows from "./components/ListFellows"
import myFellows from "./data/fellows"
import SimpleCounter from "./components/SimpleCounter"



function App() {
// const [users, setUsers] = useState(myFellows)

  return (
    <>
     <Header item={"Refreshing Our React Understanding"} date={new Date().getDate()} />  
     <LearnState />
     <ListFellows users = {users} />
     <SimpleCounter />
    </> 
  )
}

export default App
