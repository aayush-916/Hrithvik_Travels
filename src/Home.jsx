import Nav from "./Nav";
import Products from "./Products";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaRupeeSign, FaCarAlt, FaUserTie, FaClock } from "react-icons/fa";
import "./App.css";
//npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
function Home() {
  return (
    <>
    

      <Nav/>
      {/* Slicer image */}
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Carousel Inner */}
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="/image/pic2.jpg"
              className="d-block img_size"
              alt="First slide"
            />
            <div className="carousel-caption  d-md-block">
            <a href="tel:7870139953" className='btn btn-info mb' >📞 Call Now</a>
          </div>
          </div>
          

          {/* Second Slide */}
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="/image/pic3.jpg"
              className="d-block img_size"
              alt="Second slide"
            />
          </div>

          {/* Third Slide */}
          <div className="carousel-item">
            <img
              src="/image/pic6.jpg"
              className="d-block img_size"
              alt="Third slide"
            />
          </div>
        </div>

        {/* Previous Control */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* Next Control */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>><>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <Products/>
      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <section className="tw-bg-gray-100 tw-py-12 tw-text-center">
  <h2 className="tw-text-4xl tw-font-bold tw-text-violet-800 tw-mb-8">
    Why Choose Us
  </h2>
  <p className="tw-text-lg tw-mb-12 tw-max-w-2xl tw-mx-auto">
    Discover the best car, cab, and rental services with us. Trusted by countless travelers across India, we provide unparalleled reliability, comfort, and affordability tailored to your journey.
  </p>

  <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8">
    {/* Affordable Pricing */}
    <div className="tw-bg-white tw-rounded-lg tw-py-8 tw-shadow-md tw-transition-transform tw-duration-300 hover:tw-scale-105">
      <FaRupeeSign className="tw-text-5xl tw-text-green-600 tw-mb-4 tw-mx-auto" />
      <h3 className="tw-text-2xl tw-font-bold">Affordable Pricing</h3>
      <p className="tw-text-gray-700 tw-mt-2">
        Enjoy budget-friendly rates with no hidden charges. Travel affordably across India.
      </p>
    </div>

    {/* Wide Range of Vehicles */}
    <div className="tw-bg-white tw-rounded-lg tw-py-8 tw-shadow-md tw-transition-transform tw-duration-300 hover:tw-scale-105">
      <FaCarAlt className="tw-text-5xl tw-text-blue-600 tw-mb-4 tw-mx-auto" />
      <h3 className="tw-text-2xl tw-font-bold">Wide Range of Vehicles</h3>
      <p className="tw-text-gray-700 tw-mt-2">
        Choose from luxury sedans, spacious SUVs, and budget-friendly hatchbacks to suit your needs.
      </p>
    </div>

    {/* Experienced Drivers */}
    <div className="tw-bg-white tw-rounded-lg tw-py-8 tw-shadow-md tw-transition-transform tw-duration-300 hover:tw-scale-105">
      <FaUserTie className="tw-text-5xl tw-text-orange-500 tw-mb-4 tw-mx-auto" />
      <h3 className="tw-text-2xl tw-font-bold">Experienced Drivers</h3>
      <p className="tw-text-gray-700 tw-mt-2">
        Travel with professional, courteous drivers ensuring a safe and comfortable journey.
      </p>
    </div>

    {/* 24/7 Availability */}
    <div className="tw-bg-white tw-rounded-lg tw-py-8 tw-shadow-md tw-transition-transform tw-duration-300 hover:tw-scale-105">
      <FaClock className="tw-text-5xl tw-text-purple-600 tw-mb-4 tw-mx-auto" />
      <h3 className="tw-text-2xl tw-font-bold">24/7 Availability</h3>
      <p className="tw-text-gray-700 tw-mt-2">
        Book your ride anytime, anywhere. We're always ready to serve you.
      </p>
    </div>
  </div>
</section>


      {/* >>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}

      <section className="tw-bg-gray-100 tw-py-12 tw-text-center" id="Gallery">
  <h2 className="tw-text-4xl tw-font-bold tw-text-violet-800 tw-mb-8">
    Our Car Gallery
  </h2>
  <p className="tw-text-lg tw-mb-12 tw-max-w-2xl tw-mx-auto">
    Explore our wide selection of cars, from luxury to economy, all available for rent to meet your needs!
  </p>

  <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-8 tw-mx-4">
    {/* Image 1 */}
    <div className="tw-relative tw-overflow-hidden tw-rounded-lg tw-shadow-lg hover:tw-scale-105 tw-transition-all">
      <img src="./image/sr5.jpg" alt="Car 1" className="tw-w-full tw-h-64 tw-object-cover s200" />
    </div>

    {/* Image 2 */}
    <div className="tw-relative tw-overflow-hidden tw-rounded-lg tw-shadow-lg hover:tw-scale-105 tw-transition-all">
      <img src="./image/sr2.jpg" alt="Car 2" className="tw-w-full tw-h-64 tw-object-cover s200" />
    </div>

    {/* Image 3 */}
    <div className="tw-relative tw-overflow-hidden tw-rounded-lg tw-shadow-lg hover:tw-scale-105 tw-transition-all">
      <img src="./image/sr6.jpg" alt="Car 3" className="tw-w-full tw-h-64 tw-object-cover s200" />
    </div>

    {/* Image 4 */}
    <div className="tw-relative tw-overflow-hidden tw-rounded-lg tw-shadow-lg hover:tw-scale-105 tw-transition-all">
      <img src="./image/sr3.jpg" alt="Car 4" className="tw-w-full tw-h-64 tw-object-cover s200" />
    </div>

    {/* Image 5 */}
    <div className="tw-relative tw-overflow-hidden tw-rounded-lg tw-shadow-lg hover:tw-scale-105 tw-transition-all">
      <img src="./image/mg1.jpg" alt="Car 5" className="tw-w-full tw-h-64 tw-object-cover s200" />
    </div>

    {/* Image 6 */}
    <div className="tw-relative tw-overflow-hidden tw-rounded-lg tw-shadow-lg hover:tw-scale-105 tw-transition-all">
      <img src="./image/mg2.jpg" alt="Car 6" className="tw-w-full tw-h-64 tw-object-cover s200" />
    </div>

    {/* Image 7 */}
    <div className="tw-relative tw-overflow-hidden tw-rounded-lg tw-shadow-lg hover:tw-scale-105 tw-transition-all">
      <img src="./image/mg3.jpg" alt="Car 7" className="tw-w-full tw-h-64 tw-object-cover s200" />
    </div>

    {/* Image 8 */}
    <div className="tw-relative tw-overflow-hidden tw-rounded-lg tw-shadow-lg hover:tw-scale-105 tw-transition-all">
      <img src="./image/sr1.jpg" alt="Car 8" className="tw-w-full tw-h-64 tw-object-cover s200" />
    </div>
  </div>
</section>


  {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
  <div id="about" className="tw-bg-white tw-py-16 tw-px-4">
  <h2 className="tw-text-4xl tw-text-center tw-font-bold tw-mb-8 tw-text-gray-800">
    Why Our Clients Love <span className="tw-text-violet-800 tw-font-extrabold tw-font-mono tw-italic">Hrithvik Tour & Travels</span>
  </h2>
  <p className="tw-text-center tw-text-gray-600 tw-mb-12">
    Trusted by more than 500 customers for car rentals, taxi services, and corporate travel needs. Here's what they have to say about us.
  </p>
  
  <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-max-w-6xl tw-mx-auto">
    <div className="tw-bg-gray-100 tw-shadow-lg tw-rounded-lg tw-overflow-hidden tw-transition-transform tw-transform hover:tw-scale-105">
      <div className="tw-p-6">
        <blockquote className="tw-text-gray-600">
          "Hrithvik Tour & Travels made our family trip hassle-free. The car was comfortable, and the driver was professional. Highly recommend for any long-distance travel!"
        </blockquote>
        <p className="tw-mt-4 tw-font-bold tw-text-gray-800">- Priya, Travel Enthusiast</p>
      </div>
    </div>

    <div className="tw-bg-gray-100 tw-shadow-lg tw-rounded-lg tw-overflow-hidden tw-transition-transform tw-transform hover:tw-scale-105">
      <div className="tw-p-6">
        <blockquote className="tw-text-gray-600">
          "We booked a corporate taxi service for our business trips. The service was punctual and top-notch. Our employees were impressed with the comfort and convenience."
        </blockquote>
        <p className="tw-mt-4 tw-font-bold tw-text-gray-800">- Ramesh, Corporate Manager</p>
      </div>
    </div>

    <div className="tw-bg-gray-100 tw-shadow-lg tw-rounded-lg tw-overflow-hidden tw-transition-transform tw-transform hover:tw-scale-105">
      <div className="tw-p-6">
        <blockquote className="tw-text-gray-600">
          "The wedding car service from Hrithvik Tour & Travels was amazing! The car was beautifully decorated, and the driver was professional and courteous. We felt like royalty!"
        </blockquote>
        <p className="tw-mt-4 tw-font-bold tw-text-gray-800">- Neha, Bride</p>
      </div>
    </div>
  </div>
</div>

<div className="tw-fixed tw-bottom-4 tw-right-4 tw-flex tw-justify-end tw-items-center">
  <a
    href="https://wa.me/+917870139953"
    target="_blank"
    rel="noopener noreferrer"
    className="tw-bg-green-500 tw-p-2 tw-rounded-full tw-shadow-lg tw-transition-transform tw-transform hover:tw-scale-110"
  >
    <img
      src="/image/whatsapp-icon.webp"
      alt="WhatsApp"
      className="tw-w-10 tw-h-10"
    />
  </a>
</div>
    
{/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

<footer className="tw-bg-[#15161d] tw-text-white tw-pt-8 tw-pb-4">
  <div className="container tw-max-w-screen-xl tw-mx-auto tw-px-4 md:tw-px-8">
    {/* Company Name */}
    <div className="tw-text-center tw-mb-6">
      <h2
        className="tw-text-3xl tw-font-bold tw-text-[#f5ba31] tw-mb-2"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Hrithvik Tour & Travels
      </h2>
      <p className="tw-text-gray-300">
      Trusted by more than 500 customers for car rentals.
      </p>
    </div>

    {/* Contact Info Section */}
    <div id="contact" className="tw-text-center tw-mb-6">
      <h3 className="tw-text-2xl tw-font-semibold tw-mb-4">Contact Us</h3>
      <p className="tw-text-gray-300">
        Contact Number:{" "}
        <a href="tel:7870139953" className="tw-text-[#f5ba31]">
          +91 7870139953
        </a>
      </p>
      <p className="tw-text-gray-300">
        Email:{" "}
        <a href="mailto:balalitrading@gmail.com" className="tw-text-[#f5ba31]">
        hrithviktourtravel@gmail.com
        </a>
      </p>
      <p className="tw-text-gray-300">
      Adress:- Shop-2, Mangal Market, Lekha nagar, Saguna Khagaul Road, patna bihar -801503
      </p>
      <p className="tw-text-gray-300">
      Owner Name :- Hrithvik Singh
      </p>
      <p className="tw-text-gray-300">
      Manager :- Abhishek Pradhan
      </p>
      <p className="tw-text-gray-300">
      Manager:- Rudra Singh
      </p>
      <p className="tw-text-gray-300">
      Manager:- Viraj Singh
      </p>
    </div>

    {/* Footer Bottom */}
    <div className="tw-text-center tw-pt-4 tw-border-t tw-border-gray-600 tw-mt-6">
      <p className="tw-text-gray-400">
        &copy; 2025 Hrithvik Tour & Travels. All rights reserved.
      </p>
      <a href="https://leafcode.in" className="tw-text-gray-400">
        Developed by Leafcode Technology
      </a>
    </div>
  </div>
</footer>



    </>
  );
}

export default Home;
