/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const io = (global as any).io;

  const body = await req.json();

  if (io) {
    // const progressSteps = Array.from({ length: 51 }, (_, i) => i * 2);
    const progressSteps = [0, 100];

    progressSteps.forEach((percent, index) => {
      setTimeout(() => {
        io.emit('generating_music', {
          id: body.data.id,
          progress: percent,
          message: `Progress: ${percent}%`,
        });
        console.log(`Emitted progress: ${percent}%`);
      }, index * 2000); // 1 second interval between steps
    });
  }

  return NextResponse.json({
    data: {
      id: body.data.id,
      query: body.data.query,
      progress: body.data.progress,
    },
  });
}
