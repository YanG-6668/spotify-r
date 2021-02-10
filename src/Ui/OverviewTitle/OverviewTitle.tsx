import React from 'react';
import './OverviewTitle.sass';
interface OverviewTitleProps  {
  title: string
}

const OverviewTitle: React.FunctionComponent<OverviewTitleProps> = ({ title }) => {
  return (
    <div className="section-title">
      {title}
    </div>
  );
}

export default OverviewTitle;
