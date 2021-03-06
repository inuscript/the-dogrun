import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'
import { configureStore } from '../store'
import * as actions from '../actions'
import DevTools from './DevTools'
import styled from 'styled-components'

const BotPlayer = ( { handsUp } ) => {
  if(handsUp){
    return <div>◯＜ニョッキ</div>
  }
  return <div>●</div>
}

const BotPlayers = ( { bots, hands } ) => {
  return <div>{
    bots.map( (bot, i) => <BotPlayer key={i} handsUp={!!hands[i]} /> )
  }</div>
}

const Box = styled.div`
  width: 50vw;
  border: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
`
const Flex = styled.div`
  display:flex;
  justify-content: space-between;
`

const Player = ( { handsUp } ) => {
  return <div>
    <button onClick={ () => handsUp(7)}>Nyokki</button>
  </div>
}
const TimerController = ( { start, stop, game }) => {
  const { timer, playerNum } = game
  return (
    <Flex>
      <button onClick={ _ => start() }>Start</button>
      <button onClick={ _ => stop() }>Stop</button>
      <div>Timer: {timer}</div>
      <div>PlayerNum: {playerNum}</div>
    </Flex>
  )
}

const Takenoko = ( props ) => {
  return <div>
    <TimerController {...props} />
    <Player {...props} />
    <BotPlayers {...props} />
  </div>
}

const Container = connect(state => state, actions)(Takenoko)

class App extends Component {
  constructor(){
    super()
    this.store = configureStore()
  }
  render() {
    return (
      <Provider store={this.store}>
        <Box>
          <Container/>
          <DevTools />
        </Box>
      </Provider>
    )
  }
}

export default App;
