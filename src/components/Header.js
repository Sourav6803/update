import React, { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { Typeahead } from 'react-bootstrap-typeahead'; 
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { getAProduct } from '../features/product/productSlice';
import { toast } from 'react-toastify';
import logo from "../image/logo.jpg"

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [total,setTotal] = useState(null)
  const [paginate, setPaginate] = useState(true);
  
  const cartState = useSelector(state=>state?.auth?.cartProducts)
  const authState = useSelector(state=>state?.auth)
  const productState = useSelector(state=>state?.product?.product)
  const [productOpt,setProductOpt] = useState([])
  useEffect(()=>{
    let sum = 0
    for(let i=0;i<cartState?.length;i++){
      sum += (Number(cartState[i].quantity) * Number(cartState[i].price))
      setTotal(sum)
    }
  },cartState)
  


  useEffect(()=>{
    let data = []
    for(let i=0;i<productState?.length;i++){
      const element = productState[i]
      data.push({id:i,prod:element?._id,name:element?.title})
    }
    setProductOpt(data)
  },[productState])

  const handleLogout = ()=>{
    localStorage.clear()
    toast.success("Logout Sucessfully")
    window.location.reload()
    
  }
  return (
    <>
      {/* <header className='header-top-strip bg-dark py-3 border border-bottom-white'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'> Free Shiping over $100 & free returns</p>
            </div>
            <div className='col-6'>
              <p className='text-end'>Helpline : <a className='text-white' href='tel:+91 7908104094'> +91 7908104094 </a></p>
            </div>
          </div>
        </div>
      </header> */}

      <header className='header-upper py-3 bg-dark'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-6'>
              <img src={logo} style={{width:"60%", height: "50px" , background: "transparent"}}/>
            </div>
            <div className='col-6'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link to="#" className='d-flex align-items-center gap-10 text-white'>
                    {/* <img src='images/wishlist.svg' width={"30px"} height={"30px"} alt='wishlist' /> */}
                    <p className='mb-0 fw-bold'>Home</p>
                  </Link>
                </div>
                <div>
                  <Link to="/" className='d-flex align-items-center gap-10 text-white'>
                    {/* <img src='images/user.svg' alt='user' /> */}
                    <p className='mb-0 fw-bold'>About</p>
                  </Link>
                </div>
                <div>
                  <Link to="about" className='d-flex align-items-center gap-10 text-white'>
                    <div className='d-flex flex-column gap-10'>
                      
                      <p className='mb-0 fw-bold'>Blogs</p>
                    </div>
                  </Link>
                </div>

                <div>
                  <Link to="/services" className='d-flex align-items-center gap-10 text-white'>
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-white text-dark'></span>
                      <p className='mb-0 fw-bold'>Services</p>
                    </div>
                  </Link>
                </div>

                <div>
                  <Link to="/contact" className='d-flex align-items-center gap-10 text-white'>
                    <div className='d-flex flex-column gap-10'>
                      <p className='mb-0 fw-bold'>Contact</p>
                    </div>
                  </Link>
                </div>

                <div>
                  <Link to="about" className='d-flex align-items-center S '>
                    <div className='d-flex flex-column gap-10 box'>
                      <p className='mb-0 fw-bold'>HSN Code List</p>
                    </div>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-button d-flex align-items-center gap-2'>
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-2 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src='images/menu.svg' alt='shop' />
                      <span className='me-5 d-inline-block'>Shop Catagories</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-3' >
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/my-orders">My Orders</NavLink>
                    <NavLink to="/Blogs">Blog</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <button className='border border-0 bg-transparent text-white text-uppercase' onClick={handleLogout} type='button'>Logout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}
    </>
  )
}

export default Header
