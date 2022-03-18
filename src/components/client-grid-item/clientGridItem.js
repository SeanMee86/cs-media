import * as React from 'react';
import {Link} from "gatsby";
import * as styles from './clientGridItem.module.scss';

const ClientGridItem = (props) => {
    const gridItemStyle = {
        backgroundImage: `url(${props.clientGridItem.featuredImage.node.sourceUrl})`,
    }
    return (
        <div className={styles.gridItem} style={gridItemStyle}>
            <Link className={styles.link} to={props.clientGridItem.uri}>
                {props.clientGridItem.title}
            </Link>
        </div>
    )
}

export default ClientGridItem;
