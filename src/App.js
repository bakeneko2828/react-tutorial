import { useState } from "react";
import { List } from "./List";
import { Form } from "./Form";

function App() {
  const [description, setDescription] = useState("クリック前");
  const [tab, setTab] = useState('list');

  const changeDescription = () => {
    setDescription("クリック後")
  }

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab('list')}>リスト</li>
          <li onClick={() => setTab('form')}>フォーム</li>
        </ul>
      </header>
      <hr></hr>
      {
        tab === 'list' ? <List /> : <Form />
      }
    </div>
  );
}

export default App;
