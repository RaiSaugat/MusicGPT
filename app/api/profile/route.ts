/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

export const GET = () => {
  const io = (global as any).io;

  if (io) {
    const progressSteps = [0, 25, 50, 75, 90, 100];

    progressSteps.forEach((percent, index) => {
      setTimeout(() => {
        io.emit('generating_state', {
          progress: percent,
          message: `Progress: ${percent}%`,
        });
        console.log(`Emitted progress: ${percent}%`);
      }, index * 1000); // 1 second interval between steps
    });
  }

  return NextResponse.json({ data: { message: 'Progress started' } });
};
