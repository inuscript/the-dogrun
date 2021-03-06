const { Observable } = require("rxjs")
const assert = require("assert")
const { combineEpics } = require("redux-observable")
const testSubject = require("./testHelper")

const pingEpic = (action$) => 
  action$.ofType("PING")
    .concat(() => ({type: "PONG"}))

// const pongEpic = (action$) => 
//   action$.ofType("PONG")
//     .concat(() => ({type: "PUNG"}))

const rootEpic = combineEpics(
  pingEpic//,
  // pongEpic
)

describe('Epic test', () => {
  it('PING -> PONG', () => {
    const subject = testSubject(rootEpic)

    const promise = subject
      .take(2)
      .toArray()
      .toPromise()
      .then( result => {
        console.log(result)
        const expect = [ 
          { type: 'PING' },
          { type: 'PONG' }, 
          // { type: 'PUNG' }, 
        ]
        assert.deepEqual(expect, result)
      })
    subject.next({
      type: "PING",
    })

    return promise
  })
});