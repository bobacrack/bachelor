import React from 'react'
import './MainAA.css'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import gordon from '../assets/gordonPlant.jpg'
import chris from '../assets/pexels-chris-hepworth-16047549.jpg'
import christ from '../assets/pexels-christyn-reyes-13458334.jpg'
import josh from '../assets/pexels-josh-withers-16978839.jpg'
import stjin from '../assets/pexels-stijn-dijkstra-16747506 (1).jpg'

function MainAA() {


    const headerGordon = (
        <img alt="Card" src={gordon} />
    );


    return (
        <div>
            <div className="welcome">
                <h1 tabIndex={0}>Welcome</h1>
                <h2 tabIndex={0}>Home Level AAA</h2>
            </div>
            <div className='contentContainer'>
                <div className="card flex justify-content-center">
                    <Card title="Title" subTitle="Subtitle" header={headerGordon} className="card">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
            </div>
            <div className='contentContainer'>
                <div className="card flex justify-content-center">
                    <Card title="Title" subTitle="Subtitle" header={headerGordon} className="md:w-25rem">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
            </div>
            <div className='contentContainer'>
                <div className="card flex justify-content-center">
                    <Card title="Title" subTitle="Subtitle" header={headerGordon} className="md:w-25rem">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
            </div>
            <div className='contentContainer'>
                <div className="card flex justify-content-center">
                    <Card title="Title" subTitle="Subtitle" header={headerGordon} className="md:w-25rem">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
            </div>
            <div className='contentContainer'>
                <div className="card flex justify-content-center">
                    <Card title="Title" subTitle="Subtitle" header={headerGordon} className="md:w-25rem">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
            </div>

        </div >
    );
}

export default MainAA