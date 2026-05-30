import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Falak — Tools that move Egypt forward'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'radial-gradient(ellipse 90% 70% at 50% 0%, #1e1b4b 0%, #050A18 60%)',
          color: 'white',
          fontFamily: 'sans-serif',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: '150px',
            fontWeight: 900,
            letterSpacing: '-6px',
            backgroundImage: 'linear-gradient(160deg, #ffffff 30%, #a5b4fc 100%)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Falak
        </div>
        <div style={{ display: 'flex', fontSize: '38px', color: 'white', marginTop: '8px' }}>
          Tools that move Egypt forward
        </div>
        <div style={{ display: 'flex', gap: '16px', marginTop: '56px' }}>
          {['Waslny', 'CV Architect', '5alsana'].map((name) => (
            <div
              key={name}
              style={{
                display: 'flex',
                padding: '12px 28px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.18)',
                fontSize: '28px',
                color: '#c7d2fe',
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
