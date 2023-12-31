import React from 'react';
import '../styles/globals.css';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <html lang='en'>
        <head>
            <link rel='preconnect' href='https://stijndv.com' />
            <link rel='stylesheet' href='https://stijndv.com/fonts/Eudoxus-Sans.css' />
        </head>
        <body>{children}</body>
    </html>
);

export default RootLayout;
