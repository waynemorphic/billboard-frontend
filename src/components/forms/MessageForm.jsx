const MessageForm = ({ stateMessage, changeMessage }) => {
    return (
      <>
        <p>Write a message</p>
        <input value={stateMessage} onChange={changeMessage} />
      </>
    );
  };
  export default MessageForm