import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./customerHomepage.css";
import { useEffect } from "react";
import logo from "./assets/logo.png";
import camera from "./assets/camera.png";
import catering from "./assets/catering.png";
import decorator from "./assets/decoration.png";
import emcee from "./assets/emcee.png";
import makeup from "./assets/makeup.png";
import music from "./assets/music.png";
import venue from "./assets/venue.png";

const ServiceProvidersPage = () => {
  const [topServiceProviders, setTopServiceProviders] = useState([]);

  useEffect(() => {
    const fetchTopServiceProviders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/gettopserviceproviders"
        );
        setTopServiceProviders(response.data);
      } catch (error) {
        console.error("Error fetching top service providers:", error);
      }
    };

    fetchTopServiceProviders();
  }, []);

  return (
    // <div className="service-providers-grid_homepage">
    //   {topServiceProviders.map((provider) => (
    //     <div key={provider.id} className="provider-card-homepage">
    //       <img src={provider.profilePic} alt={provider.name} />
    //       <p className="provider-name">{provider.name}</p>
    //       <p className="provider-rating">Rating: {provider.rating}</p>
    //     </div>
    //   ))}
    // </div>


    <div className="service-providers-grid_homepage">
  <div className="provider-card-homepage">
    <img class="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTQLDneZM4Ymoi7mRUgZD5OF0Y9rDJkpyhOg&s" alt="Provider 1" />
    <p className="provider-name">Provider 1</p>
    <p className="provider-rating">Rating: 4.5</p>
  </div>
  <div className="provider-card-homepage">
    <img class="img" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRYVFRUXFRUVFRUWFhUVGBUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy4dHx0rLS0tLS0tLS0tLS0tKy0tLS0rLS0wLSsuKy0tLS0tLS0uMi0tLS0tLS0tLS0tLSstLf/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xAA6EAABAwIEBAQFAwMEAQUAAAABAAIRAwQFEiExQVFhcQYigZETobHR8DJCwSNS4RRicvHCBxYkgqL/xAAYAQADAQEAAAAAAAAAAAAAAAAAAgMBBP/EACMRAQEAAgICAgIDAQAAAAAAAAABAhEhMQNBElETIgRhoeH/2gAMAwEAAhEDEQA/AE0apnaFK2u1TK0epVqavUhAGvqi7kyEsqaFEKZB2iDq7qSjW0QlzU1WxsSSmNjWCU0zKMttFladvcIQ4eJXJqaIKo4gpI05pvC3WCUi9yiSg73xKxnCT7rNDR+GJfd09VWK/jCoDLGgd/shD4vqT5sp7Ap8ZR8T67GiX0qkFQNx6nUHIrGVRO6pAPykqegyAuKLwdip2iEFqKshnFGVQg3BDIKtbQOU1fBARsu8LVotmAhQyysrXnF7grm6gIGlVfTPFerVsOa4bKv4rgAIMBNj5Ze27IrHxARoSnNLHA4bqp3+FOaTCXfFexP8JehpeLqu1wVTxilquKWKHiorm6zJ8cdMkWemj7VLae6ZWpSZGT1Qg6tNMy3RDOaklYAY0qG4TPIEvvU8oiGk9GUqiXUkbSCKDFr9EDe3TWDVd16+VvXgq/dvLiderncAOiTamOO0N5fudOsN5lJri5P7ePE7nsEXf7bdAOi4o2EDM7T69hy7o3D6vovFIneTzk6Dv9l09obv+eiluLn+3Qc+XbmeqFNOdTPTmeqbknDXxhwCNt7rSHAxz4hQ0qB5afNNrLD87TrGm55Ld6Em2UK5Alj/AEKa2mNcKgjqNklt2Fm4HdSVGA7eU/L2Rtli1CqHahDvGqRWV25hg+38hPKbg4SCt2nZoZhz9Va7B8hU600crXhx0Cj5IDqmFzXpAhZScunOUAruJ4eDOipmLYeBOi9JuachVPGaG6t48qNqBcUIQxKe31JJKrYK641do1RVu9CArpr9VKtO2VNFA9cWr5Cnc1TDjKlV8mz3wld5qnxZA1FFMQtMI6gzprsPVbldQ0m6Fu5Mxw0n6n6oOnQzHINpE9+M9gI9Uyu6eRsDUjQdXnf0H1WYZbwwx6Hn+a+6hv26NegDMNzvLo0Gw68B+ckjxy41yj9I0J/ujh2V7xBop0dNC7SR/wDo940/7VHrWJc+I20gc+P52W4c8jP6hZZ2xcS47BWPAPDb67szgcs6fYI/DsDzVGUANiHVD13DV61hWENpsDQ0bLM/Lro+HintSGeGKLWwWnNwABP8qKt4Zc0ZmCAdHDkCvShaDlqtVaA4qX5arcMa8LxvCPhuzMOnIfmiRm7IMOBHovcsawGnVBEQeB6ryrxTgj6RhwjkeB/yrePyTLhHy+LXMLqZBAnbgUfZVMpjhuP5SPDqupYU1pNMEfub5m9RxVLwhrZ7bOkyrRhp0VPsamytuFu0S5pWaPaQ0XeVR0jopJXOxxVboq1jVJWWq7RV/F9lTDtil39PdV27bqrTfhVq+Gq7cemxbXLWZd1WId0qZjG2qIk1kvtUUGJbAkeZQNdF1TAQdVyIELBqm9JoYySQCePJLbZu5QeKXZecoMDj/wAUmd3wthNcpb26DtRsBlaOQ4u7lM7CAADwie/+Puq9SfJmPKNup59kab4ME/nf3+qW/Sk+xuP34kMGzRPv/wBD2UWD24a34z+OrR/5fbtPBJbYms+XfoGru/BoVjsM1d7abR5WxPyEIvE03CfLLay+B8Pl5qO3Op7lejNYk+BWApMAiCnVMKPdVzqGo1QOai6wUJCWxmNBVaUqu+IcMZVY5rxIPHiOoPNWaqleJbJerwrOXz/jdo62uIO0yDtIT57fIx45a/nZFeP7MOZnjVpJnpG3vCCwSrnt2g7iR/I+QXZveMrjuOsrEtm6HFvI6dtwrPhVxsqax+Vw9vt9lacL8wBCL0jnFwtKkhS1CgbGYR0KNTcOCR4sNE+cEnxRmibC8sUy/Crl+NVaL9upVbxFq7cWxbKr0NUXdYqMqch0lvUhGColrN0ZTKywJqzoCXVHoy4dogKzoHU7LBIGvLvKCJjbTift/lQ24zauO/CeCDxUeYAGdNTwmdVlGuG6k9p49Tz7KdXhjcPAE7D69Ak1zcGo6GnTieXId1LfOLtXkgRoOJH/AIhC25c4xT0aOXFbjJ7GVt6OKNMta1oLWsiZztEzvEnU8429VbvDd/QoiBcUKZ5uOc+zdlUHWVR76bHHR4JhoAgNiYHWfmntW1t6LRmtaZ6luZx7uMlUzx8fHfJfHfJN9cL83FK4Gajc29f/AGSGuPZp1Ull4+YH/DuKTqLpiYJaO43C8yqW9CoDFAt2HkkTInRpeJ2/tWWlOuAPhVszeFO4GZumobtmpmOUd0t8WP22eS2/b3hl014BEEESDwIOxWi5UTwZ4lpOItao/wBPWbtTe4ZXA6/037OG+m/dWHFsUbR3K5sscpdWL43GzgxqxxKV3sEkdF5r4hx5tV8vvABwY1r3AejdJQlnd241FzWnhlYQPYmU/wCDLXX+M/NJf+mfjOmPh1J/tI9VRvDVx+tvItcOuwP51T3HcUdUpPYSXwNHZXAu0MSI3VX8Ouy1CObYjqCCfoq44WY6qWecyzlh1fM1JH5+H6p54YvAYCU3cT039DuFBg9wadWOE/8ARWei5Tb1a3GiIa5D2PmYD0Uwao1zu3JZiLdCmkJfiA0WztilYjuVW8RVlxTdVu/Xb42rDUKilZVeog5KdIN0WzZBNR9s0IoDXCAuq50A/U6fQc0wxCoB+fJITVLnZumnYfdStPinuqIho4mT6AfhSpkZi93D9PIRu6OaYMeXVms5MeT3I/iAlt7TPmjt6QB/Kz2f0GuqhqEAfpn1PUq2+GcJmNEpw2zBgcnQvTfDOGxlJCXy5aivgx3lugq+HBl1bkjQ0q7f/tNJwHs13srJTw9r2iRPcLvHcJNWm11MhtSm4VKTiJAcAWkOHFrmuc09HKPC/EdFgy3bH2zxvnaTSJGktrAZY7weilzlJr06bZjv+0F5hTIgU+eoA/P+0FTwXNUzuzZjEnSDG0qzNxG0qasuKRHMVGH6FKcVxym0GlbEV7h/lYxhBDZ/c9w0a0byVuMzvCWWWGtqb4kwh15eMt7eM1KnNV50a3MdAT6bdUpqYC6lcsta4Dv3y06PaBsCdl6v4S8PC1pEOOerUOetU/uceA5NGwCrXje3DLu2rn9Id8J54AVPKCfXL7q+Pn/b4Y9enPl4Zr5XstNlWpN/+PSpsEEHy0y6dgcxBBGxIACW3fxKcZwHA7lrYG/FuwMa6L0NmHTtLT0UF7hojXXuFKebnlS+H6ryvGnfDyObpM9JQ9evTEOfOaJZEBxLmBzZnhDhMJt4ztHPq0qbBLnktaOpIA7DVVLGrprq5yfoZDGf8WwAe+UNHouvHLeDjyx1nTStXza/kFD/ABIe1RUGn4bTxn5Too7gy5scf+/5UdK74ev+FLvPRE7jROyFSvBdUgFvY+6uLCo5TlHLtJCX4gNEe4oK7GiIVScWZqqzfBW7GGaqqX4XZh02GtUKNoRFcQoGlYd21HW4QTCmNErKCW/cYcUFY0/KCeH0H58kxxFm4/OMIai2KRPKR7kBTqmKPBKc1iTu+Wjtufk35oh+Hy94PAcerh9iu8Gpw+m47h3sJ1+SnxK+AlzRu731KW9nk4LsKrAPpt4OI17xH51XtWG24DB2Xh1FobVp/wC1zfqF7phlUOYFHz9Rbw+09OrBhbqYkxgIdBHXUIetSkn0+iQYpRa0tNV0NJ4mB0ElSwq90nq0KF07+nZ2551X0WEDqNPMmNg20tPI51Om6Y2awHlA0Clwu4p5QGOZHRzUZc4bTrDzBp66FPbbwWjaNVh/eIVf8QWtKt/RfBDwQe0IG7sa1AFtL9PDWMo5Dokr7So50vJHYn580Sf2ymGF317SBY1rLtrPLq/4dcAbamW1NOOhXV/4kdlIfZ3DD1FMj3Dl0WZQ2ozRwEH/AHD7hSYhfgt83JN8pe4yY/VeceJ8Zc3VlIiq9rqbHPIljXD+o5rRIBI0knYkcVSaNKXZd+Z68Sm/jW/zXJaP2tA99T/CFwtoG+5XXL+rizm86fG0ik0xoNPYa/NK2UZqDluPZPBdAsazmHT6kR9UPbURJO+qSGyWvwmzc8oHsFbqKq+CDIwfNWK3rKeTnotC3WyKBQt1ssjFTxcKq4g1W7FWKr37F1YNMLpAhyOrnRLm7rYeCqbUfRGiBpFGUnrKEN1R1UVO3/pkdZ+RP1RFdymZcMYyXbyCB9Z5BTzU8ZWwFpd026EiCSVz/oy1oqO22YNpP9xCKdesLgXwBOjQNXHoEPjGJRvGaIDeDBzd1Sdn3IQYrcFuo3mfbb86L1zwbi4qUxrwHsQvE70l0noQPUkq4+Fq76VKnVExEOH8o8uG8dN8WesnsjnTBXVbDqdUZKjQ5p4Hr/lK8MvRUYCCnlm6QOYXDOK7L0SW+CW1H+m+n5QdHN8rgJkzG+/siv8A21OtC4BBeYD2/tAP7hBO3JNb6iHDqgG3vwhBYdJhw4duXuuiZb7Et1+l1f8AC25t79gIyZgNJa8Hltm14qs45i1ehHxKRkkhrfKXOI00yn5q1VsXqEGHu57fyllpQz1c7xJHE6kazx9Vu59Hsyk/awR4etqlSkH1W/DzickyWjmTziNOqTeIGimH1SfK05Wjm7/A+qtd3dZWQNz+ewXlH/qPjwdFFh0E+pP6ilwnyyc+eXxxUC/uviVn1P7nH22HyCKs3mR0QFOlKaW9PLBJHI/wV23pw+zhjSQOn0/NfRNbGjEDlCHwuk14yuMEQQdNOXpw/CjjULDDhBGmg0PbkeikpejmhUiAmdpVKSWVcO1nvz9k6tiIRk5zNtxooK9dRluiHqFJAX4iVXL0J/fbJBdrowAiqNECRqj3JdWMOTQ8HUmqSVBQeunOQxxc3IZvvwCWVbtzjlYJcduIHVEXIaSC46TJ5n7DqgnX+WSxsco0aOpO57qV5qs4iRtqacve6XEc9fV3AdkrrVpOomeA2hcuuC4+Ylzj7AdAum0AACe8dOAQETyNZO/4FbfBmJ0S00XODTwa793Y8eypV9V8wHTQDYCTAQ6b4fKEnk+N4exYbeG1q5HfoJ8p5TwV3w++adjuvnm2x6u1uQvL28A7Ujs7cJ9gnjJ1IgEkt5Hcfdc/k/j3uOnD+Rj1X0CwhwUde1BCp3h7xnSqCM4nkrU3EA5sjZR1rtec8wNVtQgq7RTBJ0RdxiDGiXGF5d458chxNOidBuQtxwuV1GZ5zGbqfxX4qDAQ06nQdl5le1XPcXOMkrj47nulxkk6lSmJ12XZjhMXDn5Lk4oMnRSvfmbHEfNYagFSW7cFzc1mlwIETunILw6/eNQfMz5jr0T3/Xiq2entG49PoqnSqljg736jYptbVAHeXY6j329iksPKZNruZrO2xG/pzHQ+ysuBYmag13Gh68iqXTuIzMOo1j02/hWTwo2GE83H5QErM14pOkIWsV1SraKN5lIkU370huSrBiDEiuGq+DUtR6BuCi7obpdVemhoKo1FFVu9Y34rlmoWmUmszVHiZPlbO45nk1JndHxnLmjhtWtLiQ1g3JMM9z+o9AEBiD2nyMMtG7hsT05rvEMRfUIYDDRwGgjkBwCAq1Mug3SSU1sba0M149d/8cFpznGARHE9oUQcSDzPE6mByH5stVnwCN+BPt91SRO5Bq3mJK4a6FvMtloKom0W8lyVmQjZcku6ICWlXc3UFPrDxrdUhAeT31VZJPJc50txl7NMrOqsGJ+LbmsIc92vp9Ei1O64Dui6glEknQuVvaehEzyUjWZigiIMBEW9w4TKKIkDIPNTVaGoIXFtTL3ADclWAW4p+WoJaf3D9p/kJLdHk2rbmaxvz+yZ4c3zCNREnprELm/sHB4Y0SHah3AjnKZ2lEUqJPFxAHMkcewBn1CLeBJyDt7cl7idgSfb8HurLg3lhvr77/NCUqIDAIjMZPOIkD1Jn25Iu1MEn80WQZLAypopqZSyncI6hWEJdJoL8pBclOcQqJBcPVMRBd2lFVNr7Qpa9qaGjui7RcXnmDukevE/ILqloJ5JdiF+BLW6u4ngPyEmU3Ty6gRzw3zHfh6oZ1Uu+wC0TrJ1Kwu/OCeY6TuW25Ma+33XL9vqtErSZjgtURpcj6FELSGIDUcNwtis0qaFw6mCgOdOa5IHNYbcc1yaHVAdQFpzwFr4I4lZA2AQHLROqnDdB3K1lWwYWWNOMFhrvmT/AAFNjOJg6Djt0CHsaWY5Tpmkg99lxiOGupPGccYUvavo1wkuZTAeZnYHh0RFUNIEjQaN6xq4xy4egQNKrrPWB06ru/qeUvndmVveYcQl7MMs7wPc7nM+/wCFGs0VRwm4y1RP7law5V1pLe0xcpqNwVA3VE06SViK5eSllUJtVal1yE2LIOxFiUVjGp0Ca3dWVWcdrahvST66D6H3Wxu0N3iZMtZoOfH05JdmWFahay1kra3lXK1ja2tArJQGLFkrEBpbhYsQHBauC0qZYgIPhniV01ikhYUBzC04LtaKAPw6qHNyEw4foPPpKNr4gXNiqNR5XSNRGzgkY0ghS1K+aZSXE8yOKNDMwlpnKgq7/wCiQd2v+RCDsL51M6HTbujqzmVGy3Q7kcNOqXWqbe4VMfBB5FXazOZoPMBUY7q34HWmm32T1OG4bClZWQrqiiFSEugJrVEvrvXbnoaotjdCqrlW8UdNR3cD2AVmqU1VLwzUf/yd9U0FQFaCwrFpXRXJC6atEIDlYsK1KAwFdLg810EBixYsQGLFixAYsW1iA0sWLEBhWoW1pAcFqxpIXZC5hARA6qyYA/yRyKrTU/8ADjv1D1Q06BJXRYV3QClqkQloDZVBWKlfUQVd6JGrBeU4VJxSnlqvHMz76/WVcr+qqnjg8zXcxHsZ/lGIpctLCtJiuwsJXK6QGlorZXKA5cttXLyumlAdFYtLEBtZK1K2gMWLFiAxYVi0UBtaWLEBtaKxYgIOKbYBUipHMJU/dEWNTK9p6oC2PqwuHV0PXkqNoRoyYvlQVFMwKOugP//Z" alt="Provider 2"/>
    <p className="provider-name">Provider 2</p>
    <p className="provider-rating">Rating: 4.7</p>
  </div>
  <div className="provider-card-homepage">
    <img class="img" src="data:image/jpeg;base64,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" alt="Provider 3" />
    <p className="provider-name">Provider 3</p>
    <p className="provider-rating">Rating: 4.2</p>
  </div>
</div>

  );
};

