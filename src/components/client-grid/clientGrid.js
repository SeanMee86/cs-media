import * as React from 'react';
import ClientGridItem from "../client-grid-item/clientGridItem";

const ClientGrid = (props) => {
    return (
        <div>
            {props.clientGrid.map(clientGridItem => (
                <ClientGridItem key={clientGridItem.id} clientGridItem={clientGridItem} />
            ))}
        </div>
    )
}

export default ClientGrid;
