```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/parent/:id" element={<Parent />}>
          <Route path=":childId" element={<Child />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

function Parent() {
  let {id} = useParams();
  return (
    <div>
      <h2>Parent {id}</h2>
      <Routes>
        <Route path=":childId" element={<Child />} />
      </Routes>
    </div>
  );
}

function Child() {
  let {childId} = useParams();
  return <div>Child {childId}</div>;
}

export default App;
```