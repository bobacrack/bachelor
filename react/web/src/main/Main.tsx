import React, { Component } from 'react';
import { DataService, useDataService } from '../service/data.service';


function BlankComponent() {

    const dataService = useDataService();

    // Access the data service values and functions
    const { currentLevel, currentSize, setLevel, setSize } = dataService;

    // Use the values and functions in your component
    // For example:
    return (
        <div>
            <p>Current Level: {currentLevel}</p>
            <p>Current Size: {currentSize}</p>
            <button onClick={() => setLevel('B')}>Set Level to B</button>
            <button onClick={() => setSize('Size2')}>Set Size to Size2</button>
        </div>
    );
}

export default BlankComponent;