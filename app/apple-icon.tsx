import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
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
          borderRadius: '44px',
          fontSize: '110px',
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