const CustomerHomepage = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3001/profile/logout");
      sessionStorage.clear();
      navigate("/customerlogin");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="homepage">
      <header className="header">
        <img src={logo} height={100} alt="Logo" className="logo mx-5" />
        <nav className="nav-links">
          <a href="/customerhomepage">Cart</a>
          <a href="/customerhomepage">Order History</a>
          <a href="/customerhomepage">Profile</a>
          <a href="/customerhomepage" onClick={handleLogout}>
            Logout
          </a>
        </nav>
      </header>

      <div className="search-bar">
        <h1>
          Your Event, <span>Your Way</span>
        </h1>
        <div className="searchbox">
          <select className="searchpackage">
            <option value="">Search packages by category</option>
            <option value="wedding">Wedding</option>
            <option value="birthday">Birthday</option>
          </select>
          <button className="searchbutton">Search</button>
        </div>
      </div>

      <div className="suppliercategory">
        <div className="titlerow">
          <h2>Seller Categories</h2>
          <button onClick={toggleShowMore}>
            {showMore ? "View Less" : "View More"}
          </button>
        </div>
        <div className="suppliercategorybox">
          <div className="rowwise">
            <div
              className="suppliericon text-center"
              onClick={() =>
                navigate("/serviceproviders/photographer_videographer")
              }
            >
              <img
                src={camera}
                height={100}
                alt="Photographer"
                className="logo mx-5"
              />
              <p className="category">Photographer</p>
            </div>
            <div
              className="suppliericon text-center"
              onClick={() => navigate("/serviceproviders/venue")}
            >
              <img
                src={venue}
                height={100}
                alt="Venue Planner"
                className="logo mx-5"
              />
              <p className="category">Venue Planner</p>
            </div>
            <div
              className="suppliericon text-center"
              onClick={() => navigate("/serviceproviders/makeup_hairstylish")}
            >
              <img
                src={makeup}
                height={100}
                alt="Makeup Artist"
                className="logo mx-5"
              />
              <p className="category">Makeup Artist</p>
            </div>
            <div
              className="suppliericon text-center"
              onClick={() => navigate("/serviceproviders/decorator")}
            >
              <img
                src={decorator}
                height={100}
                alt="Decorator"
                className="logo mx-5"
              />
              <p className="category">Decorator</p>
            </div>
          </div>
          {showMore && (
            <div className="rowwise">
              <div
                className="suppliericon text-center"
                onClick={() => navigate("/serviceproviders/Music")}
              >
                <img
                  src={music}
                  height={100}
                  alt="Music"
                  className="logo mx-5"
                />
                <p className="category">Music</p>
              </div>
              <div
                className="suppliericon text-center"
                onClick={() => navigate("/serviceproviders/emcee")}
              >
                <img
                  src={emcee}
                  height={100}
                  alt="Emcee"
                  className="logo mx-5"
                />
                <p className="category">Emcee</p>
              </div>
              <div
                className="suppliericon text-center"
                onClick={() => navigate("/serviceproviders/Catering")}
              >
                <img
                  src={catering}
                  height={100}
                  alt="Catering"
                  className="logo mx-5"
                />
                <p className="category">Catering</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="topservices">
        <div className="titlerow">
          <h2>Top Sellers</h2>
        </div>
        <ServiceProvidersPage />
      </div>

      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-muted">© 2021 Creations-Goa, Inc</p>

          <a
            href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <svg class="bi me-2" width="40" height="32"></svg>
          </a>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <a href="/" class="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="/about" class="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default CustomerHomepage;
