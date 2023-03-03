const PaymentStatusForm = ({ stateStatus, changeStatus }) => {
    return (
      <>
        <input value={stateStatus} onChange={changeStatus} />
      </>
    );
  };
  export default PaymentStatusForm