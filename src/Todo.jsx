import React, { useEffect, useState } from "react";
import { TextInput, Button } from "flowbite-react";
import db from './config/Firebase';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore"; 
import CustomModal from './Modal';

function Todo() {
  let [input, setInput] = useState("");
  let [todo, setTodo] = useState([]);
  let [isUpdating, setIsUpdating] = useState(false);
  let [currentIndex, setCurrentIndex] = useState(null);
  const [flag, setFlag] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  function changeData(e) {
    setInput(e.target.value);
  }

  function toogle(data) {
    console.log(data);
    setFlag(!flag);
  }

  async function save() {
    const collecref = collection(db, "todo");
    const docRef = await addDoc(collecref, { title: input });
    
    setTodo([...todo, { id: docRef.id, title: input, isDone: false }]);
    console.log(docRef)
    setInput("");
  }

  useEffect(() => {
    let arr;
    onSnapshot(collection(db, "todo"), (snapshot) => {
        arr = snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
        })
        setTodo([...arr]);
    })
  }, []);

  function changeDone(index) {
    let newTodo = [...todo];
    newTodo[index].isDone = !newTodo[index].isDone;
    setTodo(newTodo);
  }

  async function deleteTodo(index) {
    const docRef = doc(db, "todo", todo[index].id);
    await deleteDoc(docRef);
    let newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  }

  function update(index) {
    setCurrentIndex(index);
    setCurrentTodo(todo[index]);
    setIsUpdating(true);
    setFlag(true);
  }

  async function saveUpdate(updatedTodo) {
    const docRef = doc(db, "todo", todo[currentIndex].id);
    await updateDoc(docRef, { title: updatedTodo });

    let newTodo = [...todo];
    newTodo[currentIndex].title = updatedTodo;
    setTodo(newTodo);
    setIsUpdating(false);
    setCurrentIndex(null);
    setFlag(false);
  }

  return (
    <div className="w-full flex flex-col">
      <div className="flex mb-2 w-full">
        <TextInput
          value={input}
          onChange={changeData}
          id="small"
          type="text"
          className="flex-1 mr-2 py-2 px-4 text-sm" 
          style={{ height: '50px' }} 
        />
        <Button
          onClick={isUpdating ? saveUpdate : save}
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          {isUpdating ? "Save Update" : "Save"}
        </Button>
      </div>
  
      <ul className="flex flex-col">
        {todo.map((item, index) => (
          <div key={index} className="flex items-center mb-2 w-full">
            <li
              style={{ textDecoration: item.isDone ? "line-through" : "none" }}
              onClick={() => changeDone(index)}
              className={`flex-1 ${index % 2 === 0 ? "bg-slate-500" : "bg-orange-300"} p-2`}
            >
              {item.title}
            </li>
            <Button
              onClick={() => update(index)}
              className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Update
            </Button>
            {item.isDone && (
              <Button
                onClick={() => deleteTodo(index)}
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delete
              </Button>
            )}
          </div>
        ))}
      </ul>
      <CustomModal 
        flag={flag} 
        func={toogle} 
        currentTodo={currentTodo} 
        saveUpdate={saveUpdate} 
      />
    </div>
  );
}

export default Todo;
