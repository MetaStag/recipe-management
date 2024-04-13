import Faq from './components/Faq.js'
import Browse from './components/Browse.js';
import Add from './components/Add.js';

import { useState } from "react";

const App = () => {
  const [option, setOption] = useState(0)

  const handleClick = (n) => {
    setOption(n)
  }

  let displayComponent;
  switch (option) {
    case 0:
      displayComponent = <Browse />
      break
    case 1:
      displayComponent = <Add />
      break
    case 2:
      displayComponent = <Faq />
      break
    default:
      displayComponent = <p>Error!</p>
  }

  return (
    <div>
      <div className="bg-[#98724FE0] h-16 flex justify-between">
            <p className="text-2xl p-3 mr-auto">Btech Recipe Wala</p>
            <p className="text-lg p-3" onClick={()=>handleClick(0)}>Browse</p>
            <p className="text-lg p-3" onClick={()=>handleClick(1)}>Add Recipe</p>
            <p className="text-lg p-3" onClick={()=>handleClick(2)}>FAQ</p>
        </div>
        {displayComponent}
    </div>
  );
}

export default App;