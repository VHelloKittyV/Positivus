import React from "react";
import Title from "../Title/Title";
import TeamList from "./TeamList/TeamList";


export default function Team() {
  return (
    <section>
      <Title
        title="Team"
        subTitle="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />
      <TeamList />
    </section>
  );
}
