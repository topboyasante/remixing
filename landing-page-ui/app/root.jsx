import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "./tailwind.css";

export const links = () => [{ rel: "stylesheet", href: stylesheet }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* Navbar */}
        <nav className="w-full h-full border-b border-[#1a252a]">
          <section className="max-w-screen-xl mx-auto p-5 xl:px-0 border-l border-r border-[#1a252a]">
            <section className="flex justify-between items-center px-3">
              {/* Left Side */}
              <section>
                <p className="font-semibold text-xl">
                  mails<span className="text-primary">.</span>
                </p>
              </section>
            </section>
          </section>
        </nav>
        {/* Content */}
        <section className="max-w-screen-xl mx-auto px-5 xl:px-0 ">
          <Outlet />
        </section>
        {/* Footer */}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
