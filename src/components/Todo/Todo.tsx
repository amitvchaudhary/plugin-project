import "./Todo.css";

export const Todo = (props: any) => {
  console.log('each todo ===');
  console.log(props);
  return (
    <div className="item">
      <div>{props.data.id}</div>
      <div>{props.data.title}</div>
      <br></br>
    </div>
  );
}