import Head from "next/head";
import React, { useEffect, useState } from "react";
import Cotter from "cotter"; //  1️⃣  Import Cotter

const API_KEY_ID = "75a25558-c318-4fc1-81ad-5cc8b69051e8";
export default function Home() {
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
    <div className="container">
      <Head>
        <title>WebAuthn Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          WebAuthn Login with <a href="https://cotter.app">Cotter!</a>
        </h1>

        <p className="description">
          Login with TouchID or Windows Hello on your browser.
        </p>

        <div
          style={{
            width: "60vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/*  3️⃣  Put a <div> that will contain the form */}
          <div id="cotter-form-container" style={{ width: 300, height: 300 }} />
          <ol style={{ width: 500, lineHeight: 1.8 }}>
            <li>
              Make sure you're using <b>Chrome</b> on a laptop that supports
              TouchID/Windows Hello.
            </li>
            <li>
              Login with your email. If this is your first time logging-in,
              you'll be prompted to enable TouchID or Windows Hello after your
              email is verified.
            </li>
            <li>
              Go to an <b>incognito tab</b> and open this URL again. You need to{" "}
              <b>allow third-party cookies</b> (eye icon on URL bar). Try
              logging-in with the same email, and you'll be prompted to login
              using WebAuthn.
            </li>
          </ol>
          <pre style={{ width: "60vw" }}>
            <code style={{ width: "60vw", lineHeight: 2, fontSize: 14 }}>
              Response: {JSON.stringify(payload, null, 4)}
            </code>
          </pre>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
