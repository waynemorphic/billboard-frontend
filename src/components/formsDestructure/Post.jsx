import BTCAddressForm from '../forms/BTCAddressForm'
import BTCAmountForm from '../forms/BTCAmountForm'
import MessageForm from '../forms/MessageForm'
import PaymentStatusForm from '../forms/PaymentStatusForm'
import VerificationButton from '../../ui/buttons/VerificationButton'


// Post component with several forms and a button
// Contains various input elements
//    a. post form
//    b. bitcoin address form
//    c. bitcoin amount form
//    d. payment status form
//    e. button that handles verification of details entered
const Post = ({
    handleMessageSubmit,
    stateMessage,
    changeMessage,
    stateBTCAddress,
    changeBTCAddress,
    stateBTCAmount,
    changeBTCAmount,
    stateStatus,
    changeStatus
  }) => {
    return (
      <>
        <form onSubmit={handleMessageSubmit}>
          <MessageForm
            changeMessage={changeMessage}
            stateMessage={stateMessage}
          />
          <BTCAddressForm
            stateBTCAddress={stateBTCAddress}
            changeBTCAddress={changeBTCAddress}
          />
          <BTCAmountForm
            stateBTCAmount={stateBTCAmount}
            changeBTCAmount={changeBTCAmount}
          />
          <PaymentStatusForm
            stateStatus={stateStatus}
            changeStatus={changeStatus}
          />
          <VerificationButton />
        </form>
      </>
    );
  };
  export default Post