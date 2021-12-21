import React from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

import { MenuCard } from "../components/MenuCard";

export const MenuContainer = () => {
  const { menu } = useSelector((state) => state.handleApi);
  return (
    <div className="grid speciality__grid">
      {menu.map(({ id, title, description, icon, imageSrc }) => {
        icon = parse(icon);
        return (
          <MenuCard
            key={id}
            title={title}
            description={description}
            icon={icon}
            imageSrc={imageSrc}
          />
        );
      })}
    </div>
  );
};
