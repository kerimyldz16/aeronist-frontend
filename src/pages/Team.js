import React, { useState } from "react";
import "../styles/Team.css";
import teamData from "../data/team.json";

function Team() {
  const [team, setTeam] = useState(teamData);

  const renderManagementTree = (members, level = 0) => {
    const currentLevelMembers = members.filter(
      (member) => member.level === level
    );

    return (
      <div className="hierarchy-level">
        {currentLevelMembers.map((member) => (
          <div key={member.id} className="team-card">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="team-card-img"
              />
            ) : (
              <div className="team-card-placeholder">No Image</div>
            )}
            <h3 className="team-card-title">{member.title}</h3>
            <p className="team-card-name">{member.name}</p>
          </div>
        ))}
        {currentLevelMembers.length > 0 &&
          renderManagementTree(members, level + 1)}
      </div>
    );
  };

  const renderMemberList = (members) => {
    const regularMembers = members.filter((member) => member.role === "member");
    return (
      <ul className="member-list multi-column">
        {regularMembers.map((member) => (
          <li key={member.id} className="member-list-item">
            {member.name}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section className="team-section">
      <div className="management-container">
        <h2 className="section-title">Yönetim Kadrosu</h2>
        <div className="management-tree">
          {renderManagementTree(
            team.filter((member) => member.role === "management")
          )}
        </div>
      </div>
      <div className="members-container">
        <h2 className="section-title">Üyelerimiz</h2>
        {renderMemberList(team)}
      </div>
    </section>
  );
}

export default Team;
