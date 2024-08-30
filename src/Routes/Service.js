import React from 'react';
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutImg from "../Assets/service.png";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";
// import TripData from "../Components/TripData"; // Assuming TripData is another component
// import Trip1 from "../Assets/2.jpeg"; // Replace with the correct image path
import ServiceImg from "../Assets/ser.jpg";

function Service() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Service"
                btnClass="hide"
            />
            <div style={{ paddingTop: "500px", paddingBottom: "20px", textAlign: "center" }}>
            <h1 style={{ paddingTop: '150px', paddingBottom: '5px' }}> Transforming Your Travel Dreams into Reality</h1>

            <div style={{
    maxWidth: "8000px",
    margin: "0 auto",
    height: "1000px",
    paddingTop: "5px",
    borderRadius: "10px",
    width: "80%",
    textAlignLast: "start", 
    textAlign: "start",
    boxShadow: "0 -5px 9px 2px rgba(0, 0, 0, 0.19), 0 5px 9px 2px rgba(0, 0, 0, 0.19)",
    backgroundColor: "#fff",
    marginTop: "100px",
    padding: "50px",
}}>
                    <img 
                        src={ServiceImg}
                        alt="Service"
                        style={{
                            width: "100%",
                            height: "500px",
                            marginTop:"1px",
                            borderRadius: "10px",
                            marginBottom: "20px",
                        
                        }}
                    />

<p> At our travel agency, we pride ourselves on delivering exceptional services tailored to meet the unique needs of every traveler. From personalized itineraries that highlight both popular and hidden destinations to seamless booking experiences, we ensure every aspect of your trip is meticulously planned. Our dedicated team of travel experts is available around the clock to assist with any inquiries or adjustments, providing peace of mind at every step. We also offer specialized services such as guided tours, luxury accommodations, and exclusive access to events, making your journey unforgettable.<br></br> <br></br>We also collaborate with local communities to offer authentic experiences that go beyond the typical tourist attractions, ensuring that your travels leave a positive impact. Our commitment to excellence extends to every detail, ensuring that your journey is as comfortable and rewarding as possible. By continually refining our offerings based on client feedback, we strive to exceed your expectations on every trip. We are passionate about making your travel dreams a reality, and we’re with you every step of the way, from planning to your safe return home. Our services are built on a foundation of trust, reliability, and a genuine love for exploring the world. Let us handle the details so you can focus on creating memories that will last a lifetime. </p>











                </div>
            
                <Trip />
            </div>
            <Footer />
        </>
    );
}

export default Service;
