import twitterLogo from "../assets/logo-twitter.svg";

import {
  Bell,
  BookmarkSimple,
  DotsThree,
  Envelope,
  FileText,
  Hash,
  House,
  User,
} from "phosphor-react";

import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="logo" />

      <nav className="main-navigation">
        <NavLink to="/">
          <House weight="fill" /> Home
        </NavLink>
        <Link to="">
          <Hash />
          Explore
        </Link>
        <Link to="">
          <Bell />
          Notifications
        </Link>
        <Link to="">
          <Envelope />
          Messages
        </Link>
        <Link to="">
          <BookmarkSimple />
          Bookmarks
        </Link>
        <Link to="">
          <FileText />
          Lists
        </Link>
        <Link to="">
          <User />
          Profile
        </Link>
        <Link to="">
          <DotsThree />
          More
        </Link>
      </nav>
      <button className="new-tweet" type="button">
        Tweet
      </button>
    </aside>
  );
};
