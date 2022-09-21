import React from 'react'
import { Grid, Paper, Box } from '@material-ui/core'
import styles from './Home.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Square1 from '../../assets/images/square-1.webp'
import Square2 from '../../assets/images/square-2.webp'
import Square3 from '../../assets/images/square-3.webp'
import AllInclusiveIcon from '@material-ui/icons/AllInclusive'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.Layout}>
        <Paper className={styles.paper} elevation={4}>
          <Grid container justify='flex-start'>
            <Box clone order={{ xs: 2, sm: 1 }}>
              <Grid item xs={12} sm={7} md={8}>
                <div className={styles.paperText}>
                  <blockquote>
                    ”Yoga is not just repetition of few postures, it is more
                    about the exploration and discovery of the subtle energies
                    of life”
                  </blockquote>
                  <p>― Amit Ray</p>
                  <div className={styles.endIcon}>
                    <AllInclusiveIcon fontSize='large' />
                  </div>
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
                <blockquote>
                  "When you listen to yourself, everything comes naturally. It
                  comes from inside, like a kind of will to do something. Try to
                  be sensitive. That is yoga."
                </blockquote>
                <p>― Petri Räisänen</p>
                <div className={styles.endIcon}>
                  <AllInclusiveIcon fontSize='large' />
                </div>
              </div>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={styles.paper} elevation={4}>
          <Grid container>
            <Box clone order={{ xs: 2, sm: 1 }}>
              <Grid item xs={12} sm={7} md={8}>
                <div className={styles.paperText}>
                  <blockquote>
                    "The very heart of yoga practice is ‘abyhasa’ steady effort
                    in the direction you want to go."
                  </blockquote>
                  <p>― Sally Kempton</p>
                  <div className={styles.endIcon}>
                    <AllInclusiveIcon fontSize='large' />
                  </div>
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
