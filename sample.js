import { useState } from 'react';

const ChildB = () => {
  console.log('render B!')
  return(<div>これはB</div>);
};

const ChildA = ({ count }) => {
  console.log('render A!')
  console.log(`count is ${count}`)
  return(<div><ChildB /></div>);
};

const Parent = () => {
  const [count, setCount] = useState(0);

  console.log('render Parent');
  console.log(count);
  return(
    <div>
      <button onClick={() => { setCount((prevCount) => prevCount + 1) }}>ボタン</button>
      <ChildA count={1} />
    </div>
  );
};
