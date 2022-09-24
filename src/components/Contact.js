import { Avatar, Box, Card, CardContent, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';
const Contact = ({ data }) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar src={data.photo} />
            </ListItemAvatar>
            <ListItemText primary={data.name} secondary={
                <>
                    <Box component="span" sx={{ display: 'block' }}>
                        <Typography variant='subtitle1'>
                            {data.phone}
                        </Typography>
                    </Box>
                    <Box component="span" sx={{ display: 'block' }}>
                        <Typography variant='subtitle1'>
                            {data.email}
                        </Typography>
                    </Box>
                </>
            } />
        </ListItem>
    );
};

export default Contact;
