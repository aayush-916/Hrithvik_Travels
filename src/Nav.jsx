
import "./App.css"
function Nav() {
  return (
    <>
      <div className="tw-bg-[#353535] tw-py-4 tw-px-4 " id="home">
        {/* Flex container with responsiveness */}
        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-start lg:tw-items-center tw-space-y-2 lg:tw-space-y-0 lg:tw-justify-between">
          {/* Left Section (Call Info) */}
          <div className="tw-flex tw-items-center tw-space-x-2 lg:tw-w-1/3">
            {/* Call Icon (Green) */}
            <i className="fa fa-phone tw-text-green-500" aria-hidden="true"></i>
            <span className="tw-text-white">
              <a href="tel:7870139953">+91 7870139953</a>
            </span>
          </div>

          {/* Middle Section (Mail Info) */}
          <div className="tw-flex tw-items-center tw-space-x-2 lg:tw-w-1/3">
            {/* Mail Icon */}
            <i className="fa fa-envelope tw-text-white" aria-hidden="true"></i>
            <a
              href="mailto:hrithviktourtravel@gmail.com"
              className="tw-text-white"
            >
              hrithviktourtravel@gmail.com
            </a>
          </div>

          {/* Right Section (Social Media Icons) */}
          <div className="tw-flex tw-justify-start lg:tw-justify-end tw-space-x-4 lg:tw-w-1/3">
            <a
              href="/f"
              target="_blank"
              rel="noopener noreferrer"
              className="tw-text-white"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="/f"
              target="_blank"
              rel="noopener noreferrer"
              className="tw-text-white"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="/f"
              target="_blank"
              rel="noopener noreferrer"
              className="tw-text-white"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="/insta"
              target="_blank"
              rel="noopener noreferrer"
              className="tw-text-white"
            >
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a
              href="https://wa.me/+917870139953"
              target="_blank"
              rel="noopener noreferrer"
              className="tw-text-white"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>


      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <p
            className="navbar-brand s2 tw-text-[#1a237e] tw-font-semibold"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Hrithvik Tour & Travels
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#service">
                OUR SERVICES
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#Gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  CONTACT US
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
