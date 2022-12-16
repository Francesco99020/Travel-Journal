import React from "react";
import {createRoot} from 'react-dom/client';
import Header from "./componets/Header";
import Card from "./componets/Card";
import Footer from "./componets/Footer";
import './index.css';
import data from "./data";

function Page(){
    const Cards = data.map(x => {
        return <Card
            key={x.id}
            {...x}
        />;
    })

    return(
        <div>
            <Header />
            <div className="card-tray">
                {Cards}
            </div>
            <Footer />
        </div>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<Page />);
