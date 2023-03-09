import "./index.css";
// Post component with a form, several input fields and a button
//    a. post form
//    b. bitcoin address input
//    c. bitcoin amount input
//    d. use email input
//    e. button that handles onclick event

const Post = ({
  handleMessageSubmit,
  stateMessage,
  changeMessage,
  stateEmail,
  changeEmail,
  stateBTCAmount,
  changeBTCAmount,
  payment
}) => {
  return (
    <>
      <form onSubmit={handleMessageSubmit} className="form-area">        
        <label>
          Email Address
          <input
            value={stateEmail}
            onChange={changeEmail}
            required
            type="email"
            itemType="email"
            placeholder="Email Address"
          />
        </label>
        <label>
          Bitcoin Amount
          <input
            id="amount"
            type="number"
            step="0.000001"
            min={0}
            value={stateBTCAmount}
            onChange={changeBTCAmount}
            placeholder="Bitcoin Amount"
          />
        </label>        
        <p>Write Message</p>
        <textarea
          value={stateMessage}
          required
          rows={5}
          cols={40}
          onChange={changeMessage}
          placeholder="What is happening?"
        />
        <button
          type="submit"
          id = "pay"
          className="post-btn"
          // onClick={payment}          
        >
          Pay & Post Message
        </button>
      </form>
    </>
  );
};
export default Post;
