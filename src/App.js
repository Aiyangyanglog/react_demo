import React from 'react';
// import logo from './logo.svg';
// import LikeButton from './Demo/LikeButton';
// import List from './Demo/List';
// import Module from './Demo/Module';
import CommentApp from './project/CommentApp';

import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <CommentApp/>
    </div>
    // <LikeButton color='red' like='赞' notLike='不赞' onClick={() => console.log('121212')}/>
    // <List />
    // <Module />
  );
}

export default App;
