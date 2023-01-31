import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import * as Icon from 'react-feather';
import {Button} from "react-bootstrap";

const ExamResultLeftArea:React.FC = () => {
    return(
        <Stack direction="row" className='justify-content-center '>
            <Paper className='vertical-menu'>
                <MenuList>
                    <MenuItem className='menu-item my-3 py-2'>
                        Year
                    </MenuItem>
                    <MenuItem className='menu-item-selected py-2'>
                        <Icon.Home className='v-nav-icon v-nav-icon-selected'/> &nbsp;
                        Registration - Year 1
                    </MenuItem>
                    <MenuItem className='menu-item my-3 py-2'>
                        <Icon.Home className='v-nav-icon v-nav-icon-selected'/> &nbsp;
                        Registration - Year 2
                    </MenuItem>
                    <MenuItem className='menu-item my-3 py-2'>
                        <Icon.Home className='v-nav-icon'/> &nbsp;
                        Registration - Year 3
                    </MenuItem>
                    <MenuItem className='menu-item my-3 py-2'>
                        <Icon.Home className='v-nav-icon'/> &nbsp;
                        Registration - Year 4
                    </MenuItem>
                </MenuList>
            </Paper>

        </Stack>
    )
}

export default ExamResultLeftArea;