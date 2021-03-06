'use babel'
import React from 'react'
import ReactDom from 'react-dom'
import Messages from './messages'
import State from './state'
import List from './list'
import Timer from './rx/timer'
import RxTodo from './rx/todo'
import PropsExample from './props'
import Validate from './validate3'
import TextCounter from './textcount/TextCounter'
import Pure from './pure'
import Trees from './trees'

const Main = () => {
  return (
    <div>
      <Validate />
      {/*<Timer />*/}
      {/*<RxTodo />*/}
      {/*<Trees />*/}
      <Pure />
      <List />
      <TextCounter />
      <State />
      <PropsExample />
      {/*<Messages />*/}
    </div>
  )
}

ReactDom.render(
  <Main />, 
  document.body.appendChild(document.createElement('div'))
)