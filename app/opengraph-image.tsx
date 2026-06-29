import { ImageResponse } from 'next/og';
import { yearOfExperience } from '@/data/content';

export const alt = 'Hassan Mohamed — Senior Full Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#1a1714',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <div
            style={{
              fontSize: '32px',
              color: '#d9a441',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            {`${yearOfExperience}+ YEARS`}
          </div>
        </div>
        <div
          style={{
            fontSize: '80px',
            fontWeight: 800,
            color: '#f5f0e8',
            lineHeight: 1.05,
            marginBottom: '24px',
          }}
        >
          Hassan Mohamed
        </div>
        <div
          style={{
            fontSize: '42px',
            color: '#a89b8a',
            fontWeight: 500,
          }}
        >
          Senior Full Stack Developer
        </div>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            marginTop: '40px',
            fontSize: '28px',
            color: '#d9a441',
          }}
        >
          <span>Node.js</span>
          <span style={{ color: '#5a5048' }}>·</span>
          <span>React</span>
          <span style={{ color: '#5a5048' }}>·</span>
          <span>Next.js</span>
          <span style={{ color: '#5a5048' }}>·</span>
          <span>Go</span>
        </div>
      </div>
    ),
    size,
  );
}
