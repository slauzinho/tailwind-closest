import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import useColour from '../hooks/useColour';

export default function Home() {
  const [userInput, setUserInput] = useState<string>();
  const tailwind = useColour(userInput);

  const colorInput = useRef<HTMLInputElement>()

  useEffect(() => {
    colorInput.current?.focus();
  }, [])

  return (
    <div>
      <Head>
        <title>Tailwind Closes Color</title>
        <meta name="description" content="App that provided with a color will find the closest equivalent in tailwind" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="relative flex flex-col items-center min-h-screen">
        <div className="z-10 flex items-baseline justify-center w-full h-screen mt-10 lg:mt-0 lg:items-center">
          <input
          ref={colorInput}
            autoFocus
            type="text"
            placeholder="Enter your hexadecimal colour..."
            className="px-10 py-6 text-base leading-6 text-gray-500 placeholder-gray-500 border-2 border-gray-300 shadow-md lg:w-1/4 rounded-2xl focus:outline-none focus:placeholder-gray-400"
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>
        <div className="absolute flex flex-1 w-full h-screen">
          {tailwind ? (
            <>
              <div
                style={{ backgroundColor: userInput }}
                className="flex items-center justify-center flex-1 uppercase"
              >
                <p className="text-2xl">{userInput}</p>
              </div>
              <div
                style={{ backgroundColor: tailwind.tailwindColourValue }}
                className="flex items-center justify-center flex-1"
              >
                <p className="text-2xl">{tailwind.tailwindColourVariant}</p>
              </div>
            </>
          ) : null}
        </div>
      </main>
    </div>
  );
}
