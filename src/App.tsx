import { useState } from 'react'

import './App.scss'

import AppRoutes from './AppRoutes'
import { Tweet } from './components/Tweet'

export default function App() {
  const [tweets, setTweets] = useState<string[]>([
    "Tweet 1", "Tweet 2", "Tweet 3", "Tweet 4"
  ])

  function createTweet() {
    setTweets([...tweets, "Tweet 5"])
  }

  return (
    <AppRoutes />

    // <div>
    //   {tweets.map((tweet, index) => <Tweet key={index} text={tweet} />)}
    //   <button
    //     onClick={createTweet}
    //     style={{
    //       border: 0,
    //       backgroundColor: '#8257e6',
    //       padding: '5px 12px',
    //       color: '#fff',
    //     }}
    //   >Adicionar tweet</button>
    // </div>
  )
}
