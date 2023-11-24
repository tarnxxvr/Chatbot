
import './App.css';
import {QueryClient, QueryClientProvider} from 'react-query';
import Calling from './Calling';
import HtmlText from './HtmlText';
import TypingEffectComponent from './TypingEffectComponent'; 
import TestSpinner from './TestSpinner';
import Parent from './Parent';
import TestReact from './TestReact';
const client =new QueryClient(); 


const htmlText = '<h1>Hello</h1> <p> This is a sample message with <strong>HTML tags</strong>.</p>';

function App() {
  return (
<QueryClientProvider client={client}>
    <div className="App">
     Hello
     <Calling/> 
     {/* <TypingEffectComponent htmlText={htmlText} /> */} 
     <TestSpinner/>
     <Parent/>
     <TestReact/>
    </div>
    </QueryClientProvider>
  );
}

export default App;
