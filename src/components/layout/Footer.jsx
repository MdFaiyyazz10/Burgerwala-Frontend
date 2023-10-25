import React from "react";
import {AiFillInstagram,AiFillGithub,AiFillTwitterCircle}  from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Mf Burger wala</h2>
        <p>We are trying to give you best taste of Burger.</p>
        <br />
        <em>We are looking for your genuine feedback</em>
        <strong>All right reserverd @mfburgarwala</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="https://instagram.com/__im.faiyyazzz.___"> <AiFillInstagram /> </a>
        <a href="https://github.com/MdFaiyyazz10"><AiFillGithub /></a>
        <a href="https://twitter.com/__imfaiyyazz__"><AiFillTwitterCircle /></a>
      </aside>
    </footer>
  );
};

export default Footer;
