import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Resource from "./components/Resources/Resourse";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Practice from "./components/Practice/Practice";
import Theory from "./components/Theory/Theory";
import Test from "./components/Test/Test";

type AppPropsType = {}

const App = (props: AppPropsType) => {

    return (
        <div className="app-wrapper">
            <Header />
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/"
                       render={() => <Theory />}/>
                <Route path="/theory"
                       render={() => <Theory />}/>
                <Route path="/practice"
                       render={() => <Practice />}/>
                <Route path="/cardsQuestion"
                       render={() => <Cards />}/>
                <Route path="/resource"
                       render={() => <Resource/>}/>
                <Route path="/test"
                       render={() => <Test />}/>

            </div>
        </div>

    );
}

export default App;
