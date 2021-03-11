import React from 'react';
import PropTypes from 'prop-types';

const Html = ({ headComponents, postBodyComponents, body }) => (
  <html lang="nl">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="google-site-verification" content="HzbTXUTeUglu4oiG7aK_SIrQBzzYKo8M64C4fP7nw8g" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://www.facebook.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://connect.facebook.net" />
      <link rel="preload" href="/fonts.css" />
      {headComponents}
      <link href="/img/icon-72x72.png" rel="apple-touch-icon" />
      <link href="/img/favicon.ico" rel="icon" type="image/x-icon" />
    </head>
    <body>
      {/* eslint-disable-next-line react/no-danger */}
      <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
      {postBodyComponents}
    </body>
  </html>
);

export default Html;

Html.propTypes = {
  body: PropTypes.any.isRequired,
  headComponents: PropTypes.any.isRequired,
  postBodyComponents: PropTypes.any.isRequired,
};
