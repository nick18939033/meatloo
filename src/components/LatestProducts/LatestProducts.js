import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./styles.css";
import ProductCard from "../ProductCard/ProductCard";


const LatestProducts = ({ products }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 15500,
    smartSpeed: 250,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1300: {
        items: 4,
      },
    },
  };
  return (
    <>
      {width < 1400 && (
        <section
          id="testimonial"
          className="testimonials pt-70 pb-70  my-5 py-4 rounded-md"
        >
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-12 self-center">
                <h1 className=" self-center text-4xl   ">Latest Products</h1>
                <OwlCarousel
                  id="customer-testimonoals"
                  className="owl-carousel owl-theme"
                  {...options}
                >
                  {products.map((product) => {
                    return <ProductCard product={product} key={product._id} />;
                  })}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>
      )}

      {width > 1400 && (
        <div
          data-aos="fade-up"
          className="flex flex-col items-center w-full  my-5 py-4 rounded-md"
        >
          <h1 className=" self-center text-4xl  ">Latest Products</h1>
          <hr />
          <div className="horizontal-scroll  py-2 px-3 lg:justify-center scrollbar-thin space-x-5 scrollbar scrollbar-thumb-stone-800 scrollbar-track-gray-300">
            {products.map((product) => {
              return <ProductCard product={product} small={true} key={product._id} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default LatestProducts;
