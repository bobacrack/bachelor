import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlankComponent from './main/Main';
import { DataService, useDataService } from './service/data.service';
import MainAA from './mainAA/MainAA';


function App() {


  const toast = useRef(null);
  const menuLeft = useRef<Menu>(null!);

  const dataService = useDataService();
  const { currentLevel, currentSize, setLevel, setSize } = dataService;


  /*
    var service = new DataService()
    var size = service.getSize();
  
    useEffect(() => {
      // Subscribe to changes in currentSize
      service.setSize("size1");
    }, []);
  
    useEffect(() => {
      // Check if currentSize has changed
      if (service.getSize() !== "size1") {
        // Do something when currentSize changes
        size = service.getSize();
        console.log("currentSize changed to: ", service.getSize());
      }
    }, [service.getSize()]);
  
    var level = service.getLevel();
  */
  const items = [
    { label: 'Level A', tabindex: "0", target: "_self" },
    { label: 'Level AA', tabindex: "0", target: "_self" },
    { label: 'Level AAA', tabindex: "0", target: "_self" },
    { separator: true },
    { label: 'Font size up 50%', command: () => upSize(), tabindex: "0" },
    { label: 'Font size down 50%', command: () => downSize(), tabindex: "0" },
  ]

  const upSize = () => {
    if (currentSize == "size1") {
      setSize("size15");
      console.log(currentSize);
      return
    }
    if (currentSize == "size15") {
      setSize("size2");
      console.log(currentSize);
      return
    }
    if (currentSize == "size2") {
      setSize("size2");
      console.log(currentSize);
      return
    }
    console.log("noting")
  }

  const downSize = () => {
    if (currentSize == "size1") {
      setSize("size1");
      console.log(currentSize);
      return
    }
    if (currentSize == "size15") {
      setSize("size1");
      console.log(currentSize);
      return
    }
    if (currentSize == "size2") {
      setSize("size15");
      console.log(currentSize);
      return
    }
  }

  return (
    <div className="App">
      <header>
        <h2>Accessibility Test</h2>
        <nav className="navbar">
          <ul className="navLinks">
            <li><a href="" tabIndex={0} target="_self">Home</a></li>
            <li><a href="/register/A" tabIndex={0} target="_self">About</a></li>
            <li><a href="#" tabIndex={0} target="_self">Contact</a></li>
          </ul>
        </nav>
        <div className='abutton'>
          <Toast ref={toast}></Toast>
          <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
          <Button label="a11y menu" icon="pi pi-align-left" className="mr-2"
            onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup />
          <div>
          </div>
        </div >
      </header >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DataService><BlankComponent /></DataService>} />
          <Route path='/main/AA' element={<MainAA />} />

        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
