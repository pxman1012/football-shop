import { MantineProvider } from '@mantine/core';
import './globals.css';
import { ReactQueryProvider } from '@/providers/ReactQueryProvider';

export default function RootLayout({ children }) {
    return (
        <html lang="vi">
            <body>
                <MantineProvider withGlobalStyles withNormalizeCSS>
                    <ReactQueryProvider>{children}</ReactQueryProvider>
                </MantineProvider>
            </body>
        </html>
    );
}
