import twitterLogo from "../assets/logo-twitter.svg";

import {
  Bell,
  BookmarkSimple,
  DotsThree,
  Envelope,
  FileText,
  Hash,
  House,
  Pencil,
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
          <House weight="fill" /> <span>Home</span>
        </NavLink>
        <a >
          <Hash />
          <span>Explore</span>
        </a>
        <a >
          <Bell />
          <span>Notifications</span>
        </a>
        <a >
          <Envelope />
          <span>Messages</span>
        </a>
        <a >
          <BookmarkSimple />
          <span>Bookmarks</span>
        </a>
        <a >
          <FileText />
          <span>Lists</span>
        </a>
        <a >
          <User />
          <span>Profile</span>
        </a>
        <a >
          <DotsThree />
          <span>More</span>
        </a>
      </nav>
      <button className="new-tweet" type="button">
        <Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  );
};
