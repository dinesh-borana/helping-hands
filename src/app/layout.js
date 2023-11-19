import React from 'react';

import './style.css';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

      </body>
    </html>
  );
}

export default RootLayout;