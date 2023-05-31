import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [person,setPerson] = useState({
    firstName: '',
    lastName: ''
  });
  const [isLoading, setLoading] = useState(false);
  
  return (
    <div>
      {firstName} {lastName}
    </div>
  );
}

export default App;
