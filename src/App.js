// For interactive documentation and code auto-completion in editor
/** @typedef {import('pear-interface')} */

import Whiteboard from '@baasi/whiteboard'
import { html } from 'htm/react'

import b4a from 'b4a'; // Module for buffer-to-string and vice-versa conversions 
import crypto from 'hypercore-crypto'; // Cryptographic functions for generating the key in app
import Hyperswarm from 'hyperswarm'; // Module for P2P networking and connecting peers
import { useCallback, useEffect, useRef, useState } from 'react'

const swarm = new Hyperswarm()

async function joinSwarm(topicBuffer) {
  // Join the swarm with the topic. Setting both client/server to true means that this app can act as both.
  const discovery = swarm.join(topicBuffer, { client: true, server: true })
  await discovery.flushed()

  const topic = b4a.toString(topicBuffer, 'hex')
  return topic
}

async function createRoom() {
  // Generate a new random topic (32 byte string)
  const topicBuffer = crypto.randomBytes(32)
  // Returns joined room's key
  return joinSwarm(topicBuffer)
}

async function joinRoom(topicStr) {
  const topicBuffer = b4a.from(topicStr, 'hex')
  return joinSwarm(topicBuffer)
}

const wBCssResponse = await fetch('../../node_modules/@baasi/whiteboard/dist/style.css')
let wbCss = await wBCssResponse.text()

const styleEl = document.createElement('style')
styleEl.setAttribute('type', 'text/css');
wbCss = wbCss.replace('.hidden{display:none}', 'canvas{transform: translateY(-30%)}.whiteboard-tools-container{display:none}')
styleEl.innerText = wbCss

document.head.appendChild(styleEl)

export default function App() {
  const [message, setMessage] = useState()
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [joinedTopic, setJoinedTopic] = useState()
  const [loading, setLoading] = useState(false)

  const draggedPointsRef = useRef([])
  const inputRef = useRef()

  const onMessageAdded = useCallback((_peerName, receivedMessage) => {
    console.log('MESSAGE_RECEIVED', JSON.parse(receivedMessage))
    setMessage(JSON.parse(receivedMessage))
  }, [])

  const sendMessage = useCallback((messageObjToSend) => {
    console.log('MESSAGE_BEING_SENT', messageObjToSend)
    // Send the message to all peers (that you are connected to)
    const peers = [...swarm.connections]
    for (const peer of peers) peer.write(JSON.stringify(messageObjToSend))
  }, [])

  useEffect(() => {
    if (isMouseDown || !draggedPointsRef.current.length) {
      return
    }

    const messageToSend = {
      id: b4a.toString(crypto.randomBytes(32), 'hex'),
      startX: draggedPointsRef.current[0][0],
      startY: draggedPointsRef.current[0][1],
      endX: draggedPointsRef.current[draggedPointsRef.current.length - 1][0],
      endY: draggedPointsRef.current[draggedPointsRef.current.length - 1][1],
      points: draggedPointsRef.current,
      drawingForm: 'PEN',
      beingDrawn: false,
      settings: {
        strokeWidth: 5,
        strokeColor: '#000',
        drawingForm: 'PEN',
        cursorMode: 1,
        fontSize: 24,
        fontFamily: 'Arial',
        lineHeight: 25,
      }
    }

    sendMessage(messageToSend)

    draggedPointsRef.current = []
  }, [isMouseDown])

  useEffect(() => {
    // When there's a new connection, listen for new messages, and add them to the UI
    swarm.on('connection', (peer) => {
      // name incoming peers after first 6 chars of its public key as hex
      const peerName = b4a.toString(peer.remotePublicKey, 'hex').substring(0, 6)
      peer.on('data', message => onMessageAdded(peerName, message))
      peer.on('error', e => console.log(`Connection error: ${e}`))
    })

    const canvasEl = document.getElementsByTagName('canvas')[0]

    const handleMouseDown = () => setIsMouseDown(true)
    const handleMouseUp = () => setIsMouseDown(false)

    canvasEl.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      canvasEl.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  useEffect(() => {
    if (!isMouseDown) {
      return
    }

    const canvasEl = document.getElementsByTagName('canvas')[0]

    const boundingRect = canvasEl.getBoundingClientRect()

    const handleMouseMove = (e) => {
      draggedPointsRef.current = [...draggedPointsRef.current, [(e.clientX - boundingRect.left), (e.clientY - boundingRect.top)]]
    }

    canvasEl.addEventListener('mousemove', handleMouseMove)

    return () => {
      canvasEl.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isMouseDown])

  const handleClickJoin = async () => {
    setLoading(true)
    const topic = await joinRoom(inputRef.current.value)
    setLoading(false)
    setJoinedTopic(topic)
  }

  const handleClickCreate = async () => {
    setLoading(true)
    const topic = await createRoom()
    setLoading(false)
    inputRef.current.value = topic
    setJoinedTopic(topic)
  }

  useEffect(() => {
    document.getElementById('wb-wrapper').style.visibility = joinedTopic ? 'visible' : 'hidden'
  }, [joinedTopic])

  return html`
    <div>
      <div style=${{ paddingLeft: '10px' }}>
        <input
          ref=${inputRef}
          placeholder="Enter room id"
          style=${{ background: joinedTopic ? 'gray' : 'white', position: 'relative', zIndex: 1, top: '200px', width: '250px' }} 
          disabled=${!!joinedTopic || loading}
        />
        <button
          onClick=${handleClickJoin} 
          style=${{ background: joinedTopic ? 'gray' : 'white', position: 'relative', zIndex: 1, top: '200px', width: '50px', borderLeft: '1px solid black' }} 
          disabled=${!!joinedTopic || loading}
        >
          ${loading ? 'Loading...' : 'Join'}
        </button>
        <button
          onClick=${handleClickCreate} 
          style=${{ background: 'wheat', position: 'relative', zIndex: 1, top: '200px', display: 'block' }}
          disabled=${loading}
        >
          ${loading ? 'Loading...' : 'Or create a room'}
        </button>
      </div>
      <div id="wb-wrapper">
        <${Whiteboard} ...${{ isActive: true, receivedElement: message, darkMode: true }} />
      </div>
    </div>
  `
}