import React from "react";
import Profile1 from "./images/Profile1.jpg";
import Profile2 from "./images/Profile2.jpg";
import Profile3 from "./images/Profile3.jpg";
import Profile4 from "./images/Profile4.JPG";
import Profile5 from "./images/Profile5.JPG";

  function Team() {
    const teamMembers = [
      {
        name: "Pranitha Bollepalli",
        description: "Masters Student in Computer Science at Saint Louis University",
        role: "Website Developer",
        img: Profile1
      },
      {
        name: "Jeetkumar Patel",
        description: "Masters Student in Computer Science at Saint Louis University",
        role: "Content Validator",
        img: Profile3
      },
      {
        name: "Josh Udczynski",
        description: "Masters Student in Computer Science at Saint Louis University",
        role: "Report Writer",
        img: Profile5
      },
      {
        name: "Manoj",
        description: "Masters Student in Computer Science at Saint Louis University",
        role: "Content Validator",
        img: Profile4
      },
      {
        name: "Sri Vaagdevi Bangari",
        description: "Masters Student in Computer Science at Saint Louis University",
        role: "Website Developer",
        img: Profile2
      },
    ];
  
    return (
      <section id="team">
        <h2>Meet the Team</h2>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={member.img} alt={`Team Member ${index + 1}`} />
                    <h3>{member.name}</h3>
                    <p>{member.description}</p>
                  </div>
                  <div className="flip-card-back">
                    <h3>{member.name}</h3>
                    <p className="role">{member.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Team;
  
  