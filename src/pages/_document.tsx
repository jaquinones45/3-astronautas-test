import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Tres Astronautas - Desarrollo de software a medida</title>
        <link href="https://cdn.prod.website-files.com/61e9632aad38f0587d2209b7/62604cf2e8162153a8240b0b_favicon-32x32.png" rel="shortcut icon" type="image/x-icon" />

        <meta content="Desarrollo de software a medida nearshore confiado por empresas Fortune 500, PYMEs y startups." name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta http-equiv="X-Content-Type-Options" content="nosniff" />
        <meta http-equiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains" />
        <meta http-equiv="X-XSS-Protection" content="0" />
        <meta http-equiv="X-Frame-Options" content="SAMEORIGIN" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
