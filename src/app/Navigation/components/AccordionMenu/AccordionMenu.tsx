import React, { useState } from "react";
import "./AccordionMenu.sass";
import { IoIosArrowDown } from "react-icons/io";
import classNames from "classnames";
import { navigationList } from "../../../types";

interface AccordionMenuProps {
  title: string;
  list: navigationList[];
}

const AccordionMenu: React.FunctionComponent<AccordionMenuProps> = ({
  title,
  list,
}) => {
  const [accordion, setAccordion] = useState(false);

  const onClickHandler = (): void => {
    setAccordion(!accordion);
  };

  const navListTitle = classNames("navigation__list-title", {
    "is-active": accordion,
    "is-close": !accordion,
  });

  const navListContainer = classNames("navigation__list-container", {
    "is-active": accordion,
    "is-close": !accordion,
  });

  return (
    <div className="navigation__list">
      <div className={navListTitle} onClick={onClickHandler}>
        {title}
        <IoIosArrowDown />
      </div>
      <div className={navListContainer}>
        {list.map((item) => (
          <a key={item.id} href="{item.url}" className="navigation__list-item">
            {item.icon}
            <span>{item.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AccordionMenu;
