const selectBorderColor = "#139bfe";
const selectBorderWidth = 1;

export const drawMargins = ( canvas)=>{
    const ctx = canvas.getContext('2d');
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const gridSize = 10; // Size of each grid cell

// Clear the canvas
ctx.clearRect(0, 0, canvasWidth, canvasHeight);

// Set line properties
ctx.strokeStyle = 'black';
ctx.lineWidth = 1;

// Draw vertical lines
for (let x = 0; x <= canvasWidth; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvasHeight);
    ctx.stroke();
}

// Draw horizontal lines
for (let y = 0; y <= canvasHeight; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvasWidth, y);
    ctx.stroke();
}
}

export const draw = (canvas, elements, selectedEleIndex = [-1], hoverIndex = -1) => {
    
    if (!canvas || !canvas.getContext) return; // Ensure canvas exists and has getContext method
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //drawMargins(canvas);

    elements.forEach((element, index) => {
        
        if (element.type === 'shape') {
            drawShape(ctx, element, selectedEleIndex.includes(index));
        } else if (element.type === 'img') {
            drawImage(ctx, element, selectedEleIndex.includes(index));
        } else if (element.type === 'text') {
            drawText(ctx, element, selectedEleIndex.includes(index));
        }
        ctx.save()

        if (index === hoverIndex && !selectedEleIndex.includes(index)) {
            // Outline hovered shape with gray if it's not selected
            const { x, y, w, h } = element;
            ctx.translate(x + w / 2, y + h / 2);
            ctx.rotate(element.css.rotate * Math.PI / 180);
            ctx.strokeStyle = selectBorderColor;
            ctx.lineWidth = 1;
            const adjustedX = -w / 2;
            const adjustedY = -h / 2;
            ctx.strokeRect(adjustedX, adjustedY, element.w, element.h);
            ctx.restore()

        } 
        ctx.restore()
    });
};

const drawResizingHandles = (ctx, element, selectBorderColor) => {
    const { x, y, w, h } = element;
    const rotate = element.css.rotate || 0;
    const [p1, p2, p3, p4, p5] = calcNewCoordinates(element, rotate, ctx);

    ctx.save();
    ctx.translate(x + w / 2, y + h / 2);
    ctx.rotate(rotate * Math.PI / 180);
    ctx.strokeStyle = selectBorderColor;
    ctx.lineWidth = selectBorderWidth;
    // Calculate adjusted coordinates for the stroke rectangle
    const adjustedX = -w / 2;
    const adjustedY = -h / 2;
    // Draw the stroke rectangle with adjusted coordinates
    ctx.strokeRect(adjustedX, adjustedY, w, h);
    ctx.restore();

    ctx.save();

    const dotSize = 5;
    const dotFillColor = 'white'; // Fill color for the dots

    ctx.fillStyle = dotFillColor;
    ctx.strokeStyle = selectBorderColor;
    ctx.lineWidth = selectBorderWidth;

    // Function to draw a dot and apply rotation
    const drawDot = (dot) => {
        ctx.save(); // Save the current transformation matrix
        ctx.translate(dot.x, dot.y); // Translate to the dot's position
        ctx.rotate(rotate * Math.PI / 180); // Rotate around the dot's center
        ctx.fillRect(-dotSize / 2, -dotSize / 2, dotSize, dotSize); // Draw the dot
        ctx.strokeRect(-dotSize / 2, -dotSize / 2, dotSize, dotSize); // Draw the dot outline
        ctx.restore(); // Restore the saved transformation matrix
    };

    // Draw each dot
    drawDot(p1);
    drawDot(p2);
    drawDot(p3);
    drawDot(p4);

    ctx.restore();
};

const drawShape2 = (ctx, element, selected) => {
    const { x, y, h, w, css } = element;
    const borderRadius = css?.borderRadius || 0;
    const backgroundColor = css?.backgroundColor || 'transparent';
    const rotate = css?.rotate || 0;
    const padding = css?.padding || 0;
    const strokeSize = css?.strokeSize || 0;
    const strokeColor = strokeSize && css?.strokeColor ? css.strokeColor : 'transparent';
    const boxShadow = css?.boxShadow || 'none';

    const adjustedWidth = w - 2 * strokeSize;
    const adjustedHeight = h - 2 * strokeSize;

    // Apply shadow
    if (boxShadow !== 'none') {
        const [offsetX, offsetY, blur, spread, color] = boxShadow.split(' ');
        ctx.shadowOffsetX = parseInt(offsetX) || 0;
        ctx.shadowOffsetY = parseInt(offsetY) || 0;
        ctx.shadowBlur = parseInt(blur) || 0;
        ctx.shadowColor = color || 'black';
    }

    // Apply rotation and translation
    ctx.save();
    ctx.translate(x + w / 2, y + h / 2);
    ctx.rotate(rotate * Math.PI / 180);

    ctx.fillStyle = backgroundColor;

    // Draw border
    if (strokeSize > 0) {
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = strokeSize;
        ctx.strokeRect(-adjustedWidth / 2, -adjustedHeight / 2, adjustedWidth, adjustedHeight);
    }

    // Draw background
    ctx.fillRect(-adjustedWidth / 2 + strokeSize, -adjustedHeight / 2 + strokeSize, adjustedWidth - 2 * strokeSize, adjustedHeight - 2 * strokeSize);

    ctx.restore();

    // Draw selected border
    if (selected) {
        drawResizingHandles(ctx, element, selectBorderColor);
    }
};

