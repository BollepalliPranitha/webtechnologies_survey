import React from "react";
import Profile1 from "./images/Profile1.jpg";
import Profile2 from "./images/Profile2.jpg";
function Team() {
  return (
    <section id="team">
      <h2>Meet the Team</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <img src={Profile1} alt="Team Member 1" />
          <h3>Pranitha Bollepalli</h3>
          <p>Masters Student in Computer science at Saint Louis University.</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/150" alt="Team Member 2" />
          <h3>Jeetkumar patel</h3>
          <p>Masters Student in Computer science at Saint Louis University.</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/150" alt="Team Member 3" />
          <h3>Josh udzynski</h3>
          <p>Masters Student in Computer science at Saint Louis University.</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/150" alt="Team Member 4" />
          <h3>Manoj</h3>
          <p>Masters Student in Computer science at Saint Louis University.</p>
        </div>
        <div>
          <img src={Profile2} alt="Team Member 5" />
          <h3>Sri Vaagdevi Bangari</h3>
          <p>Masters Student in Computer science at Saint Louis University.</p>
        </div>
      </div>
    </section>
  );
}

export default Team;
