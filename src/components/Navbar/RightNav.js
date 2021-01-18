import React from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    a {
      text-decoration: none;
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    position: ${({ open }) => (open ? "absolute" : "fixed")};
    flex-flow: column nowrap;
    background-color: #131313;
    top: 0;
    right: 0;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    width: 300px;
    padding-top: 2.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
  }
`;

const RightNav = ({ open }) => {
  Aos.init({ duration: 1000, offset: 150 });

  return (
    <Ul open={open}>
      <li data-aos="fade-up-left" data-aos-offset="50">
        <a href="#About">About Us</a>
      </li>
      <li data-aos="fade-up" data-aos-offset="50">
        <a href="#skills">Skills</a>
      </li>
      <li data-aos="fade-down" data-aos-offset="50">
        <a href="#Projects">Projects</a>
      </li>
      <li data-aos="fade-up-right" data-aos-offset="50">
        <a href="#contactUs">Contact Us</a>
      </li>
    </Ul>
  );
};

export default RightNav;
