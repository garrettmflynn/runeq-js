import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import * as runeq from '../../../../../src';
import * as env from '../../../../../config';

import styles from '../examples.module.css'
export default function TestExample({server}) {

  const container = useRef(null);

  // Run After Initialization
  useEffect(async () => {

    const config = new runeq.Config(env)
    console.log('config', config)

    const v1client = new runeq.stream.V1Client(config)
    console.log('v1client', v1client)

    // For Test Patient
    // const accel = v1client.Accel(
    //   '3392b6a92482457e930eec05a9b32352',
    //   'WMIXGmSK',
    //   Math.floor((Date.now() - 1000*60*60*5)/ 1000),
    //   Math.floor(Date.now() / 1000),
    // )

    const event = v1client.Event(
      '3392b6a92482457e930eec05a9b32352',
      'WMIXGmSK',
      Math.floor((Date.now() - 1000*60*60*5)/ 1000),
      Math.floor(Date.now() / 1000),
    )

    const data = await event.get()

    // console.log('accel', accel)
    console.log('event', event)
    console.log('data', data)

    // for result in accel.iter_json_data():
    //  print(result.keys())
    // for text in accel.iter_json_data(device_id='patient-ABC,device-456'):
    // pass  # do something

    // df = pd.DataFrame()
    // for text in accel.iter_csv_text():
    //     page_df = pd.read_csv(io.StringIO(text))
    //     df.append(page_df)

    //   for point in accel.points():
    //   print(point)

    // # the accessor itself is also an iterator
    // for point in accel:
    //     print(point)

    // for point in accel.points(end_time=1563692400):
    //   pass  # do something

    // for text in accel.iter_csv_text(device_id='patient-ABC,device-456'):
    //     pass  # do something

    // # etc

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
  