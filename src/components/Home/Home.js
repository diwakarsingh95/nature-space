import React from 'react'
import { Grid, Paper, Box } from '@material-ui/core'
import styles from './Home.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Square1 from '../../assets/images/square-1.jpg'
import Square2 from '../../assets/images/square-2.jpg'
import Square3 from '../../assets/images/square-3.jpg'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.Layout}>
        <Paper className={styles.paper} elevation={4}>
          <Grid container justify="flex-start">
            <Box clone order={{ xs: 2, sm: 1 }}>
              <Grid item xs={12} sm={7} md={8}>
                <div className={styles.paperText}>
                  <h2>Yoga related quote 1.</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </Grid>
            </Box>
            <Box clone order={{ xs: 1, sm: 2 }}>
              <Grid item xs={12} sm={5} md={4}>
                <img src={Square2} alt='Girl 1 doing yoga' />
              </Grid>
            </Box>
          </Grid>
        </Paper>
        <Paper className={styles.paper} elevation={4}>
          <Grid container>
            <Grid item xs={12} sm={5} md={4}>
              <img src={Square1} alt='Man doing yoga' />
            </Grid>
            <Grid item xs={12} sm={7} md={8}>
              <div className={styles.paperText}>
                <h2>Yoga related quote 2.</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={styles.paper} elevation={4}>
          <Grid container>
            <Box clone order={{ xs: 2, sm: 1 }}>
              <Grid item xs={12} sm={7} md={8}>
                <div className={styles.paperText}>
                  <h2>Yoga related quote 3.</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </Grid>
            </Box>
            <Box clone order={{ xs: 1, sm: 2 }}>
              <Grid item xs={12} sm={5} md={4}>
                <img src={Square3} alt='Girl 2 doing yoga' />
              </Grid>
            </Box>
          </Grid>
        </Paper>
      </div>
      <Footer />
    </>
  )
}

export default Home
