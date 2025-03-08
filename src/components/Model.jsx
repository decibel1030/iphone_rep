import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ModelView from './ModelView';
import { yellowImg } from '../utils';

const Model = () => {
    const [size, setSize] = useState("small");
    const [model, setModel] = useState({
        title: "Iphone 15 pro in Natural Titanium",
        color: ["#0f8a81", "#ffe789", "#6f6c64"],
        img: yellowImg,
    })

    // camera control
    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();

    
    useGSAP(()=>{
        gsap.to("#heading", {
            y: 0,
            opacity: 1,
            ease: "power4.out",
            duration: 1,
        })
    })
    return (
        <section className='common-padding'>
            <div className="screen-max-width">
                <h1 id="heading" className='section-heading'>Model
                    Take a closer look
                </h1>

                <div className="flex flex-col items-center mt-5">
                    <div className="w-full h-[75vh] md:h[90vh] overflow-hidden relative">
                        <ModelView />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Model;
