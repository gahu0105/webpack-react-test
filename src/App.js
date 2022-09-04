// src/App.js

import React from 'react';

// const App = () =>(
//     <div>
//         Hello Webpack!!!
//     </div>
// );
//사용자 정의 태그 => 컴포넌트
// 반드시 대문자로 시작해야 한다.
function Header(){
    return <header>
        <h1><a href="/">Web</a></h1>
    </header>
}

function Nav(){
    return  <nav>
                <ol>
                    <li><a href="/read/1">Html</a></li>
                    <li><a href="/read/2">CSS</a></li>
                    <li><a href="/read/3">Javascript</a></li>
                </ol>
            </nav>
}

function Article(){
    return <article>
        <h2>Welcome</h2>
        Hello, Web
    </article>
}

function App() {
    return (
        <div>
            <Header/>
            <Nav />
            <Article />
        </div>
    );
}
export default App;