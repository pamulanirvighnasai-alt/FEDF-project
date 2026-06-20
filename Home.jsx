import Feature from "../components/Feature";
import Doctor from "../components/Doctor";
import Testimonials from "../components/Testimonials";
import "../Styles/Home.css";

function Home() {
  return (
    <>

      <section className="hero">

        <div>

          <h1>Your Health, Our Priority</h1>

          <p>
            Consult expert doctors anytime anywhere.
          </p>

          <button>Book Appointment</button>

        </div>

        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
          alt=""
        />

      </section>

      <Feature />

      <Doctor />

      <Testimonials />

    </>
  );
}

export default Home;