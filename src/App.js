// src/App.js

import React from 'react';
import {useState} from 'react';

// const App = () =>(
//     <div>
//         Hello Webpack!!!
//     </div>
// );
//사용자 정의 태그 => 컴포넌트
// 반드시 대문자로 시작해야 한다.
function Header(props){
    console.log('props', props);
    return <header>
        <h1><a href="/" onClick={function(event){
            event.preventDefault(); //기본동작 방지, 클릭해도 Reload 안됨
            props.onChangeMode();
        }}>{props.title}</a></h1>
    </header>
}

function Nav(props){
    const lis = []
    for(let i=0; i<props.topics.length; i++)
    {
        let t = props.topics[i];
        lis.push(<li key={t.id}>
            <a id={t.id} href={'/read/'+t.id} onClick={(event)=>{
                event.preventDefault();
                props.onChangeMode(Number(event.target.id));
            }}>{t.title}</a></li>)
    }
    return  <nav>
                <ol>
                    {lis}
                </ol>
            </nav>
}

function Article(props){
    return <article>
        <h2>{props.title}</h2>
        {props.body}
    </article>
}

function App() {
    // const _mode = useState("WELCOME");
    // const mode = _mode[0];
    // const setMode = _mode[1];
    const [mode, setMode] = useState("WELCOME");
    const [id, setID] = useState(null);
    const topics = [
        {id:1, title:'html', body:'html is ...'},
        {id:2, title:'css', body:'css is ...'},
        {id:3, title:'javascript', body:'javascript is ...'}
    ]
    let content = null;
    if(mode === "WELCOME"){
        content = <Article title="Welcome" body = "Hello, WEB" />
    }else if(mode === "READ"){
        let title, body = null;
        for(let i=0; i<topics.length; i++){
            console.log(topics[i].id, id);
            if(topics[i].id === id){
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = <Article title={title} body={body} ></Article>
    }
    return (
        <div>
            <Header title="WEB" onChangeMode={()=>{
                setMode("WELCOME");
            }}/>
            <Nav topics = {topics} onChangeMode={(_id)=>{
                setMode("READ");
                setID(_id);
            }}/>
            {content}
            </div>
    );
}
export default App;