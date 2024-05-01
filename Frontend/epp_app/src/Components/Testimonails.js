// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Testimonials() {
//     const [testimonials, setTestimonials] = useState([]);

//     useEffect(() => {
//         axios.get('/api/testimonials')
//             .then(response => {
//                 setTestimonials(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching testimonials:', error);
//             });
//     }, []);

//     return (
//         <div>
//             <div id="header">
//                 <img id="logo" src="./Modern Minimal Name Initials Logo .png" alt="Logo" />
//                 <div id="buttons">
//                     <button className="button">sign-up</button>
//                     <button className="button">sign-in</button>
//                 </div>
//             </div>

//             <div className="text-container">
//                 <div className="website-name">Creations</div>
//                 <div className="description">Celebrate in style.</div>
//             </div>

//             <div className="testimonial-container">
//                 <div className="testimonial">
//                     <p>"This website is amazing! I found exactly what I was looking for."</p>
//                     <div className="profile">
//                         <img src="..\..\public\profile1.jpg" alt="Profile Picture" />
//                         <span className="name">John Doe</span>
//                     </div>
//                 </div>
//                 <div className="testimonial">
//                     <p>"I've been using this website for years, and it never disappoints."</p>
//                     <div className="profile">
//                         <img src="..\..\public2.webp" alt="Profile Picture" />
//                         <span className="name">Jane Smith</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Testimonials;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);
  
    useEffect(() => {
        axios.get('/api/testimonials')
            .then(response => {
                setTestimonials(response.data);
            })
            .catch(error => {
                console.error('Error fetching testimonials:', error);
            });
    }, []);

    return (
        <div>
            <div id="header">
                <img id="logo" src="./Modern Minimal Name Initials Logo .png" alt="Logo" />
                <div id="buttons">
                    <button className="button">sign-up</button>
                    <button className="button">sign-in</button>
                    <button className="button">Join as Vendor</button>
                    <Link to="/AboutUs">
                        <button className="button">About Us</button>
                    </Link>
                </div>
            </div>

            <div className="text-container">
                <div className="website-name">Creations</div>
                <div className="description">Celebrate in style.</div>
            </div>

            <div className="testimonial-container">
                {testimonials.map(testimonial => (
                    <div className="testimonial" key={testimonial._id}>
                        <p>{testimonial.text}</p>
                        <div className="profile">
                            <img src={testimonial.profile.picture} alt="Profile Picture" />
                            <span className="name">{testimonial.profile.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
