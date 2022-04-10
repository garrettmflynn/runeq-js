import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './examples.module.css';
import TestExample from './components/test';
import { useHistory, useLocation } from 'react-router';

export default function ExampleSelector({server}) {
   const history = useHistory();
    var url = globalThis.location;
    var name = new URLSearchParams(url.search).get('name');
    const [example, setExample] = React.useState(name ?? 'device');


    const renderExample = (name) => {
        switch(name) {
          case 'test':
            return <TestExample server={server}/>
          // case 'webrtc':
          //   return <WebRTCExample server={server}/>
          default:
            return <TestExample server={server}/>
        }
      }

    const set = (name) => {
      history.replace(`/examples?name=${name}`)
      setExample(name)
    }
  
    return (
        <>
      <nav className={clsx(styles.nav)}>
        <button onClick={() => set('test')}>
          Test
        </button>
        {/* <button onClick={() => set('native')}>
          Native Webpage
        </button> */}
        </nav>

        <header>
            {renderExample(example)}
        </header>
        </>
    );
  }
  