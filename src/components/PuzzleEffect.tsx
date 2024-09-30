import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface PuzzleEffectProps {
  imageSrc: string;
  canvasWidth: number;
  canvasHeight: number;
}

interface Piece {
  sx: number;         // Source x coordinate
  sy: number;         // Source y coordinate
  dx: number;         // Destination x coordinate
  dy: number;         // Destination y coordinate
  offsetX: number;    // X axis offset (scatter)
  offsetY: number;    // Y axis offset (scatter)
  scatterX: number;   // Scatter on X axis
  scatterY: number;   // Scatter on Y axis
  borderRadius: number; // Piece corner rounding
}

const Canvas = styled.canvas<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  display: block;
  transition: transform 2s ease-in-out;
`;

const PuzzleEffect: React.FC<PuzzleEffectProps> = ({ imageSrc, canvasWidth, canvasHeight }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [pieces, setPieces] = useState<Piece[]>([]);  // Array type with <Piece[]>

  const cols = 5; 
  const rows = 6; 

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const img = new Image();
    img.src = imageSrc;

    img.onload = () => {
      const scale = Math.min(canvasWidth / img.width, canvasHeight / img.height);
      const scaledWidth = img.width * scale;
      const scaledHeight = img.height * scale;

      if (canvas) {
        canvas.width = scaledWidth;
        canvas.height = scaledHeight;
      }

      const pieceWidth = scaledWidth / cols;
      const pieceHeight = scaledHeight / rows;
      const tempPieces: Piece[] = [];  // Creating an array of Piece type

      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          const piece: Piece = { // Defining the piece type
            sx: x * pieceWidth / scale,
            sy: y * pieceHeight / scale,
            dx: x * pieceWidth,
            dy: y * pieceHeight,
            offsetX: 0,
            offsetY: 0,
            scatterX: (x - cols / 2) * pieceWidth * 0.1,
            scatterY: (y - rows / 2) * pieceHeight * 0.1,
            borderRadius: 0,
          };
          tempPieces.push(piece);
        }
      }
      setPieces(tempPieces);
      if (ctx) {
        drawImage(ctx, img, tempPieces, pieceWidth, pieceHeight, scale);
      }
    };
  }, [imageSrc, canvasWidth, canvasHeight]);

  const drawImage = (
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    pieces: Piece[],  // Using Piece array type here
    pieceWidth: number,
    pieceHeight: number,
    scale: number
  ) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    pieces.forEach(piece => {
      ctx.save();
      ctx.translate(piece.dx + piece.offsetX, piece.dy + piece.offsetY);
      ctx.beginPath();
      ctx.moveTo(piece.borderRadius, 0);
      ctx.lineTo(pieceWidth - piece.borderRadius, 0);
      ctx.quadraticCurveTo(pieceWidth, 0, pieceWidth, piece.borderRadius);
      ctx.lineTo(pieceWidth, pieceHeight - piece.borderRadius);
      ctx.quadraticCurveTo(pieceWidth, pieceHeight, pieceWidth - piece.borderRadius, pieceHeight);
      ctx.lineTo(piece.borderRadius, pieceHeight);
      ctx.quadraticCurveTo(0, pieceHeight, 0, pieceHeight - piece.borderRadius);
      ctx.lineTo(0, piece.borderRadius);
      ctx.quadraticCurveTo(0, 0, piece.borderRadius, 0);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(
        img,
        piece.sx,
        piece.sy,
        pieceWidth / scale,
        pieceHeight / scale,
        0,
        0,
        pieceWidth,
        pieceHeight
      );
      ctx.restore();
    });
  };

  const animatePieces = (newPieces: Piece[], duration: number) => {  // Using Piece type here as well
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      const interpolatedPieces = newPieces.map((piece, index) => {
        const prevPiece = pieces[index];
        const offsetX = prevPiece.offsetX + (piece.offsetX - prevPiece.offsetX) * progress;
        const offsetY = prevPiece.offsetY + (piece.offsetY - prevPiece.offsetY) * progress;
        const borderRadius = piece.borderRadius * progress;
        return { ...piece, offsetX, offsetY, borderRadius };
      });

      setPieces(interpolatedPieces);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const scatterPieces = () => {
    const scatteredPieces = pieces.map(piece => ({
      ...piece,
      offsetX: piece.scatterX,
      offsetY: piece.scatterY,
      borderRadius: 10,
    }));
    animatePieces(scatteredPieces, 1000);
  };

  const resetPieces = () => {
    const resetedPieces = pieces.map(piece => ({
      ...piece,
      offsetX: 0,
      offsetY: 0,
      borderRadius: 0,
    }));
    animatePieces(resetedPieces, 1000);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const img = new Image();
    img.src = imageSrc;

    img.onload = () => {
      const scale = Math.min(canvasWidth / img.width, canvasHeight / img.height);
      const scaledWidth = img.width * scale;
      const scaledHeight = img.height * scale;
      const pieceWidth = scaledWidth / cols;
      const pieceHeight = scaledHeight / rows;
      if (ctx) {
        drawImage(ctx, img, pieces, pieceWidth, pieceHeight, scale);
      }
    };
  }, [pieces, imageSrc, canvasWidth, canvasHeight]);

  return (
    <Canvas
      ref={canvasRef}
      width={canvasWidth}
      height={canvasHeight}
      onMouseEnter={scatterPieces}
      onMouseLeave={resetPieces}
      onTouchStart={scatterPieces}
      onTouchEnd={resetPieces}
    />
  );
};

export default PuzzleEffect;