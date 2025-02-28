import React from "react";
import styled from "styled-components";

const skills = [
  "JavScript",
  "CSS",
  "HTML",
  "Java",
  "Tailwind.css",
  "Arduino embedded design",
  "Python",
  "SpringBoot",
  "figma",
];

const SkillsCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <span className="title">My Skills</span>
        <div className="card__tags">
          <ul className="tag">
            {skills.map((skill, index) => (
              <li key={index} className="tag__name">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 97%;
    height: 300px;
    margin: 30px;
    background: rgb(200, 70, 65);
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    color: #31572c;
    border-radius: 15px;
    box-shadow: -20px 20px 0px -5px #31572c;
  }
  .card__tags {
    overflow: auto;
    height: 80%;
  }
  .title {
    font-weight: 900;
    font-size: 1.7em;
  }

  .tag__name {
    display: inline-block;
    color: #fff;
    font-size: 1.1em;
    background-color: #31572c;
    padding: 6px 23px 9px;
    border-radius: 70em;
    margin: 8px 6px 8px 0;
    margin-left: 0px;
    position: relative;
    text-transform: lowercase;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .tag__name::before,
  .tag__name::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 40%;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #90a955;
  }

  .tag__name::before {
    left: 7px;
  }

  .tag__name::after {
    right: 7px;
  }

  .tag__name:hover {
    transform: scale(1.1);
    background-color: rgb(164, 186, 27);
  }
`;

export default SkillsCard;
