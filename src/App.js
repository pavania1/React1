import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message';
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParntComponent from './components/ParntComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Index from './components/Index'
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form  from './components/Form'
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import withCounter from './components/withCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User'
import Counterone from './components/Counterone';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PutForm from './components/PutForm';
import DeleteForm from './components/DeleteForm';

function App() {
  return (
    <div className="App">
      {/* <h1 className='error'>Error</h1>
       <h1 className={styles.success}>Success</h1>
        */}
     {/* <Greet name ="Pavsss" heroName="Goldwomen">
      <p>This is children props</p>
     </Greet>
     <Greet name ="Yashhhh" heroName="goldman">
      <button>Action</button>
     </Greet>
     <Greet name = "Panduu" heroName="Wonder man"></Greet>
     <Welcome name ="Pavsss" heroName="Goldwomen"> </Welcome>
     <Welcome name ="Yashhhh" heroName="goldman"></Welcome>
     <Welcome name = "Panduu" heroName="Wonder man"></Welcome>
      <Hello /> 
     <Message 
     >
     </Message>
     <Counter />
     <FunctionClick></FunctionClick>
     <ClassClick></ClassClick> */}
     {/* <EventBind></EventBind>
     <ParntComponent></ParntComponent>
     <UserGreeting></UserGreeting>
     <NameList></NameList>
     <Index></Index>
     <Stylesheet primary={true}></Stylesheet>
     <Inline></Inline>
     <Form></Form>
     <LifecycleA></LifecycleA>
     <FragmentDemo></FragmentDemo>
     <Table></Table>
     <ParentComp></ParentComp>
     <RefsDemo></RefsDemo> */}
     {/* <FocusInput/> */}
     {/* <FRParentInput></FRParentInput>
     <PortalDemo></PortalDemo>
     <ClickCounter name='pavaniii'></ClickCounter>
     <HoverCounter></HoverCounter>
     <withCounter></withCounter>
     <ClickCounterTwo></ClickCounterTwo>
     <HoverCounterTwo></HoverCounterTwo>
     <User render={(isLoggedIn)=>isLoggedIn?'Yash':'Guest'}></User> */}
     {/* <Counterone render ={(count, incrementCount)=> (
      <ClickCounterTwo count={count} incrementCount={incrementCount}/>
     )}
     />
     <Counterone
      render={(count, incrementCount) => (
        <HoverCounterTwo count={count} incrementCount={incrementCount} />
      )}
     /> */}
     {/* <UserProvider value="pavaniii">
      <ComponentC></ComponentC>
     </UserProvider>
     <PostList></PostList> */}
     <PostForm></PostForm>
     <PutForm></PutForm>
     <DeleteForm></DeleteForm>
    </div>
  );
}

export default App;
