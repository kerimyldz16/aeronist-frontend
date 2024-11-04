import React, { useState } from "react";
import "../styles/TeamPage.css";
import teamData from "../data/team.json";

function TeamPage() {
  const [teamMembers, setTeamMembers] = useState(teamData);

  const deleteMember = (id) => {
    const updatedMembers = teamMembers.filter((member) => member.id !== id);
    setTeamMembers(updatedMembers);
  };

  return (
    <section className="team-section">
      <h2 className="section-title">Kadromuz</h2>
      <div className="team-hierarchy">
        {teamMembers.management.map((member, index) => (
          <div key={member.id} className="team-card">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="member-img"
              />
            ) : (
              <div className="member-placeholder">Resim Yok</div>
            )}
            <h3 className="member-title">{member.title}</h3>
            <p className="member-name">{member.name}</p>
            <button
              className="delete-btn"
              onClick={() => deleteMember(member.id)}
            >
              Sil
            </button>
          </div>
        ))}
      </div>
      <div className="team-list">
        <h3 className="section-subtitle">Diğer Üyeler</h3>
        <ul className="member-list">
          {teamMembers.members.map((member) => (
            <li key={member.id} className="member-list-item">
              {member.name}
              <button
                className="delete-btn"
                onClick={() => deleteMember(member.id)}
              >
                Sil
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TeamPage;
