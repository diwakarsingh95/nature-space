import React from 'react'
import { Grid, Link } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import CallIcon from '@material-ui/icons/Call'
import styles from './Footer.module.css'

const Copyright = () => {
  return (
    <>
      {'Copyright © '}
      <Link color='inherit' href='/'>
        Yoga Health & Wellness Center
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </>
  )
}

const SocialMedia = () => {
  return (
    <>
      <Link href='#' target='_blank' rel='noopener'>
        <InstagramIcon style={{ color: 'white' }} fontSize='large' />
        <span className='sr-only'>Instagram</span>
      </Link>{' '}
      <Link href='#' target='_blank' rel='noopener'>
        <FacebookIcon style={{ color: 'white' }} fontSize='large' />
        <span className='sr-only'>Facebook</span>
      </Link>{' '}
      <Link href='mailTo:someone@example.com'>
        <MailOutlineIcon style={{ color: 'white' }} fontSize='large' />
        <span className='sr-only'>Email</span>
      </Link>{' '}
      <Link href='tel:+918318516987'>
        <CallIcon style={{ color: 'white' }} fontSize='large' />
        <span className='sr-only'>Call</span>
      </Link>
    </>
  )
}

const Address = () => {
  return (
    <>
      <h2>Contact Us</h2>
      <address>
        <p>
          Yoga Health & Wellness Center
          <br />
          1/13/164/B Station Road Civil Line,
          <br />
          Ayodhya - 224001
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
            <div className={styles.address}>
              <Address />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={styles.social}>
              <SocialMedia />
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
  )
}
