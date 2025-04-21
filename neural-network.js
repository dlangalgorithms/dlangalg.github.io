const canvas = document.getElementById('neural-network');
const ctx = canvas.getContext('2d');


function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);


class Neuron {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.connections = [];
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(229, 9, 20, 0.1)';
        ctx.fill();
    }
}


class Connection {
    constructor(neuron1, neuron2) {
        this.neuron1 = neuron1;
        this.neuron2 = neuron2;
        this.speed = Math.random() * 0.5 + 0.5;
        this.offset = Math.random() * Math.PI * 2;
    }

    draw() {
        const time = Date.now() * 0.001;
        const alpha = Math.sin(time * this.speed + this.offset) * 0.1 + 0.1;
        
        ctx.beginPath();
        ctx.moveTo(this.neuron1.x, this.neuron1.y);
        ctx.lineTo(this.neuron2.x, this.neuron2.y);
        ctx.strokeStyle = `rgba(229, 9, 20, ${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
    }
}

const neurons = [];
const connections = [];
const numNeurons = 50;

for (let i = 0; i < numNeurons; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    neurons.push(new Neuron(x, y));
}


for (let i = 0; i < neurons.length; i++) {
    for (let j = i + 1; j < neurons.length; j++) {
        if (Math.random() < 0.1) {
            connections.push(new Connection(neurons[i], neurons[j]));
        }
    }
}


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    

    neurons.forEach(neuron => {
        neuron.x += (Math.random() - 0.5) * 0.5;
        neuron.y += (Math.random() - 0.5) * 0.5;
        

        neuron.x = Math.max(0, Math.min(canvas.width, neuron.x));
        neuron.y = Math.max(0, Math.min(canvas.height, neuron.y));
    });


    connections.forEach(connection => connection.draw());
    

    neurons.forEach(neuron => neuron.draw());
    
    requestAnimationFrame(animate);
}

animate(); 