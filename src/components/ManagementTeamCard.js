import React, { useState } from "react";
import "../styles/ManagementTeam.css";
import teamData from "../data/managementTeam.json";

function ManagementTeamCard() {
  const [team] = useState(teamData);

  const getLevels = (members) => {
    const levels = [...new Set(members.map((m) => m.level))];
    return levels.sort((a, b) => a - b);
  };

  const renderManagementTree = (membersByRole) => {
    const levels = getLevels(membersByRole);

    return levels.map((level) => {
      const levelMembers = membersByRole.filter(
        (member) => member.level === level
      );

      return (
        <div
          className={`hierarchy-level level-${level}`}
          key={`level-${level}`}
        >
          {levelMembers.map((member) => (
            <div key={member.id} className="team-card">
              <h3 className="team-card-title">{member.title}</h3>
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-card-img"
                />
              ) : (
                <div className="team-card-placeholder">No Image</div>
              )}
              <p className="team-card-name">{member.name}</p>
              <p className="team-card-mail">{member.mail}</p>
            </div>
          ))}
        </div>
      );
    });
  };

  return (
    <section className="team-section">
      <div className="management-container">
        <h2 className="section-title-h2">Yönetim Kurulu</h2>
        <div className="management-tree">
          {renderManagementTree(
            team.filter((member) => member.role === "management")
          )}
        </div>
      </div>
      <div className="members-container">
        <h2 className="section-title-h2">Denetleme Kurulu</h2>
        <div className="management-tree">
          {renderManagementTree(
            team.filter((member) => member.role === "council")
          )}
        </div>
      </div>
    </section>
  );
}

export default ManagementTeamCard;
