
import Home from './Pages/Home'
import { Route,Routes } from 'react-router-dom'
 import Layout from './Pages/Layout'
 import AllProducts from './Pages/AllProducts.jsx'
 import ProductDetails from './Pages/ProductDetails.jsx'
 import Cart from './Pages/Cart.jsx'
 import NoRoute from './Pages/NoRoute.jsx'
 import Wishlist from './Pages/Wishlist.jsx'
 import Categories from './Components/Categories.jsx'
    function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Layout />}  >
        <Route index element={<Home />} />
        <Route path='products' element={<AllProducts/>} />
        <Route path='/product/:id' element={<ProductDetails />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path="*" element={<NoRoute />}/>
        <Route path='/whishlist' element={<Wishlist/>}/>
        <Route path='/categories' element={<Categories/>}/>
      </Route>
    </Routes>
   
  </>
  )
}

export default App