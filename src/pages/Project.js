import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';
import ProjectCard from '../components/ProjectCard';

const styles = {
  container: {
    paddingBottom: '50px' // adjust the value as needed
  }
};

const Project = () => {
  return (
    <div style={styles.container}>
      <Navbar/>
      <HeroImage2 heading="PROJECTS." text=""/>
      <ProjectCard />
      <Footer/>
    </div>
  );
};

export default Project;
