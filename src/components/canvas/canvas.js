import { useEffect, useRef, useState } from "react";
import { LeftSideBar, RightSideBar } from "../sidebar/sidebar";
import { draw, drawMargins, handleClick, handleMouseDown, handleMouseMove, handleResize } from "../../controller/main";
import { content } from "../../controller/file";
import { useGesture } from '@use-gesture/react';

export const Canvas = () => {
    const canvasRef = useRef(null);
    const [selectedEleIndex, setSelectedEleIndex] = useState([-1]);
    const [cont, setCont] = useState(content.sheets[1].elemets);
    const [mouseDown, setMouseDown] = useState({state:false,type:null});
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const bind = useGesture({
        onPinch: ({ da: [d, a], origin: [x, y] }) => {
            console.log(`Pinch detected. Distance: ${d}, angle: ${a}`);
            console.log(`Origin: x=${x}, y=${y}`);
            // Handle the pinch event here
        },
    });

    useEffect(() => {
        const canvas = canvasRef.current;

        const handleCanvasClick = (event) => {
            setSelectedEleIndex(handleClick(event, canvas, cont, selectedEleIndex));
        };

        const handleCanvasMouseMove = (event) => {
            handleMouseMove(event, canvas, cont, setCont, mouseDown, selectedEleIndex, mouseX, mouseY);
        };

        const handleCanvasMouseDown = (event) => {
            const [x, y, type] = handleMouseDown(event,canvas,cont,selectedEleIndex,setSelectedEleIndex);
            setMouseX(x);
            setMouseY(y);
            setMouseDown({state:true,type:type});
        };

        const handleCanvasMouseUp = () => {
            setMouseDown({state:false,type:null});
        };

        const handleWindowResize = () => {
            handleResize(canvas);
        };

        canvas.addEventListener('click', handleCanvasClick);
        canvas.addEventListener('mousemove', handleCanvasMouseMove);
        canvas.addEventListener('mousedown', handleCanvasMouseDown);
        canvas.addEventListener('mouseup', handleCanvasMouseUp);
        window.addEventListener('resize', handleWindowResize);

        return () => {
            canvas.removeEventListener('click', handleCanvasClick);
            canvas.removeEventListener('mousemove', handleCanvasMouseMove);
            canvas.removeEventListener('mousedown', handleCanvasMouseDown);
            canvas.removeEventListener('mouseup', handleCanvasMouseUp);
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [cont, mouseDown, selectedEleIndex]);

    return (
        <div style={{ display: "flex", height: '100%', width: '100%' }}>
            <LeftSideBar>
                <button onClick={() =>{ draw(canvasRef.current, cont);drawMargins(canvasRef.current)}}>Add Shapes</button>
            </LeftSideBar>
            <canvas
             {...bind()}
                ref={canvasRef}
                width={(window.innerWidth - 600)}
                height={window.innerHeight}
                style={{ backgroundColor: '#f5f5f5', zIndex: '0' }}
            ></canvas>
            
            <RightSideBar />
        </div>
    );
};
