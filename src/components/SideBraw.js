import * as React from 'react';
import { green, pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Paper } from '@mui/material';

export default function IconAvatars() {
  return (
    <Paper
        sx={{
            width: 60,
            height: 170,
            marginTop: 0.1,
    }}
    >
    <Stack direction="column" spacing={2} sx={{
            marginLeft: 1.4,
            paddingTop:1

    }}>
      <Avatar>
        <FolderIcon 
        sx={{ 
            
            '&:hover': {
                bgcolor: 'gray',
              opacity: [0.9, 0.8, 0.7],
              
              },
       }}
        />
      </Avatar>
      <Avatar sx={{ 
          bgcolor: pink[500],
          '&:hover': {
            backgroundColor: 'gray',
            opacity: [0.9, 0.8, 0.7],
            },
     }}>
        <PageviewIcon />
      </Avatar>
      <Avatar sx={{ 
          bgcolor: green[500],
          '&:hover': {
            backgroundColor: 'gray',
            opacity: [0.9, 0.8, 0.7],
            },
           }}>
        <AssignmentIcon />
      </Avatar>
    </Stack>
    </Paper>
    
  );
}