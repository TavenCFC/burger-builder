import React from 'react';
import classes from './Layout.css'
import Auxiliary from '../../hoc/Auxiliary'

const layout = (props) => (
    <Auxiliary>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Container}>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;