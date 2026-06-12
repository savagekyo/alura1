// Configuração do Canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Definir tamanho do canvas
canvas.width = 600;
canvas.height = 800;

// Cores da Monalisa (paleta de cores original)
const colors = {
    pele: '#D4A574',
    peluDark: '#A68360',
    peluLight: '#E8C4A0',
    olho: '#3D3D3D',
    branco: '#FFFFFF',
    marrom: '#6B4423',
    verde: '#4A7C59',
    ouro: '#D4AF37',
    sombra: '#8B7355',
    fundo: '#6B8E23'
};

// Variáveis para o movimento dos olhos
let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

// Event listeners para o mouse
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Função para desenhar um círculo preenchido
function drawFilledCircle(x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

// Função para desenhar um círculo com contorno
function drawStrokeCircle(x, y, radius, color, width = 2) {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
}

// Função para desenhar uma elipse
function drawEllipse(x, y, radiusX, radiusY, color, angle = 0) {
    ctx.fillStyle = color;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.ellipse(0, 0, radiusX, radiusY, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}

// Função para desenhar uma curva suave (bezier)
function drawCurve(points, color, width = 2) {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i][0], points[i][1]);
    }
    ctx.stroke();
}

// Função para calcular a posição da pupila baseada no mouse
function getPupilPosition(eyeCenterX, eyeCenterY, eyeRadius) {
    const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
    const distance = eyeRadius * 0.35; // Distância da pupila do centro do olho
    
    return {
        x: eyeCenterX + Math.cos(angle) * distance,
        y: eyeCenterY + Math.sin(angle) * distance
    };
}

