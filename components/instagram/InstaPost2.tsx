'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

type InstagramEmbedProps = {
  /** Instagram permalink (reel, post, etc.) */
  permalink: string;
};

export default function InstagramEmbed2({ permalink }: InstagramEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // If script not added yet, add it
    if (!document.getElementById('instagram-embed-script')) {
      const script = document.createElement('script');
      script.id = 'instagram-embed-script';
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        window.instgrm?.Embeds.process();
      };
      document.body.appendChild(script);
    } else {
      // Script already present — just reprocess the embeds
      window.instgrm?.Embeds.process();
    }
  }, [permalink]);

  return (
    <div ref={ref}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={permalink}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: 540,
          minWidth: 326,
          padding: 0,
          width: '99.375%',
        }}
      >
        <a
          href={permalink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View this post on Instagram
        </a>
      </blockquote>
    </div>
  );
}
