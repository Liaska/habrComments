import './App.css';
import Header from './components/header/Header.component';
import Section from './components/section/Section.component';
import Comments from './components/comments/Comments.component';
import Aside from "./components/aside/Aside.components"

function App() {
  return (
    <div className='app'>
      <Header />
      <Section>
        <Comments></Comments>
        <Aside title={"Участники"}></Aside>
      </Section>
    </div>
  );
}

export default App;