const drawShape = (ctx, element, selected) => {
    let {x,y,w,h,css} = element;
    const borderRadius = css?.borderRadius || 0;
    const backgroundColor = css?.backgroundColor || 'transparent';
    const rotate = css?.rotate || 0;
    const strokeSize = css?.strokeSize || 0;
    const strokeColor = strokeSize && css?.strokeColor ? css.strokeColor : 'transparent';
    const boxShadow = css?.boxShadow || 'none';
    
    if(element.css.strokeFact === 'i'){
        x = x+strokeSize/2;
        y = y+strokeSize/2;
        w-= strokeSize;
        h-= strokeSize;
    }else if(element.css.strokeFact === 'o'){
        x = (x-strokeSize/2);
        y = (y-strokeSize/2);
        w+= strokeSize;
        h+= strokeSize;
    }
    ctx.save();
    ctx.fillStyle = backgroundColor;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeSize;

    
    ctx.translate(x+w/2,y+h/2);
    ctx.rotate(rotate*Math.PI/180);
    ctx.beginPath();
    ctx.roundRect(-w/2, -h/2, w, h, [borderRadius,borderRadius,borderRadius,borderRadius]);

    ctx.fill();
    ctx.stroke();

    ctx.restore();

    if (selected) {
        drawResizingHandles(ctx, element, selectBorderColor);
    } 
};

const drawImage = (ctx, element, selected) => {
    let { x, y, h, w, src } = element;
    const padding = element.css.padding || 0;
    const borderRadius = element.css.borderRadius || 0;
    const rotate = element.css.rotate || 0;
    const strokeSize = element.css?.strokeSize || 0;
    const strokeFact = element.css?.strokeFact || 'i';
    const strokeColor = strokeSize && element.css?.strokeColor ? element.css.strokeColor : 'transparent';
    const backgroundColor = element.css.backgroundColor || 'transparent';

    if(strokeFact === 'i'){
        x = x+strokeSize/2;
        y = y+strokeSize/2;
        w-= strokeSize;
        h-= strokeSize;
    }else if(strokeFact === 'o'){
        x = (x-strokeSize/2);
        y = (y-strokeSize/2);
        w+= strokeSize;
        h+= strokeSize;
    }

    ctx.save();

    ctx.fillStyle = backgroundColor;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeSize;

    if (element.image) {
        ctx.translate(x + w / 2, y + h / 2);
        ctx.rotate(rotate * Math.PI / 180);
        
        ctx.beginPath();
        ctx.roundRect(-w/2, -h/2, w, h, [borderRadius,borderRadius,borderRadius,borderRadius]);
        ctx.fill();
        ctx.drawImage(element.image, -w / 2 , -h / 2 , w , h);
        ctx.stroke();
    } else {
        const image = new Image();
        image.onload = () => {
            element.image = image;
            drawImage(ctx, element, selected);
        };
        image.src = src;
    }
    ctx.restore();
    if (selected) {
        drawResizingHandles(ctx, element, selectBorderColor);
    }

    ctx.restore();
};

