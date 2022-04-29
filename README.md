# runeq-js

![NPM - License](https://img.shields.io/npm/l/runeq?color=blue)
![NPM - Version](https://img.shields.io/npm/v/runeq)
<!-- [![Documentation Status](https://readthedocs.org/projects/runeq/badge/?version=latest)](https://runeq.readthedocs.io/en/latest/?badge=latest)
[![CircleCI Status](https://circleci.com/gh/rune-labs/runeq-python.svg?style=shield)](https://app.circleci.com/pipelines/gh/rune-labs/runeq-python) -->

A Web SDK for Rune Lab's Query API

## Features
- [x] Basic HTTP Requests for JSON data
- [ ] GraphQL support
- [ ] Allow POST requests for updating data from a custom UI


## Getting Started
To get started with the Rune Labs Web SDK, you first need to **install** the software.

### Browser
#### Script Tag
```html
<script src="https://cdn.jsdelivr.net/npm/runeq@latest"></script>
```

#### ES6 Module
```js
import * as runeq from 'https://cdn.jsdelivr.net/npm/runeq/dist/index.esm.js'
```

### Node
```bash
npm install runeq
```

After installation, you should then try to **run a basic query**.

> **Note:** You will need to have a profile at `app.runelabs.io` in order to use your access token and secret.

## Running a Basic Query

```javascript

    // Create a Configuration Object
    const config = new runeq.Config({accessTokenId,accessTokenSecret})

    // Create a Client
    const client = new runeq.stream.V1Client(config)


    // Initialize the Event Accessor
    const events = client.Event(
        '3392b6a92482457e930eec05a9b32352', // Patient ID
        'WMIXGmSK', // Device ID
        Math.floor((Date.now() - 1000*60*60*5)/ 1000), // Start Time
          Math.floor(Date.now() / 1000), // End Time
    )

    // Send a Query for the Events
    const data = await events.get()
    console.log('Event Data', data)
    
```

## Examples and Documentation
To generate documentation for `runeq`, run:
```basn
npm run start
```

## References
<!-- * Library documentation: [https://runeq.readthedocs.io/en/latest](https://runeq.readthedocs.io/en/latest) -->
* API documentation: [https://docs.runelabs.io](https://docs.runelabs.io)
* Rune Labs home page: [https://runelabs.io](https://runelabs.io)


## Acknowledgments
This SDK was originally developed by [Garrett Flynn](https://github.com/garrettmflynn) during the [2022 Parkython & Rune Labs Ideathon](https://www.eventbrite.com/e/parkython-rune-labs-ideathon-tickets-311790803687) with the ParkiCompanion team (Team 3), including: 
- Ro'ee Gilron (Rune Labs)
- Yi-Ting Chang
- Drew Perttula
- Robin Duryee
- Linda Horner
- Nayanika Biswas
- Matthias Schlesinger
- Anina Lund