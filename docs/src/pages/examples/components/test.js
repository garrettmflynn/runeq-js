import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import * as runeq from '../../../../../src';
import styles from '../examples.module.css'
export default function TestExample({server}) {

  const container = useRef(null);

  // Run After Initialization
  useEffect(async () => {

    const config = new runeq.Config()
    console.log('config', config)

    const v1client = new runeq.stream.V1Client(config)
    console.log('v1client', v1client)

    const accel = v1client.Accel(
      '992967a09cad48378f7b628aff5bdf6c',
      'ABCDEF',
      1562482800,
      1563692400,
    )

    console.log('accel', accel)

  });
  
    return (
      <div className="hero">

        <div className="container">

          <h1 className="hero__title">SDK Test</h1>
          <div ref={container} className={clsx(styles.circle)}>
          </div>
        </div>
        </div>

    );
  }
  