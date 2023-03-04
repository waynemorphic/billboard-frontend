const PaymentStatusForm = ({ stateStatus, changeStatus }) => {
  return (
    <>
      <select value={stateStatus} onChange={changeStatus} placeholder = "Payment Status">
        <option value="pending">Pending</option>
        <option value="cancelled">Cancelled</option>
        <option value="completed">Completed</option>
      </select>
    </>
  );
};
export default PaymentStatusForm;
