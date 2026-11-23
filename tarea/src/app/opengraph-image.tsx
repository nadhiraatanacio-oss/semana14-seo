import { ImageResponse } from 'next/og';
import { personalInfo } from '@/lib/data';

export const alt = `${personalInfo.name} - ${personalInfo.title}`;
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
          justifyContent: 'space-between',
          background: '#1c1c1c',
          padding: 80,
          
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, color: '#2fd3a0', letterSpacing: 2 }}>
          PORTAFOLIO · {personalInfo.location.toUpperCase()}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 84, color: '#ffffff' }}>{personalInfo.name}</div>
          <div style={{ fontSize: 40, color: '#f5b942', marginTop: 12 }}>
            {personalInfo.title}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
