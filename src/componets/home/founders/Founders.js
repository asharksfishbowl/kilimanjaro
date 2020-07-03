import React from 'react';
import Img from 'react-image';
import Styles from '../Styles.js';

import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import MiguelDelCampoImg from '../assets/MiguelDelCampo.jpg';
import LeaMeyerRodarteImg from '../assets/LeaMeyerRodarte.jpg';
import NickSharkMarinoImg from '../assets/NickSharkMarino.jpg';
import EvanHerringImg from '../assets/EvanHerring.jpg';

const images =  [{
    src: MiguelDelCampoImg,
    title: 'Miguel Del Campo',
    width: '33%',
    height: '365px',
    link: 'DcParallax',
    alt: 'Missing DcParallax'
  },{
    src: LeaMeyerRodarteImg,
    title: 'Lea Meyer Rodarte',
    width: '33%',
    height: '365px',
    link: 'LrParallax',
    alt: 'Missing LrParallax'
  },{
    src: NickSharkMarinoImg,
    title: 'Nick Shark Marino',
    width: '33%',
    height: '365px',
    link: 'NmParallax',
    alt: 'Missing NmParallax'
  },{
    src: EvanHerringImg,
    title: 'Evan Herring',
    width: '33%',
    height: '365px',
    link: 'EhParallax',
    alt: 'Missing EhParallax'
}];

function Founders() {
  const classes = Styles();

  return (
    <div className={classes().root}>
      {
        images.map(image => (
          <ButtonBase
            focusRipple
            key={image.title}
            href={image.link}
            className={classes().image}
            focusVisibleClassName={classes().focusVisible}
            style={{
              width: image.width,
              height: image.height
            }}
          >
            <Img
              className={classes().imageSrc}
              src={image.src}
              alt={image.alt}
            />
            <span className={classes().imageBackdrop} />
            <span className={classes().imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes().imageTitle}
              >
                {image.title}
                <span className={classes().imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))
      }
    </div>
  );
}

export default Founders;
