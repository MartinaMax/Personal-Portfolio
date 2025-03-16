'use client'

export default function RootLayout({ children }) {

    return (
        <html lang="sk">
            <head>
                {/* Favicon link */}
                <link rel="icon" href="" type="image/x-icon" />
                <title>Portfolio</title>
                {/* Meta description */}
                <meta name="description" content="" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}