import "../form/index.css"
import btc from '../../assets/png/btc.png'

// Message component
// Has the current state of the application
// Current user has paid the maximum amount of BTC

const Message = ({ post }) => {
  if (post.length === 0){
    return(
    <></>)
  }
  return (
    <div className="messageText">
      <h3><img src={btc} alt="BTC" className="btc-header-image" />Live Message</h3> 
      {post.map((i) => (
        <p key={post.indexOf(i)}>
          {i.message}
          <p className="bitcoinAmount">
            {i.bitcoinAmount} BTC
            {/* {i.value} BTC */}
          </p>
        </p>
      ))}
    </div>
  );
};
export default Message