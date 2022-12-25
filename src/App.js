import React from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = React.useState(0);
  const [nith, setNithi] = React.useState(0);
  const handle = (pre) => {
    setCount((pre) => pre + 1);
  };
  React.useEffect(() => {
    console.log(count);
  }, [count]);

  const nithish = (prve) => {
    console.log(nith)
    setNithi((prve) => prve + 2);
  };

React.useEffect(()=>{
  console.log(nith)

},[nith])


  return (
    <div>
      <h1>useeFfect</h1>
      {count}
      <p>nithish</p>
      {nith}
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={handle}>button</button> <br/>
      <p>nithih</p>
      <button onClick={nithish}>button</button>
    </div>
  );
}
