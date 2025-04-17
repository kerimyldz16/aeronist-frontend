import React, { useRef, useState, useEffect } from "react";
import "../styles/TeamCard.css";

import teamData from "../data/teamData.json";

function TeamCard() {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    const element = scrollRef.current;

    const checkScroll = () => {
      if (element) {
        const { scrollLeft, scrollWidth, clientWidth } = element;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    checkScroll();

    if (element) {
      element.addEventListener("scroll", checkScroll);
    }

    window.addEventListener("resize", checkScroll);

    return () => {
      if (element) {
        element.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="team-section">
      <h2 className="section-title-h2">Ekiplerimiz</h2>

      <div className="team-scroll-wrapper">
        {showLeftArrow && (
          <button
            className="team-scroll-button left"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            &lt;
          </button>
        )}

        <div className="team-scroll-row" ref={scrollRef}>
          {teamData.map((team, index) => (
            <div className="team-card" key={index}>
              <h3 className="team-title">{team.teamName}</h3>
              <div className="team-captain">
                <p className="captain-name">
                  <strong>{team.captain.name}</strong>
                </p>
                <p className="captain-duty">{team.captain.duty}</p>
                <p className="captain-mail">
                  <a href={`mailto:${team.captain.mail}`}>
                    {team.captain.mail}
                  </a>
                </p>
              </div>
              <div className="team-members">
                {team.members.map((member, idx) => (
                  <div className="member-card" key={idx}>
                    <p className="member-name">{member.name}</p>
                    <p className="member-duty">{member.duty}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button
            className="team-scroll-button right"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
}

export default TeamCard;
