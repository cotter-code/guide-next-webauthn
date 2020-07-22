This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**Use Chrome on a laptop that supports TouchID or Windows Hello to see the WebAuthn login in action**.

List of supported browser:
https://fidoalliance.org/fido2/fido2-web-authentication-webauthn/

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

# WebAuthn

Login to websites using TouchID or Windows Hello.

### How it works

1. Login with your email. If you have never setup WebAuthn, you'll be prompted to enable TouchID or Windows Hello after your email is verified.
2. Refresh and go to an **incognito tab**. Try logging-in with the same email, and you'll be prompted to login using WebAuthn.

### Implementation

- [Documentation](https://docs.cotter.app/quickstart-guides/react-webauthn)
- [Full SDK Reference](https://docs.cotter.app/sdk-reference/web/sign-in-with-webauthn)

For React:

```bash
yarn add cotter
```

```javascript
import React, { useEffect, useState } from "react";
import Cotter from "cotter"; //  1️⃣  Import Cotter

function App() {
  const [payload, setpayload] = useState(null);

  //  2️⃣ Initialize and show the form
  useEffect(() => {
    var cotter = new Cotter(API_KEY_ID); // 👈 Specify your API KEY ID here
    cotter
      .signInWithWebAuthnOrLink()
      .showEmailForm()
      .then((response) => {
        setpayload(response); // show the response in our state
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/*  3️⃣  Put a <div> that will contain the form */}
      <div id="cotter-form-container" style={{ width: 300, height: 300 }} />

      <pre>{JSON.stringify(payload, null, 4)}</pre>
    </div>
  );
}

export default App;
```
