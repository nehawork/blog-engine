import { useState, useEffect } from "react";
import { User } from "../../core/apis/scheme";
import NoData from "../nodata/NoData";

export default function PageWrapper<TProps>({ listFun, Component }: { listFun: Function, Component: React.ComponentType<TProps> }): React.ComponentType<TProps> {

    const WrappedComponent: React.ComponentType<TProps> = (props: TProps) => {
        const { data, error } = listFun();
        if (error) {
            return <NoData type='nodataImg NetworkError' message={error.message} />
        }
        if (!data) {
            return <div className='noDataContent'>Loading....</div>
        }
        if (data && data.length === 0) {
            return <NoData type='nodataImg NoData' message={error.message} />
        }
        if (data && data.length > 0) {
            return (<Component {...props} data={data} />);
        }
    }
    return WrappedComponent;

}
