import { useEffect, useRef, useState } from 'react';
import tailwindColours from '../utils/tailwindColours';

const Colours = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 4000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [copied]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(tailwindColours));
    setCopied(true);
  };

  return (
    <div className="container py-8 mx-auto">
      <div className="h-40 overflow-y-scroll border-2 rounded">
        <pre>{JSON.stringify(tailwindColours, null, 2)}</pre>
      </div>
      <div className="flex justify-end">
        <button
          className={`flex items-center px-4 py-3 mt-4 text-sm font-bold text-white uppercase rounded ${
            copied ? 'bg-green-600' : 'bg-slate-500'
          }`}
          onClick={copyToClipboard}
        >
          {copied && (
            <div className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          )}
          {copied ? 'Copied!' : 'Copy to clipboard'}
        </button>
      </div>
    </div>
  );
};

export default Colours;