const drawText = (ctx, element, selected) => {
    const { x, y, h, w, text, css } = element;

    // Apply CSS properties
    let {
        borderRadius = 0,
        backgroundColor = "transparent",
        rotate = 0,
        padding = 0,
        fontFamily = "Arial",
        strokeSize = 0,
        strokeColor = "transparent",
        boxShadow = "none",
        fontColor = "white",
    } = css;
    strokeColor= strokeSize<1?"transparent":strokeColor;
    // Save the current context state
    ctx.save();

    // Apply rotation if provided
    ctx.translate(x + w / 2, y + h / 2);
    ctx.rotate(rotate * Math.PI / 180);

    // Draw box with provided CSS properties
    ctx.fillStyle = backgroundColor;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeSize;
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.rect(-w / 2 - padding, -h / 2 - padding, w + padding * 2, h + padding * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw text inside the box
    ctx.fillStyle = fontColor;
    ctx.font = `${element?.fontSize || 16}px ${fontFamily}`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillText(text, 0, 0);

    ctx.restore();
    // Draw selection border and handles if selected
    if (selected) {
        drawResizingHandles(ctx, element, selectBorderColor);
    }

    ctx.restore();

    // Restore the context state
    ctx.restore();
};
//events

export const handleResize = (canvas) => {
    canvas.width = window.innerWidth - 600;
    canvas.height = window.innerHeight;
};

export const handleClick = (event, canvas, elements, selectedEleIndex) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    let foundSelectedShape = false; // Flag to check if a shape is selected

    // Check if any shape is clicked
    elements.forEach((element, index) => {
        const { x, y, w, h } = element;
        if (mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h) {
            // Shape clicked, update selectedShapeIndex
            selectedEleIndex = [index];
            foundSelectedShape = true; // Set the flag to true
        }
    });

    // If no shape is clicked, deselect all elements
    if (!foundSelectedShape) {
        selectedEleIndex = [-1];
    }

    // Redraw elements after click
    draw(canvas, elements, selectedEleIndex);

    return selectedEleIndex;
};

export const handleMouseDown = (event, canvas, cont, selectedEleIndex, setSelectedEleIndex) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    let offsetX = 0;
    let offsetY = 0;

    if (selectedEleIndex.length > 0 && selectedEleIndex[0] !== -1) {
        const selectedElement = cont[selectedEleIndex[0]];
        offsetX = mouseX - selectedElement.x;
        offsetY = mouseY - selectedElement.y;
        const { x, y, w, h } = selectedElement;
        const { rotate, padding, strokeSize } = selectedElement;
        const t = 5; // Threshold for borders
        const c = 5; // Threshold for corners

        // Check if the click is within the threshold of the element's border or corners
        if (mouseX > selectedElement.x + t &&
            mouseY > selectedElement.y + t &&
            mouseX < selectedElement.x + selectedElement.w - t &&
            mouseY < selectedElement.y + selectedElement.h - t) {
            // If near the border, return 'element'
            return [offsetX, offsetY, 'element'];
        } else if ((mouseX <= selectedElement.x + c && mouseY <= selectedElement.y + c) ||
                   (mouseX >= selectedElement.x + selectedElement.w - c && mouseY <= selectedElement.y + c) ||
                   (mouseX <= selectedElement.x + c && mouseY >= selectedElement.y + selectedElement.h - c) ||
                   (mouseX >= selectedElement.x + selectedElement.w - c && mouseY >= selectedElement.y + selectedElement.h - c)) {
            // If near any corner, return 'corner'
            return [offsetX, offsetY, 'corner'];
        } else {
            // Otherwise, return 'border'
            return [offsetX, offsetY, 'border'];
        }
    }

    // If no element is selected, return offsetX and offsetY without specifying clickedOn
    return [offsetX, offsetY, null];
};

function pointOnThickLineSegment(x, y, x1, y1, x2, y2, thickness) {
    // Calculate the length of the line segment
    const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    // Calculate the direction vector of the line segment
    const dx = (x2 - x1) / length;
    const dy = (y2 - y1) / length;

    // Calculate the normal vector to the line segment
    const nx = -dy;
    const ny = dx;

    // Calculate the distance from the point to the line defined by the line segment
    const distance = Math.abs((x - x1) * nx + (y - y1) * ny);

    // Check if the point is within the bounding box of the thick line segment
    if ((x >= Math.min(x1, x2) - thickness && x <= Math.max(x1, x2) + thickness) &&
        (y >= Math.min(y1, y2) - thickness && y <= Math.max(y1, y2) + thickness)) {
        // Check if the distance from the point to the line is within the thickness/2
        if (distance <= thickness) {
            return true; // Point lies on the thick line segment
        }
    }
    return false; // Point does not lie on the thick line segment
}

