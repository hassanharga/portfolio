import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#d9a441',
          borderRadius: '8px',
          fontSize: '20px',
          fontWeight: 800,
          color: '#1a1714',
        }}
      >
        HM
      </div>
    ),
    size,
  );
}
