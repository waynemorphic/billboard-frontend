import { useState } from 'react'
import Post from '../../components/formsDestructure/Post';

const Home = () => {
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
    const [newMessage, setMessage] = useState("What is happening?");
    const [newBTCAddress, setBTCAddress] = useState("gygy");
    const [newBTCAmount, setBTCAmount] = useState();
    const [newPaymentStatus, setPaymentStatus] = useState("paid");
  
  
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
      console.log("message object", messageObject);
      setPost(post.concat(messageObject));
      setMessage("");
      setBTCAddress("");
      setBTCAmount();
      setPaymentStatus("");
    };
  
  
    // event handler for onchange event on MessageForm component
    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    };
  
  
    // event handler for onchange event on MessageForm component
    const handleBTCAddressChange = (event) => {
      // console.log(event.target.value)
      setBTCAddress(event.target.value);
    };
  
    return (
      <div className="Home">
        {/* <Message /> */}
        <p>Post a message on our billboard in three easy steps</p>
        <Post
          handleMessageSubmit={handleMessageSubmit}
          changeMessage={handleMessageChange}
          stateMessage={newMessage}
          changeBTCAddress={handleBTCAddressChange}
          stateBTCAddress={newBTCAddress}
        />
      </div>
    );
  }
  export default Home