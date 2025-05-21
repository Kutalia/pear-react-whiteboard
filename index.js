/* global Pear */

import { html } from 'htm/react'
import { createRoot } from 'react-dom/client'
import App from './src/App'

// Unannounce the public key before exiting the process
// (This is not a requirement, but it helps avoid DHT pollution)
Pear.teardown(() => swarm.destroy())

Pear.updates(() => Pear.reload())

const root = createRoot(document.querySelector('#root'))
root.render(html`
    <${App}
      app={app}
    />
`)
