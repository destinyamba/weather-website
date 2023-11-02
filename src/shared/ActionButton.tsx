import React from "react";
import { SELECTED_PAGE } from "./types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SELECTED_PAGE) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-orange-400 px-10 py-2 hover:bg-orange-500 hover:text-white"
      onClick={() => setSelectedPage(SELECTED_PAGE.FORECAST)}
      href={`#${SELECTED_PAGE.FORECAST}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
