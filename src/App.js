import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import EnterpriseBasicDetails from "./EnterpriseBasicDetails"
import EnterpriseDevResults from "./EnterpriseDevResults"
import Header from './components/Header'

import './App.less'

function App() {
	const [current, setCurrent] = useState("园区企业基本情况")
	const [showMenu, setMenuShow] = useState(false)

  let path = window.location.pathname
  const handleCurrentChange = (current) => {
    setCurrent(current)
    setMenuShow(!showMenu)
  }
  useEffect(() => {
    setCurrent(path === "/" ? "园区企业发展成果" : "园区企业基本情况")
  },[])
  return (
    <Router>
      <div className='App'>
        <Header 
          showMenu={showMenu}
          current={current} 
          setCurrent={handleCurrentChange}
          setMenuShow={setMenuShow}
        />
        <Switch>
          <Route path='/' key='/' exact component={EnterpriseDevResults} />
          <Route path='/basic' key='/basic' component={EnterpriseBasicDetails} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
