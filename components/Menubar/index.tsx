import React from "react";
import styles from "@/styles/Menubar.module.css";
import Link from "next/link";
import { IoPersonCircleOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { Container } from "react-bootstrap";

const Menubar = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <Container
        className={`d-flex align-items-center justify-content-between`}
      >
        {/* brand */}
        <div className={`d-flex align-items-center justify-content-center`}>
          <div className={`${styles.imageContainer}`}>
            <img
              src="https://homez-appdir.vercel.app/images/header-logo.svg"
              className={`${styles.image} img-fluid`}
            />
          </div>
        </div>
        {/* middle */}
        <div
          className={`d-flex align-items-center justify-content-center gap-3`}
        >
          <Link className={`${styles.link}`} href="/">
            Home
          </Link>
          <Link className={`${styles.link}`} href="/products">
            Products
          </Link>
          <Link className={`${styles.link}`} href="/pricing">
            Pricing
          </Link>
          <Link className={`${styles.link}`} href="/aboutus">
            About us
          </Link>
          <Link className={`${styles.link}`} href="/contactus">
            Contact us
          </Link>
        </div>
        {/* end */}
        <div
          className={`d-flex align-items-center justify-content-center gap-3`}
        >
          <div
            className={`d-flex align-items-center justify-content-center gap-2`}
          >
            <IoPersonCircleOutline className={`${styles.personIcon}`} />
            <Link href="/login">Login / Register</Link>
          </div>
          <div
            className={`${styles.addProperty} d-flex align-items-center justify-content-center gap-2`}
          >
            <div>Add property</div>
            <GoArrowUpRight />
          </div>
          {/* hamburger button */}
          <div
            className={`${styles.hamburger} d-flex flex-column justify-content-center align-items-end gap-2`}
          >
            <div className={`${styles.hamburgerLine1}`}></div>
            <div className={`${styles.hamburgerLine2}`}></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Menubar;
