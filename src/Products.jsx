import React from 'react';
import './App.css';

function Products() {
  return (
    <>
      <div className="tw-bg-[#353535] tw-py-10">
        <h3 id="service" className="tw-text-center tw-text-3xl tw-font-bold tw-mb-6 tw-text-white">
          <span className="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-purple-400 tw-to-pink-600">
            Our
          </span>{' '}
          Services
        </h3>
        <p className="tw-text-center tw-text-lg tw-text-gray-300 tw-mb-10">
          Your Trusted Travel Partner – Reliable Taxi, Luxurious Cabs, and Convenient Car Rentals for Every Occasion!
        </p>

        <div className="container text-center mt-4">
          <div className="row tw-flex tw-flex-wrap">
            {/* Card 1 */}
            <div className="col-lg-4 col-md-6 tw-mb-4">
              <div className="card tw-flex tw-flex-col tw-h-full tw-transition-all tw-duration-300 hover:tw-scale-105">
                <img
                  src="/image/sr1.jpg"
                  className="card-img-top tw-w-full tw-h-[200px] tw-object-cover s200"
                  alt="Taxi Service"
                />
                <div className="card-body tw-flex-grow">
                  <p className="card-text tw-font-bold">Taxi Service</p>
                </div>
                <a href="tel:+917870139953" className="btn btn-info">
                  📞 Call Now
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4 col-md-6 tw-mb-4">
              <div className="card tw-flex tw-flex-col tw-h-full tw-transition-all tw-duration-300 hover:tw-scale-105">
                <img
                  src="/image/sr2.jpg"
                  className="card-img-top tw-w-full tw-h-[200px] tw-object-cover s200"
                  alt="Cab Service"
                />
                <div className="card-body tw-flex-grow">
                  <p className="card-text tw-font-bold">Cab Service</p>
                </div>
                <a href="tel:+917870139953" className="btn btn-info">
                  📞 Call Now
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4 col-md-6 tw-mb-4">
              <div className="card tw-flex tw-flex-col tw-h-full tw-transition-all tw-duration-300 hover:tw-scale-105">
                <img
                  src="/image/sr3.jpg"
                  className="card-img-top tw-w-full tw-h-[200px] tw-object-cover s200"
                  alt="Outstation Cab"
                />
                <div className="card-body tw-flex-grow">
                  <p className="card-text tw-font-bold">Outstation Cab</p>
                </div>
                <a href="tel:+917870139953" className="btn btn-info">
                  📞 Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="row tw-flex tw-flex-wrap">
            {/* Card 4 */}
            <div className="col-lg-4 col-md-6 tw-mb-4">
              <div className="card tw-flex tw-flex-col tw-h-full tw-transition-all tw-duration-300 hover:tw-scale-105">
                <img
                  src="/image/sr4.jpg"
                  className="card-img-top tw-w-full tw-h-[200px] tw-object-cover s200"
                  alt="Wedding Car"
                />
                <div className="card-body tw-flex-grow">
                  <p className="card-text tw-font-bold">Wedding Car</p>
                </div>
                <a href="tel:+917870139953" className="btn btn-info">
                  📞 Call Now
                </a>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-lg-4 col-md-6 tw-mb-4">
              <div className="card tw-flex tw-flex-col tw-h-full tw-transition-all tw-duration-300 hover:tw-scale-105">
                <img
                  src="/image/sr5.jpg"
                  className="card-img-top tw-w-full tw-h-[200px] tw-object-cover s200"
                  alt="Corporate Taxi"
                />
                <div className="card-body tw-flex-grow">
                  <p className="card-text tw-font-bold">Corporate Taxi</p>
                </div>
                <a href="tel:+917870139953" className="btn btn-info">
                  📞 Call Now
                </a>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-lg-4 col-md-6 tw-mb-4">
              <div className="card tw-flex tw-flex-col tw-h-full tw-transition-all tw-duration-300 hover:tw-scale-105">
                <img
                  src="/image/sr6.jpg"
                  className="card-img-top tw-w-full tw-h-[200px] tw-object-cover s200"
                  alt="Car Rental"
                />
                <div className="card-body tw-flex-grow">
                  <p className="card-text tw-font-bold">Car Rental</p>
                </div>
                <a href="tel:+917870139953" className="btn btn-info">
                  📞 Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
