import React from "react";
import cl from "./TeamList.module.css"
import JohnSmith from "../../../assets/team/John Smith.svg";
import JaneDoe from "../../../assets/team/Jane Doe.svg";
import MichaelBrown from "../../../assets/team/Michael Brown.svg";
import EmilyJohnson from "../../../assets/team/Emily Johnson.svg";
import BrianWilliams from "../../../assets/team/Brian Williams.svg";
import SarahKim from "../../../assets/team/Sarah Kim.svg";
import TeamCard from "../Team Card/TeamCard";
import Button from "../../../UI/Button";

export default function TeamList() {
    const team = [
        {
          name: "John Smith",
          profile_img: JohnSmith,
          position: "CEO and Founder",
          experience:
            "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
          link: "https://example.com/",
        },
        {
          name: "Jane Doe",
          profile_img: JaneDoe,
          position: "Director of Operations",
          experience:
            "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
          link: "https://example.com/",
        },
        {
          name: "Michael Brown",
          profile_img: MichaelBrown,
          position: "Senior SEO Specialist",
          experience:
            "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
          link: "https://example.com/",
        },
        {
          name: "Emily Johnson",
          profile_img: EmilyJohnson,
          position: "PPC Manager",
          experience:
            "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
          link: "https://example.com/",
        },
        {
          name: "Brian Williams",
          profile_img: BrianWilliams,
          position: "Social Media Specialist",
          experience:
            "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
          link: "https://example.com/",
        },
        {
          name: "Sarah Kim",
          profile_img: SarahKim,
          position: "Content Creator",
          experience:
            "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
          link: "https://example.com/",
        },
      ];
      
  return (
   
      <div className={cl.teamListContainer}>
        {team.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            profileImg={member.profile_img}
            position={member.position}
            link={member.link}
            experience={member.experience}
          />
        ))}
        <div className={cl.moreBtn}><Button>See all team</Button></div>
      </div>
      
   
  );
}
