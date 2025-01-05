import '../global.css';
import { Inter } from 'next/font/google';
import LocalFont from 'next/font/local';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Tyrowin.dev',
    template: '%s | tyrowin.dev',
  },
  description: 'Junior backend developer with a passion for problem solving.',
  openGraph: {
    title: 'tyrowin.dev',
    description: 'Junior backend developer with a passion for problem solving.',
    url: 'https://tyrowin.dev',
    siteName: 'tyrowin.dev',
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Tyrowin',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.png',
  },
  metadataBase: new URL('https://tyrowin.dev'),
};
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const calSans = LocalFont({
  src: '../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(' ')}>
      <head>{/* Analytics component removed */}</head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
