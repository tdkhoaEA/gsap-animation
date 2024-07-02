import React from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function Welcome() {
    const container = useRef();
    const circle = useRef();

    useGSAP(
      () => {
        // use selectors...
        gsap.to(".box", { x: "+=200", rotation: 360, duration: 3 });

        // or refs...
        // gsap.to(circle.current, { rotation: "-=360", duration: 3 });
      },
      { scope: container }
    ); // <-- scope for selector text (optional)

    return (
        <div className="flex align-center justify-start min-h-screen w-full mx-auto mt-24 overflow-hidden">
            <div ref={container} className="container">
                <div className="box w-10 h-10 rounded-full bg-blue-700">selector</div>
                {/* <div className="circle bg-gradient-to-r from-green-500 to-green-700" ref={circle}>
                    Ref
                </div> */}
                </div>
            {/* <div className="box bg-gradient-to-r from-blue-500 to-blue-700">selector</div> */}
        </div>
    );
  }

export default Welcome;
