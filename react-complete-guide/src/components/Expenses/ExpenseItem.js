import ExpenseDate from "../Expenses/ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
function ExpenseItem(props) {
    function clickHandler(){
        console.log('Clicked!!!!');
    }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
          <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
