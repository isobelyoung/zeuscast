import React from 'react';
import './index.scss';

type ForecastGridProps = {
    children: React.ReactNode | React.ReactNode[];
};

const ForecastGrid = ({ children }: ForecastGridProps) => {
    return <div className='grid'>{children}</div>;
};

export default ForecastGrid;
