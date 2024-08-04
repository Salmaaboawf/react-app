import { Button, Label, Modal as FlowbiteModal, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";

export default function CustomModal({ flag, func, currentTodo, saveUpdate }) {
  const [todo, setTodo] = useState('');

  useEffect(() => {
    if (currentTodo) {
      setTodo(currentTodo.title);
    }
  }, [currentTodo]);

  function onCloseModal() {
    func(false);
    setTodo('');
  }

  function onSave() {
    saveUpdate(todo);
    onCloseModal();
  }

  return (
    <>
      <FlowbiteModal show={flag} size="md" onClose={onCloseModal} popup>
        <FlowbiteModal.Header />
        <FlowbiteModal.Body>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="todo" value="Enter your todo" />
              </div>
              <TextInput
                id="todo"
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
                required
              />
              <Button
                onClick={onSave}
                className="text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Save Update
              </Button>
            </div>
          </div>
        </FlowbiteModal.Body>
      </FlowbiteModal>
    </>
  );
}
