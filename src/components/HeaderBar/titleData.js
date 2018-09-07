import React from 'react';
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

export const ListItems = (
    <div>
        <ListItem button component={Link} to="/Register">
            <ListItemIcon>
                <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText primary="Movie" />
        </ListItem>
    </div>
);