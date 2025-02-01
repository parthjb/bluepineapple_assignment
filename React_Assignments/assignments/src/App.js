import logo from './logo.svg';
import './App.css';
import {useState, useRef, useEffect} from 'react';


/**
 * Fetches user data from an API
 * @returns {JSX element} React component that fetches and displays user information
 */
function APICalls() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    /**
   * Fetches the data the API and update the state
   * @async
   * @function featchUser
   * @returns {Promise<void>} updates the users state with data
   */
    const fetchUser = async() => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
    }; fetchUser();
  },[]);
  

  return (
    <>
      <h1>User Information</h1>
      <ul>
        {
          users.slice(0,1).map((user) => (
            <li>Name: {user.name} and Email: {user.email}</li>
          ))
        }
      </ul>
    </>
  )
}

/**
 * Focus input component
 * @function FocusingInput
 * @returns {JSX.Element} React component that focuses on input field when button is clicked.
 */
function FocusingInput() {
  const inputFocus = useRef();//useRef hook to access the DOM element directly.


  /**
   * Focuses on a field when button is clicked.
   * @function focusing
   */
  const focusing = () => {
    inputFocus.current.focus();
  }
  return (
    <>
      <h1>Input Focus</h1>

      <input type='text' ref={inputFocus}/>{/* input field for to get focused when button is clicked */}

      <button onClick={focusing}>Focusing Input Field</button>{/* button with onclick event of arrow function */}
    </>
  )
}


/**
 * ToDoList component
 * @function ToDoList
 * @returns {JSX.Element}; React component that display's the ToDoList.
 */
function ToDoList() {
  /**
   *Array of tasks.
   */
  let todoList =   [{id:1, todo:"Coding"},
                 {id:2, todo:"Waking"},
                 {id:3, todo:"Footabll;"} ];
  return (
    <>
      <h1>ToDo List</h1>
      <ul> 
      {todoList.map((task) => (
          <li key={task.id}>{task.todo}</li> // Using map() to render tasks
        ))}
      </ul>
    </>
  )
}



/**
 * Reciver component in sibling components
 * @function Reciver
 * @param {String} props 
 * @returns {JSX.Element} React componenet that display the user message.
 */
function Reciver(props) {
  return (
    <>
      <h1>Message is recived : {props.message}</h1>{/* rendring message */}
    </>
  )
}



/**
 * Sender component in sibling components
 * @function Sender
 * @returns {JSX.Element} React component that takes the user input and return that input to the parent
 */
function Sender({setMessage}) {
  const[message,localMessage] = useState("");//local usestate for to take the user input in the message and
  return (
    <>
      <input type='text' onChange={(event) => localMessage(event.target.value)}></input>{/* to take user input*/}
      <button onClick={() => setMessage(message)}>Send message!</button>{/* setMessage will return's the value to the parent component */}
    </>
  )
}



/**
 * Sibling component parent
 * @funtion Sibling
 * @returns 
 */
function Sibling() {
  let [message, setMessage] = useState("");//this useState for sibling components

  return (
    <>
      <h1>Sibling components</h1> {/* heading for the sibling component */}

      <Sender setMessage={setMessage} /> {/* this component will take the message from the user and return it. */}

      <Reciver message={message}/> {/* this component renders the user given message */}
    </>
  )
}


/**
 * Counter component that has a button to increase the count.
 * @function Counter
 * @returns {JSX.Element}
 */
function Counter() {
  let [count, setCount] = useState(0);//this useState for counter
  
  return (
    <>
      <h1>My Counter App</h1> {/* heading for the component */}

      <button onClick={() => setCount(count+1)}>Counter</button> {/* counter button to increase the count whenever user clicks the button */}

      <p>{count}</p>{/* paragraph to show to the count value */}
    </>
  )
}


function App() {
  return (
    <div className="App">
      <Counter />
      <Sibling />
      <ToDoList />
      <FocusingInput />
      <APICalls />
    </div>
  );
}

export default App;
