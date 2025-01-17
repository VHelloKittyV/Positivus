import React from 'react'
import Title from "../Title/Title"
import CardList from "./Card List/CardList"
import Banner from './Banner/Banner';
export default function Services() {
  return (
    <section>
        <Title
          title="Servies"
          subTitle="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />
        <CardList />
        <Banner />
      </section>
  )
}
