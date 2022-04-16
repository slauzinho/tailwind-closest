import { useEffect, useRef, useState } from 'react';
import tailwindColours from '../utils/tailwindColours';

const Colours = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
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
          className="px-4 py-3 mt-4 text-sm font-bold text-white uppercase rounded bg-slate-500"
          onClick={copyToClipboard}
        >
          Copy to clipboard
        </button>
      </div>
    </div>
  );
};

export default Colours;
