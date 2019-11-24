import React from 'react';
import Parallax from 'react-springy-parallax';

import Miguel1 from '../assets/images/Miguel1.jpg';
import Miguel2 from '../assets/images/Miguel2.jpg';
import Miguel3 from '../assets/images/Miguel3.jpg';
import Miguel4 from '../assets/images/Miguel4.jpg';

function DcParallax() {
    const styles = {
        fontFamily: 'Menlo-Regular, Menlo, monospace',
        fontSize: 14,
        lineHeight: '10px',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    };
    return(
      <Parallax pages={4}>

            <Parallax.Layer
                offset={0}
                speed={0.5}
                style={styles}
            >
                <img src={Miguel1} height="350px" weight="350px" alt="" />
            </Parallax.Layer>

            <Parallax.Layer
                offset={0.1}
                speed={-0.1}
                style={styles}
            >
                <img src={Miguel2} height="350px" weight="350px" alt="" />
            </Parallax.Layer>

            <Parallax.Layer
                offset={0.2}
                speed={0.5}
                style={styles}
            >
                <img src={Miguel3} height="350px" weight="350px" alt="" />
            </Parallax.Layer>

            <Parallax.Layer
                offset={0.3}
                speed={0.5}
                style={styles}
            >
                <img src={Miguel4} height="350px" weight="350px" alt="" />
            </Parallax.Layer>

      </Parallax>
    )
}

export default DcParallax;
