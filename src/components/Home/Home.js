import React from 'react'
import { Grid, Paper, Box } from '@material-ui/core'
import styles from './Home.module.css'
import Navbar from '../Navbar/Navbar'
import Square1 from '../../assets/images/square-1.jpg'
import Square2 from '../../assets/images/square-2.jpg'
import Square3 from '../../assets/images/square-3.jpg'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.Layout}>
        <Paper className={styles.paper}>
          <Grid container justify="flex-start">
            <Box clone order={{ xs: 2, sm: 1 }}>
              <Grid item xs={12} sm={6} md={8}>
                <div className={styles.paperText}>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </div>
              </Grid>
            </Box>
            <Box clone order={{ xs: 1, sm: 2 }}>
              <Grid item xs={12} sm={6} md={4}>
                <img src={Square2} alt='Girl 1 doing yoga' />
              </Grid>
            </Box>
          </Grid>
        </Paper>
        <Paper className={styles.paper}>
          <Grid container>
            <Grid item xs={12} sm={3} md={4}>
              <img src={Square1} alt='Man doing yoga' />
            </Grid>
            <Grid item xs={12} sm={9} md={8}>
              <div className={styles.paperText}>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
              </div>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={styles.paper}>
          <Grid container>
            <Box clone order={{ xs: 2, sm: 1 }}>
              <Grid item xs={12} sm={9} md={8}>
                <div className={styles.paperText}>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </div>
              </Grid>
            </Box>
            <Box clone order={{ xs: 1, sm: 2 }}>
              <Grid item xs={12} sm={3} md={4}>
                <img src={Square3} alt='Girl 2 doing yoga' />
              </Grid>
            </Box>
          </Grid>
        </Paper>
      </div>
    </>
  )
}

export default Home
