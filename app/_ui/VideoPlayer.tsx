'use client';

import { useRef } from 'react';

interface VideoPlayerProps {
  /**
   * The name/identifier of the video (used for both light and dark variants)
   */
  feature: string;
  /**
   * The Cloudflare bucket URL (defaults to a common pattern)
   */
  bucketUrl?: string;
  /**
   * Custom aspect ratio for the video container
   */
  aspectRatio?: string;
  /**
   * Custom className for the container
   */
  className?: string;
}

export function VideoPlayer({
  feature,
  bucketUrl = 'https://the.kat.tax/f2rn/marketing',
  aspectRatio = '2556/1306',
  className = '',
}: VideoPlayerProps) {
  const lightVideoRef = useRef<HTMLVideoElement>(null);
  const darkVideoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className={`relative ${className} border rounded-lg overflow-hidden`} style={{ aspectRatio }}>
      <video
        ref={lightVideoRef}
        muted
        autoPlay
        playsInline
        controls={false}
        className="absolute inset-0 w-full h-full object-cover dark:hidden not-prose"
        poster={`${bucketUrl}/${feature}.light.png`}
        src={`${bucketUrl}/${feature}.light.mp4`}
      />
      <video
        ref={darkVideoRef}
        muted
        autoPlay
        playsInline
        controls={false}
        className="absolute inset-0 w-full h-full object-cover hidden dark:block not-prose"
        poster={`${bucketUrl}/${feature}.dark.png`}
        src={`${bucketUrl}/${feature}.dark.mp4`}
      />
    </div>
  );
}
