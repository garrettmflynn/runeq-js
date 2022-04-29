import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import * as runeq from '../../../../../src';
import * as env from '../../../../../config';

import styles from '../examples.module.css'
export default function TestExample({server}) {

  const container = useRef(null);
  const accel = useRef(null);
  const bandpower = useRef(null);
  const heartrate = useRef(null);
  const event = useRef(null);
  const lfp = useRef(null);
  const symptom = useRef(null);
  const rotation = useRef(null);
  const span = useRef(null);
  const state = useRef(null);
  const readout = useRef(null);

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


    for (let button of container.current.querySelectorAll('button')) {
      button.onclick = async () => {
        const args = [
          '3392b6a92482457e930eec05a9b32352',
          'WMIXGmSK',
          Math.floor((Date.now() - 1000*60*60*5)/ 1000),
          Math.floor(Date.now() / 1000),
        ]

        // if (button.id == 'State') args.push(...[])
        // if (button.id == 'ProbabilitySymptom') args.push('tremor')

        const accessor = v1client[button.id](...args)

        const data = await accessor.get()

        // console.log('accel', accel)
        console.log(button.id, accessor)
        console.log(`${button.id} data`, data)

        readout.current.innerHTML = JSON.stringify(data, null, 2)
      }
    }

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

        <div ref={container} className="container">

            <h1 className="hero__title">SDK Test</h1>
            <button id="Accel" ref={accel} >Acceleration</button>
            <button id="BandPower" ref={bandpower} >BandPower</button>
            <button id="Event" ref={event} >Event</button>
            <button id="HeartRate" ref={heartrate} >Heart Rate</button>
            <button id="LFP" ref={lfp} >LFP</button>
            <button id="ProbabilitySymptom" ref={symptom} >Probability Symptom</button>
            <button id="Rotation" ref={rotation} >Rotation</button>
            <button id="Span" ref={span} >Span</button>
            <button id="State" ref={state} >State</button>
            <br></br>
            <textarea ref={readout}></textarea>
        </div>
        </div>

    );
  }
  