import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./components/form/Post";
import "./index.css";
import Message from './components/message/Message'
import btc from './assets/btc.png'

export default function App() {
  const [post, setPost] = useState([]);
  const [email, setEmail] = useState('')
  const [newMessage, setMessage] = useState("");
  const [newBTCAmount, setBTCAmount] = useState(0.0001);

  // blockonomics payment widget
  const payInBTC = () => {
    console.log("fired widget")
    /* eslint-disable-next-line no-undef*/
    Blockonomics.widget({
      msg_area: 'pay_bitcoin',
      uid: "82afd9b6f3244e91",
      email: email,
      amount: newBTCAmount,
      message: newMessage
    })
  }

  // getting data from server to verify payment status
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3002/transactions')
  //     .then(response => {
  //       // array of anounts actually paid
  //       let paidArray = response.data.map((i) => i.paid_satoshi)

  //       // retrive the max amount of actual payment made
  //       const dataChecker = response.data.filter((i) => i.paid_satoshi === Math.max(...paidArray))
  //       console.log("paid satoshi", dataChecker)

  //       // set the filtered object to the state of the app
  //       setPost(dataChecker)
  //       console.log("status check",response.data)
  //     })
  // }, [])

  // amount entered by customer
  const btcToPayArray = post.map((i) => i.value)
  console.log("array of btc amounts from back end", btcToPayArray)
  const maxAmount = Math.max(...btcToPayArray)
  console.log("max amount",Math.max(...btcToPayArray))

  // status is paid
  const status = post.filter((i) => i.status === 2) // change this later to 2
  console.log("status array of paid elements",status)

  // amount actually paid by the customer in satoshi
  const statusPaid = status.map((i) => i.paid_satoshi)
  console.log("anount paid in satoshi", statusPaid)

  // max amount among the satoshi values where status is paid
  const maxPaid = Math.max(...statusPaid)
  console.log("max amount from status paid float", maxPaid)

  // event handler for onSubmit event on MessageForm component
  const handleMessageSubmit = (event) => {
    event.preventDefault();

    // Post object since Post component contains all the input values in a single form element
    const messageObject = {
      email: email,
      message: newMessage,
      bitcoinAmount: newBTCAmount,
    };
    console.log("message object", messageObject.bitcoinAmount)

    if (parseFloat(messageObject.bitcoinAmount) > maxAmount && parseFloat(messageObject.bitcoinAmount * 100000000) > maxPaid) {
      setPost(post.concat(messageObject))
    }
    if (parseFloat(messageObject.bitcoinAmount) > parseFloat(post[0].bitcoinAmount)){
      setPost((post.length = 0));
      setPost(post.concat(messageObject));
      setEmail('')
      setBTCAmount("");
      setMessage("");
    }
    else{
      // alert(`Enter Bitcoin higher than ${maxAmount} Satoshi`)
      alert(`Enter Bitcoin higher than ${post[0].bitcoinAmount} bitcoins`)
    }
  };

  // event handler for onchange event on MessageForm component
  const handleMessageChange = (event) => setMessage(event.target.value);

  // event handler for onchange event on Amount form component
  const handleBTCAmountChange = (event) => setBTCAmount(event.target.value);

  // event handler for email input
  const handleEmailInput = (event) => setEmail(event.target.value);

  return (
    <div className="app-outer">
      <h3><img src={btc} alt="BTC" className="btc-png" />BitMessager</h3>
        <div className="App">      
        <Message post={post} />
        <div className="post-area">
          <h3 className="first-heading">
            Post a message on our billboard in three easy steps
          </h3>
          <Post
            handleMessageSubmit={handleMessageSubmit}
            changeMessage={handleMessageChange}
            stateMessage={newMessage}
            stateEmail={email}
            stateBTCAmount={newBTCAmount}
            changeBTCAmount={handleBTCAmountChange}
            changeEmail = {handleEmailInput}
            // payment = {payInBTC}
          />  
          <div id = "pay_bitcoin"></div>
        </div>
      </div>
    </div>
  );
}
