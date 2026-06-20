import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{padding:"50px"}}>

      <h1>Patient Dashboard</h1>

      <h3>Welcome Back!</h3>

      <Link to="/book">
        <button>
          Book Appointment
        </button>
      </Link>

    </div>
  );
}

export default Dashboard;