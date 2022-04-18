import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'



const bannerBg = {
    background: `url(${bg})`,
    height: '500px'

}

const backgroundColor = {
    marginTop: '35px',
    height: '465px',
    width: '200px',
    backgroundColor: "#455a64",


}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}
const Banner = () => {
    return (
        <div>
            <Container sx={{ flexGrow: 1 }} style={bannerBg}>
                <Grid container spacing={2}>
                    <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={12} md={6} >
                        <Box>
                            <Typography variant='h2'>
                                Your new Smile Starts Here
                            </Typography>
                            <Typography variant='h6'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati maxime, ad rem illum mollitia adipisci!
                            </Typography>
                            <Button variant="contained" style={{ backgroundColor: '#5CE7ED', marginTop: "25px" }}>GET APPOINTMENT</Button>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter}>
                        <img style={{ width: '500px' }} src={chair} alt="" />

                    </Grid>

                </Grid>


            </Container>

        </div>
    );
};

export default Banner;