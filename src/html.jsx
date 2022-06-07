/* eslint-disable react/prop-types, jsx-a11y/html-has-lang */
import React, { useEffect } from 'react';

const fontsBasePath = '/fonts';

const fontsPaths = ['/poppins-semibold.woff2', '/poppins-extrabold.woff2'];
let currentSection = null;

const HTML = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}) => {
  return (<html {...htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      />
      {fontsPaths.map((fontPath, index) => (
        <link
          rel="preload"
          href={`${fontsBasePath}${fontPath}`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          key={index}
        />
      ))}
      {headComponents}
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
      {postBodyComponents}
    </body>
  </html>);
};

export default HTML;
