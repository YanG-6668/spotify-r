import React from "react";
import "./ArtistHeader.sass";

import ArtistInfo from "../ArtistInfo";
import ArtistNavigation from "../ArtistNavigation";
import { TabsItem } from "../../../types";

interface ArtistHeaderProps {
  tabs: TabsItem[];
  onChange: (option: { id: number; title: string }) => void;
}

const ArtistHeader: React.FunctionComponent<ArtistHeaderProps> = ({
  onChange,
  tabs,
}) => {
  return (
    <div className="artist-header">
      <ArtistInfo />
      <ArtistNavigation tabs={tabs} onChange={onChange} />
    </div>
  );
};

export default ArtistHeader;
