const BTCAddressForm = ({ stateBTCAddress, changeBTCAddress }) => {
    return (
      <>
        <p>
          Pay in Bitcoin through Blockonomics an amount greater than the last
          user's{" "}
        </p>
        <input value={stateBTCAddress} onChange={changeBTCAddress} />
      </>
    );
  };
  export default BTCAddressForm