import React from "react";
import Dictionary from "./Dictionary";
import emojipedia from "../emojipedia";


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      
      <dl className="dictionary">
       {emojipedia.map(dict => {
         return (<Dictionary 
          key= {dict.id}
          id= {dict.id}
          emojiImg= {dict.emoji}
          emojiName= {dict.name}
          emojiMean= {dict.meaning}

        />)
       })}
      </dl>
    </div>
  );
}

export default App;
