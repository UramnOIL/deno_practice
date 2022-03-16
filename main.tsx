import ReactDomServer from "react-dom/server";
import App from "/App.tsx";
import { serve } from "std/http/server.ts";
import React from "react";
serve((request: Request) => {
  return new Response(
    ReactDomServer.renderToString(
      <html>
        <head></head>
        <body>
          <div id="app">
            <App />
          </div>
        </body>
      </html>
    ), {
      headers: { "content-type": "text/html; charset=utf-8" },
    }
  );
}, { addr: "8080" });