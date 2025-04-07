
import Home from "./component/pages/Home/Home"
import Longin from "./component/pages/Login/Longin"
import Product from "./component/pages/Product/Product"
import Profiles from "./component/pages/Profiles"
import Team from "./component/pages/Team/Team"
import Recharge from "./component/recharge/Recharge"
import Rechargeheader from "./component/recharge/Rechargeheader"
import Withdraw from "./component/withdrawFiles/Withdraw"

// Router 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
 

  return (
    <>
      <Router >
        <Routes>
          <Route path="/" exact element={<Longin />} />
          <Route path="/home" element={<Home />} />
          <Route path='/products' element={<Product />} />
          <Route path='/team' element={<Team />} />
          <Route path='/profile' element={<Profiles />} />
          <Route path='/withdraw' element={<Withdraw />} />
          <Route path='/recharge' element={<Rechargeheader />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