export const handleMouseMove = (event, canvas, cont, setCont, mouseDown, selectedEleIndex, offsetX, offsetY) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    let updatedElements = cont;
    let newHoverIndex = -1;

    if(selectedEleIndex.length > 0 && selectedEleIndex[0] !== -1) {
        const [p1,p2,p3,p4] = calcNewCoordinates(cont[selectedEleIndex],cont[selectedEleIndex].css.rotate);

        const a = pointOnThickLineSegment(mouseX,mouseY,p1.x,p1.y,p2.x,p2.y,5);
        const d= pointOnThickLineSegment(mouseX,mouseY,p3.x,p3.y,p4.x,p4.y,5);
        const c = pointOnThickLineSegment(mouseX,mouseY,p1.x,p1.y,p4.x,p4.y,5);
        const b = pointOnThickLineSegment(mouseX,mouseY,p2.x,p2.y,p3.x,p3.y,5);
        
        if(a || d || b || c){
            canvas.style.cursor = 'crosshair';
        }else{
            canvas.style.cursor = 'default';
        }
    } 

    if (!mouseDown.state) {
        cont.forEach((element, index) => {
            const { x, y, w, h } = element;
            if (mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h) {
                // Set the hover index if mouse is over this element
                newHoverIndex = index;
            }
        });
    }
    
    if (mouseDown.state && mouseDown.type === 'element') {
    
        if (selectedEleIndex.length>0 && selectedEleIndex[0] !== -1) {
            // Calculate the distance from the mouse to the borders of the selected element
            const selectedElement = cont[selectedEleIndex[0]];
            const { x, y, w, h } = selectedElement;
           
                // Normal movement mode: move the selected element
                updatedElements = cont.map((element, index) => {
                    if (selectedEleIndex.includes(index)) {
                        return {
                            ...element,
                            x: mouseX - offsetX,
                            y: mouseY - offsetY
                        };
                    }
                    return element;
                });
            // Update state with new element positions
            setCont(updatedElements);
        }
    }

    if (mouseDown.state && mouseDown.type === 'border') {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
    
        if (selectedEleIndex.length > 0 && selectedEleIndex[0] !== -1) {
            const selectedElement = cont[selectedEleIndex[0]];
            const { x, y, w, h } = selectedElement;
    
            // Calculate distances from the mouse to each border
            const distLeft = Math.abs(mouseX - x);
            const distRight = Math.abs(x + w - mouseX);
            const distTop = Math.abs(mouseY - y);
            const distBottom = Math.abs(y + h - mouseY);
    
            // Determine which border is being dragged
            let borderDragged = '';
    
            // Determine the side by taking the minimum of the distances
            const minDist = Math.min(distLeft, distRight, distTop, distBottom);
            
            if (minDist === distLeft) {
                borderDragged = 'left';
            } else if (minDist === distRight) {
                borderDragged = 'right';
            } else if (minDist === distTop) {
                borderDragged = 'top';
            } else if (minDist === distBottom) {
                borderDragged = 'bottom';
            }
    
            // Adjust width or height based on the mouse movement
            let newWidth = w;
            let newHeight = h;
            let newX = x;
            let newY = y;
    
            switch (borderDragged) {
                case 'left':
                    newX = mouseX;
                    newWidth = Math.max(5, w + (x - mouseX));
                    break;
                case 'right':
                    newWidth = Math.max(5, w + (mouseX - (x + w)));
                    break;
                case 'top':
                    newY = mouseY;
                    newHeight = Math.max(5, h + (y - mouseY));
                    break;
                case 'bottom':
                    newHeight = Math.max(5, h + (mouseY - (y + h)));
                    break;
                default:
                    break;
            }
    
            // Update the selected element's dimensions
            const updatedElements = cont.map((element, index) => {
                if (index === selectedEleIndex[0]) {
                    return {
                        ...element,
                        x: newX,
                        y: newY,
                        w: newWidth,
                        h: newHeight
                    };
                }
                return element;
            });
    
            // Update state with new element dimensions
            setCont(updatedElements);
        }
    }
    
    if (mouseDown.state && mouseDown.type === 'corner') {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
    
        if (selectedEleIndex.length > 0 && selectedEleIndex[0] !== -1) {
            const selectedElement = cont[selectedEleIndex[0]];
            const { x, y, w, h } = selectedElement;
    
            // Determine which corner is being dragged
            let cornerDragged = '';
    
            const boxWidth = w / 2;
            const boxHeight = h / 2;
                            
                if (mouseX <= x + boxWidth && mouseY <= y + boxHeight) {
                    cornerDragged = 'topleft';
                } else if (mouseX >= x + boxWidth && mouseY <= y + boxHeight) {
                    cornerDragged = 'topright';
                } else if (mouseX <= x + boxWidth && mouseY >= y + boxHeight) {
                    cornerDragged = 'bottomleft';
                } else if (mouseX >= x + boxWidth && mouseY >= y + boxHeight) {
                    cornerDragged = 'bottomright';
                }
            // Adjust width, height, x, and y based on the corner being dragged
            let newWidth = w;
            let newHeight = h;
            let newX = x;
            let newY = y;
    
            // Handle the corner drag based on the cornerDragged value
            switch (cornerDragged) {
                case 'topleft':
                    newWidth = Math.max(5, w + (x - mouseX));
                    newHeight = Math.max(5, h + (y - mouseY));
                    newX = mouseX;
                    newY = mouseY;
                    break;
                case 'topright':
                    newWidth = Math.max(5, w + (mouseX - (x + w)));
                    newHeight = Math.max(5, h + (y - mouseY));
                    newY = mouseY;
                    break;
                case 'bottomleft':
                    newWidth = Math.max(5, w + (x - mouseX));
                    newHeight = Math.max(5, h + (mouseY - (y + h)));
                    newX = mouseX;
                    break;
                case 'bottomright':
                    newWidth = Math.max(5, w + (mouseX - (x + w)));
                    newHeight = Math.max(5, h + (mouseY - (y + h)));
                    break;
                default:
                    break;
            }
    
            // Update the selected element's dimensions and position
            const updatedElements = cont.map((element, index) => {
                if (index === selectedEleIndex[0]) {
                    return {
                        ...element,
                        x: newX,
                        y: newY,
                        w: newWidth,
                        h: newHeight
                    };
                }
                return element;
            });
    
            // Update state with new element dimensions and position
            setCont(updatedElements);
        }
    } 

    draw(canvas, updatedElements, selectedEleIndex, newHoverIndex);
};

