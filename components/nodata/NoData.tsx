import * as React from 'react';

const NoData = ({ type, message }: { type: string, message: string }): JSX.Element => {
    return (<div className='noDataContent'>
        <div className='iconWrap'><div className={type} /></div>
        <span className='noDataMsg'>{message}</span>
    </div>);
}

export default NoData;