// Função principal para desenhar a Monalisa
function drawMonalisa() {
    // Limpar canvas
    ctx.fillStyle = colors.fundo;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // ===== DESENHAR A MONALISA =====
    
    // 1. Fundo/Paisagem (bem ao fundo)
    ctx.fillStyle = '#5A7C4A';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Céu
    const skyGradient = ctx.createLinearGradient(0, 0, 0, 300);
    skyGradient.addColorStop(0, '#87CEEB');
    skyGradient.addColorStop(1, '#B0E0E6');
    ctx.fillStyle = skyGradient;
    ctx.fillRect(0, 0, canvas.width, 300);

    // 2. Pescoço
    drawEllipse(300, 420, 45, 65, colors.pele);
    
    // Sombra do pesco��o
    drawEllipse(290, 430, 35, 50, colors.peluDark, 0);

    // 3. Rosto (principal)
    // Forma do rosto
    ctx.fillStyle = colors.pele;
    ctx.beginPath();
    ctx.ellipse(300, 300, 90, 110, 0, 0, Math.PI * 2);
    ctx.fill();

    // Sombras do rosto
    ctx.fillStyle = colors.sombra + '40'; // Com transparência
    ctx.beginPath();
    ctx.ellipse(250, 320, 40, 60, -0.3, 0, Math.PI * 2);
    ctx.fill();

    // Destaque no rosto
    ctx.fillStyle = colors.peluLight + '60';
    ctx.beginPath();
    ctx.ellipse(330, 280, 35, 45, 0.2, 0, Math.PI * 2);
    ctx.fill();

    // 4. Olhos
    const leftEyeX = 260;
    const leftEyeY = 280;
    const rightEyeX = 340;
    const rightEyeY = 280;
    const eyeRadius = 18;

    // Olho esquerdo
    drawFilledCircle(leftEyeX, leftEyeY, eyeRadius, colors.branco);
    drawStrokeCircle(leftEyeX, leftEyeY, eyeRadius, colors.marrom, 2);
    
    // Íris esquerda
    drawFilledCircle(leftEyeX, leftEyeY, 12, colors.olho);
    
    // Pupila esquerda (segue o mouse)
    const leftPupil = getPupilPosition(leftEyeX, leftEyeY, 12);
    drawFilledCircle(leftPupil.x, leftPupil.y, 6, colors.branco);
    drawFilledCircle(leftPupil.x - 2, leftPupil.y - 2, 3, colors.branco);

    // Olho direito
    drawFilledCircle(rightEyeX, rightEyeY, eyeRadius, colors.branco);
    drawStrokeCircle(rightEyeX, rightEyeY, eyeRadius, colors.marrom, 2);
    
    // Íris direita
    drawFilledCircle(rightEyeX, rightEyeY, 12, colors.olho);
    
    // Pupila direita (segue o mouse)
    const rightPupil = getPupilPosition(rightEyeX, rightEyeY, 12);
    drawFilledCircle(rightPupil.x, rightPupil.y, 6, colors.branco);
    drawFilledCircle(rightPupil.x - 2, rightPupil.y - 2, 3, colors.branco);

    // Sombra das pálpebras
    ctx.fillStyle = colors.peluDark + '80';
    ctx.beginPath();
    ctx.ellipse(leftEyeX, leftEyeY - 18, 20, 8, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(rightEyeX, rightEyeY - 18, 20, 8, 0, 0, Math.PI * 2);
    ctx.fill();

    // 5. Sobrancelhas
    ctx.strokeStyle = colors.marrom;
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    
    // Sobrancelha esquerda
    ctx.beginPath();
    ctx.quadraticCurveTo(240, 245, 280, 250);
    ctx.stroke();

    // Sobrancelha direita
    ctx.beginPath();
    ctx.quadraticCurveTo(320, 250, 360, 245);
    ctx.stroke();

    // 6. Nariz
    ctx.strokeStyle = colors.peluDark;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(300, 340);
    ctx.stroke();

    // Narinas
    ctx.fillStyle = colors.peluDark;
    drawFilledCircle(295, 342, 2, colors.peluDark);
    drawFilledCircle(305, 342, 2, colors.peluDark);

    // 7. Boca (o famoso sorriso)
    ctx.strokeStyle = colors.marrom;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.quadraticCurveTo(300, 380, 330, 375);
    ctx.stroke();

    ctx.beginPath();
    ctx.quadraticCurveTo(300, 380, 270, 375);
    ctx.stroke();

    // Preenchimento da boca (lábios)
    ctx.fillStyle = '#C9845F';
    ctx.beginPath();
    ctx.quadraticCurveTo(300, 377, 330, 373);
    ctx.quadraticCurveTo(300, 382, 270, 373);
    ctx.fill();

    // 8. Cabelo
    // Parte superior
    ctx.fillStyle = colors.marrom;
    ctx.beginPath();
    ctx.ellipse(300, 220, 95, 70, 0, 0, Math.PI);
    ctx.fill();

    // Detalhes do cabelo
    ctx.fillStyle = colors.peluDark;
    ctx.beginPath();
    ctx.arc(240, 260, 30, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(360, 260, 30, 0, Math.PI * 2);
    ctx.fill();

    // Mechas
    ctx.strokeStyle = colors.peluDark;
    ctx.lineWidth = 3;
    for (let i = 0; i < 5; i++) {
        const startX = 200 + i * 25;
        const startY = 190;
        const endX = startX + Math.random() * 20 - 10;
        const endY = startY + 50 + Math.random() * 30;
        
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.quadraticCurveTo(startX + 5, startY + 30, endX, endY);
        ctx.stroke();
    }

    // 9. Ombros e corpo
    ctx.fillStyle = colors.pele;
    ctx.beginPath();
    ctx.ellipse(300, 450, 100, 50, 0, 0, Math.PI);
    ctx.fill();

    // Vestido/Roupas
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.ellipse(300, 500, 110, 80, 0, 0, Math.PI * 2);
    ctx.fill();

    // Detalhe do vestido
    ctx.fillStyle = '#A0522D';
    ctx.beginPath();
    ctx.ellipse(300, 520, 100, 60, 0, 0, Math.PI * 2);
    ctx.fill();

    // Efeito de tecido
    ctx.strokeStyle = '#654321';
    ctx.lineWidth = 2;
    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.quadraticCurveTo(200 + i * 100, 480, 250 + i * 50, 550);
        ctx.stroke();
    }
}

// Função de animação
function animate() {
    drawMonalisa();
    requestAnimationFrame(animate);
}

// Iniciar animação
animate();