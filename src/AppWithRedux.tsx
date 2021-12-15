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
import {Provider} from "react-redux";
import {store} from "./redux/store";
import ReactSummary from "./components/React/ReactSummary";
import Js from "./components/js/Js";

type AppPropsType = {}

const AppWithRedux = (props: AppPropsType) => {

    return (
        <Provider store={store}>
        <div className="app-wrapper">
            <Header />
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/"
                       render={() => <Theory />}/>

                <Route path="/theory"
                       render={() => <Theory />}/>
                <Route path="/react"
                       render={() => <ReactSummary />}/>
                <Route path="/js"
                       render={() => <Js />}/>
                <Route path="/practice"
                       render={() => <Practice />}/>
                <Route path="/cards"
                       render={() => <Cards />}/>
                <Route path="/resource"
                       render={() => <Resource/>}/>
                <Route path="/test"
                       render={() => <Test />}/>

            </div>
        </div>
        </Provider>
    );
}

export default AppWithRedux;
