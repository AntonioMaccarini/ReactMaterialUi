import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Grid, Paper } from '@mui/material';


export default function BoxSx() {
  return (
      <div>
          <Paper
          sx={{
            width: '100%',
            height: 60,
        }}
          >
            <Grid container spacing={0}>
              <Grid item xs={11}>
               <MenuIcon
                    onClick={console.log("eta")}
                    sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    marginTop: 1,
                    marginLeft: 1.4,
                    '&:hover': {
                    backgroundColor: '#eeFeFe',
                    opacity: [0.9, 0.8, 0.7],
                    },
                }}></MenuIcon> 
            </Grid>
            <Grid>
                <Avatar alt="Remy Sharp" src="https://img.lovepik.com/element/45001/3052.png_860.png" 
                sx={{
                    marginTop: 1,
                    marginRight: -10,
                    '&:hover': {
                        backgroundColor: 'gray',
                        opacity: [0.9, 0.8, 0.7],
                        },
                    
                }}
                />

                
                    
            </Grid>
          </Grid>
          </Paper>
          
            
          
      </div>
);
}