import "./styles.css";
import { useState } from "react";
import Post from "./components/card/Post";

// Message component
// Has the current state of the application
// Current user has paid the maximum amount of BTC
// const Message = ({post}) => { 
//   return (
//     <>
//       <h3>Live Message</h3>
//       {post.map(i =>
//         <p key = {post.indexOf(i)}>
//           {i.message} 
//           <br></br>
//           {i.bitcoinAmount}
//         </p>       
//         )}
//       {/* <h4>Tyler Thiel</h4>
//       <p>
//         We have elected to put our money and faith in a mathematical framework
//         that is free of politics and human error.
//       </p> */}
//     </>
//   );
// };

export default function App() {
  const [post, setPost] = useState([
    {
      // username: "Tyler Perry",
      message: "We are here for sure",
      bitcoinAddress: "ghyhy",
      bitcoinAmount: 0.00067,
      paymentStatus: "paid"
    }
  ]);
  // const [newUsername, setUsername] = useState()
  const [newMessage, setMessage] = useState('');
  const [newBTCAddress, setBTCAddress] = useState('');
  const [newBTCAmount, setBTCAmount] = useState('');
  const [newPaymentStatus, setPaymentStatus] = useState('');
  const [showMessage, setShowMessage] = useState(Math.max(post.map(i => parseFloat(i.bitcoinAmount))))
  console.log("",post.map(i => parseFloat(i.bitcoinAmount)))

  // event handler for onSubmit event on MessageForm component
  const handleMessageSubmit = (event) => {
    event.preventDefault();

    // Post object since Post component contains all the input values in a single form element
    const messageObject = {
      message: newMessage,
      bitcoinAddress: newBTCAddress,
      bitcoinAmount: newBTCAmount,
      paymentStatus: newPaymentStatus
    };

    // an array of all amounts entered
    const amountArray = post.map(i => parseFloat(i.bitcoinAmount))
    // const maxAmount = amountArray.reduce((a,b) => Math.max(a, b), -Infinity)
    const checkMax = Math.max(...amountArray)
    const currentAmmount = newBTCAmount

    // condition checking max amount in array and the current value entered
    if (currentAmmount > checkMax){
      // console.log("wow", newBTCAmount > checkMax, newBTCAmount , checkMax)
      setPost(post.concat(messageObject));
      setBTCAmount(currentAmmount);
      setMessage('');
      setBTCAddress('');    
      setPaymentStatus('');
    }    
  };

  // filters the objects to retrieve object with the maximum btc amount in the array
  // if not max, the button is unresponsive
  const messageToShow = showMessage
  ? post
  : post.filter((i) => i.bitcoinAmount < Math.max(...post.map(i => parseFloat(i.bitcoinAmount))))
  console.log("message to show", messageToShow)

  // event handler for onchange event on MessageForm component
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  // event handler for onchange event on Address form component
  const handleBTCAddressChange = (event) => {
    // console.log(event.target.value)
    setBTCAddress(event.target.value);
  };

  // event handler for onchange event on Amount form component
  const handleBTCAmountChange = (event) => {
    // console.log(event.target.value)
    setBTCAmount(event.target.value);
  };

  // event handler for onchange event on Status form component
  const handleStatusChange = (event) => {
    setPaymentStatus(event.target.value);
  };

  return (
    <div className="App">
      {/* <Message post = {post} /> */}
      <div>
        {messageToShow.map(i => 
          <p key = {messageToShow.indexOf(i)}>
            {i.message} <br></br> {i.bitcoinAmount}
          </p>
        )}
      </div>
      <h3>Post a message on our billboard in three easy steps</h3>
      <Post
        handleMessageSubmit={handleMessageSubmit}
        changeMessage={handleMessageChange}
        stateMessage={newMessage}
        changeBTCAddress={handleBTCAddressChange}
        stateBTCAddress={newBTCAddress}
        stateBTCAmount={newBTCAmount}
        changeBTCAmount={handleBTCAmountChange}
        stateStatus={newPaymentStatus}
        changeStatus={handleStatusChange}
      />
    </div>
  );
}
