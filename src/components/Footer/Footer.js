import React from 'react'
import { Grid, Typography, Link, Divider } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import CallIcon from '@material-ui/icons/Call';
import styles from './Footer.module.css'

const Copyright = () => {
  return (
    <Typography variant="body2">
      {'Copyright © '}
      <Link color='inherit' href="/">
        Nature Space Yoga Studio  
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const SocialMedia = () => {
  return (
    <>
     <Link href='http://www.instagram.com' target='_blank'>
       <InstagramIcon style={{ color: 'white'}} fontSize='large' />
      </Link>
     {' '}
     <Link href='https://www.facebook.com/nature.space.yoga.studio' target='_blank'>
       <FacebookIcon style={{ color: 'white'}} fontSize='large' />
      </Link>
     {' '}
     <Link href='mailTo:someone@example.com'><MailOutlineIcon style={{ color: 'white'}} fontSize='large' /></Link>
     {' '}
     <Link href='tel:+918318516987'><CallIcon style={{ color: 'white'}} fontSize='large' /></Link>
    </>
  )
}

const Address = () => {
  return (
    <>
      <h2>Contact Us:</h2>
      <address>
        <p>
          Nature Space Yoga Studio,
          <br />
          Somewhere on earth
          <br />
          Pincode: 000000
        </p>
      </address>
    </>
  )
}

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.container}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className={styles.social}>
              <SocialMedia />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={styles.address}>
              <Address />
              <hr />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.copyright}>
              <Copyright />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}