const calcNewCoordinates = (element, ang = 0) => {
    let { x, y, h, w } = element;
    ang = element.css.rotate || 0;
    // Calculate center of the rectangle

    const cx = x + w / 2;
    const cy = y + h / 2;

    // Convert angle from degrees to radians
    const rad = ang * Math.PI / 180;

    // Calculate sine and cosine of the angle
    const sin = Math.sin(rad);
    const cos = Math.cos(rad);

    // Calculate the half-width and half-height
    const hw = w / 2;
    const hh = h / 2;

    // Calculate the coordinates of the corners after rotation
    const x1 = cx + hw * cos - hh * sin;
    const y1 = cy + hw * sin + hh * cos;

    const x2 = cx - hw * cos - hh * sin;
    const y2 = cy - hw * sin + hh * cos;

    const x3 = cx - hw * cos + hh * sin;
    const y3 = cy - hw * sin - hh * cos;

    const x4 = cx + hw * cos + hh * sin;
    const y4 = cy + hw * sin - hh * cos;

    const X1 = Math.min(x1, x2, x3, x4);
    const Y1 = Math.min(y1, y2, y3, y4);

    const X2 = Math.max(x1, x2, x3, x4);
    const Y2 = Math.max(y1, y2, y3, y4);

    const W = X2 - X1;
    const H = Y2 - Y1;

    // Return the new coordinates
    return [
        { x: x1, y: y1 },
        { x: x2, y: y2 },
        { x: x3, y: y3 },
        { x: x4, y: y4 },
        { x: X1, y: Y1, w: W, h: H },
    ];
};

/*old code for hover cursor resize

if(selectedEleIndex.length > 0 && selectedEleIndex[0] !== -1) {
        const { x, y, w, h } = cont[selectedEleIndex];
    
        const distLeft = Math.abs(mouseX - x);
        const distRight = Math.abs(x + w - mouseX);
        const distTop = Math.abs(mouseY - y);
        const distBottom = Math.abs(y + h - mouseY);
    
        const cornerThreshold = 5; // Adjust this threshold as needed
    
        // Check if the cursor is near any corner of the current element
        if (distLeft <= cornerThreshold && distTop <= cornerThreshold) {
            // Change cursor style for top-left corner
            canvas.style.cursor = 'nwse-resize';
        } else if (distRight <= cornerThreshold && distTop <= cornerThreshold) {
            // Change cursor style for top-right corner
            canvas.style.cursor = 'nesw-resize';
        } else if (distLeft <= cornerThreshold && distBottom <= cornerThreshold) {
            // Change cursor style for bottom-left corner
            canvas.style.cursor = 'nesw-resize';
        } else if (distRight <= cornerThreshold && distBottom <= cornerThreshold) {
            // Change cursor style for bottom-right corner
            canvas.style.cursor = 'nwse-resize';
        } else if ((distLeft <= 5 || distRight <= 5) && (mouseY > y && mouseY < y + h)) {
            // Change cursor style for horizontal resizing
            canvas.style.cursor = 'ew-resize';
        } else if ((distTop <= 5 || distBottom <= 5) && (mouseX > x && mouseX < x + w)) {
            // Change cursor style for vertical resizing
            canvas.style.cursor = 'ns-resize';
        } else {
            canvas.style.cursor = 'default';
        }
        
    } 
*/