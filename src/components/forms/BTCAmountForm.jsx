const BTCAmountForm = ({ stateBTCAmount, changeBTCAmount }) => {
    return (
      <>
        <input value={stateBTCAmount} onChange={changeBTCAmount} />
      </>
    );
  };
  export default BTCAmountForm