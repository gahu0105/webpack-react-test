// src/App.js

import React from 'react';

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
        <h1><a href="/">{props.title}</a></h1>
    </header>
}

function Nav(props){
    const lis = []
    for(let i=0; i<props.topics.length; i++)
    {
        let t = props.topics[i];
        lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
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
    const topics = [
        {id:1, title:'html', body:'html is ...'},
        {id:2, title:'css', body:'css is ...'},
        {id:3, title:'javascript', body:'javascript is ...'}
    ]
    return (
        <div>
            <Header title="WEB"/>
            <Nav topics = {topics}/>
            <Article title="Welcome" body="Hello, Web!!"/>
        </div>
    );
}
export default App;