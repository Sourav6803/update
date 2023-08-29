import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";



import Container from "../components/Container";
import services from "../utils/Data";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getAllBlogs } from "../features/blogs/blogSlice";
import {
  addToWishlist,
  getAllProducts,
} from "../features/product/productSlice";
import ReactStars from "react-rating-stars-component";

const Home = () => {
  const navigate = useNavigate()
  const blogState = useSelector((state) => state.blog.blog);
  const productState = useSelector((state) => state.product.product);

  const dispatch = useDispatch();

  useEffect(() => {
    getBlogs();
    getProducts();
  }, []);
  const getBlogs = () => {
    dispatch(getAllBlogs());
  };
  const getProducts = () => {
    dispatch(getAllProducts());
  };
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        {/* <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative p-3">
              <img
                src="images/main-banner-1.jpg"
                alt="banner"
                className="img-fluid rounded-3"
              ></img>
              <div className="main-banner-content position-absolute">
                <h4>Best sale</h4>
                <h5>iPad s13 pro</h5>
                <p>From $999 or $41.78/month</p>
                <Link className="button">Buy Now</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center p-3">
              <div className="small-banner position-relative">
                <img src="images/catbanner-01.jpg" alt="banner" className="img-fluid rounded-3"></img>
                <div className="small-banner-content position-absolute">
                  <h4>New arrival</h4>
                  <h5>Buy Laptop here</h5>
                  <p>
                    From $999 or <br />
                    $41.78/month
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-02.jpg" alt="banner" className="img-fluid rounded-3"></img>
                <div className="small-banner-content position-absolute">
                  <h4>Best sale</h4>
                  <h5>Buy smart watch</h5>
                  <p> From $999 or <br /> $41.78/month </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-03.jpg" alt="banner" className="img-fluid rounded-3"></img>
                <div className="small-banner-content position-absolute">
                  <h4>New arrival</h4>
                  <h5>iPad S13+ pro</h5>
                  <p>
                    From $999 or <br /> $41.78/month
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-04.jpg"
                  alt="banner"
                  className="img-fluid rounded-3"
                ></img>
                <div className="small-banner-content position-absolute">
                  <h4>New Arrival</h4>
                  <h5>
                    Buy Headphone <br /> here
                  </h5>
                  <p>From $999 or $41.78/month</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <h1>Home</h1>
      </Container>

     
    </>
  );
};

export default Home;
