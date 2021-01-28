import React from 'react';

import './OverviewTitle.sass';

type Props = {
  title: string
}

const OverviewTitle: React.FunctionComponent<Props> = ({ title }) => {
  return (
    <div className="section-title">
      {title}
    </div>
  );
}

export default OverviewTitle;
