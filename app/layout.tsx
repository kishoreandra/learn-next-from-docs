import '@/app/ui/global.css';
import { inter, roboto_condesed } from '@/app/ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto_condesed.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
