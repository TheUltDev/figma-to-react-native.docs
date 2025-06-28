import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { SiDiscord, SiGithub, SiX } from '@icons-pack/react-simple-icons';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/plugin/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    url: 'https://figma-to-react-native.com',
    title: (
      <>
        <svg
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          data-prefix="fab"
          data-icon="logo"
          focusable="false"
          viewBox="0 0 27 27"
          width="27"
          height="27"
          fill="none">
          <rect width="27" height="27" rx="5" fill="#1E1E1E"></rect>
          <circle cx="13.6" cy="13.6" r="2.1" fill="url(#paint0_radial_201_55)"></circle>
          <path d="M13.5 18.4317C19.5751 18.4317 24.5 16.5513 24.5 14.2317C24.5 11.9121 19.5751 10.0317 13.5 10.0317C7.42487 10.0317 2.5 11.9121 2.5 14.2317C2.5 16.5513 7.42487 18.4317 13.5 18.4317Z" stroke="#8049C7"></path>
          <path d="M13.5 17.4317C19.5751 17.4317 24.5 15.5513 24.5 13.2317C24.5 10.9121 19.5751 9.03174 13.5 9.03174C7.42487 9.03174 2.5 10.9121 2.5 13.2317C2.5 15.5513 7.42487 17.4317 13.5 17.4317Z" stroke="#A259FF"></path>
          <path d="M10.8627 15.5263C13.9003 20.7875 17.9912 24.1124 20 22.9526C22.0089 21.7928 21.1749 16.5875 18.1373 11.3263C15.0998 6.06506 11.0089 2.7402 9.00002 3.9C6.99119 5.0598 7.82515 10.2651 10.8627 15.5263Z" stroke="#F24E1E"></path>
          <path d="M9.8654 15.5263C12.903 20.7875 16.9939 24.1124 19.0027 22.9526C21.0115 21.7928 20.1776 16.5875 17.14 11.3263C14.1024 6.06506 10.0115 2.7402 8.00271 3.9C5.99388 5.0598 6.82784 10.2651 9.8654 15.5263Z" stroke="#FF7262"></path>
          <path d="M8.8654 11.3263C5.82784 16.5875 4.99388 21.7928 7.00271 22.9526C9.01154 24.1124 13.1024 20.7875 16.14 15.5263C19.1776 10.2651 20.0115 5.0598 18.0027 3.9C15.9939 2.7402 11.903 6.06506 8.8654 11.3263Z" stroke="#0ACF83"></path>
          <path d="M9.86272 11.3263C6.82515 16.5875 5.99119 21.7928 8.00002 22.9526C10.0089 24.1124 14.0998 20.7875 17.1373 15.5263C20.1749 10.2651 21.0089 5.0598 19 3.9C16.9912 2.7402 12.9003 6.06506 9.86272 11.3263Z" stroke="#099D64"></path>
          <mask id="mask0_201_55" maskUnits="userSpaceOnUse" x="11" y="2" width="11" height="16">
            <rect x="11" y="2" width="11" height="16" fill="#D9D9D9"></rect>
          </mask>
          <g mask="url(#mask0_201_55)">
            <path d="M10.8627 15.5263C13.9003 20.7875 17.9912 24.1124 20 22.9526C22.0089 21.7928 21.1749 16.5875 18.1373 11.3263C15.0998 6.06506 11.0089 2.7402 9.00002 3.9C6.99119 5.0598 7.82515 10.2651 10.8627 15.5263Z" stroke="#F24E1E"></path>
            <path d="M9.8654 15.5263C12.903 20.7875 16.9939 24.1124 19.0027 22.9526C21.0115 21.7928 20.1776 16.5875 17.14 11.3263C14.1024 6.06506 10.0115 2.7402 8.00271 3.9C5.99388 5.0598 6.82784 10.2651 9.8654 15.5263Z" stroke="#FF7262"></path>
          </g>
          <mask id="mask1_201_55" maskUnits="userSpaceOnUse" x="9" y="12" width="8" height="7">
            <rect x="9" y="12" width="8" height="7" fill="#D9D9D9"></rect>
          </mask>
          <g mask="url(#mask1_201_55)">
            <path d="M13.5 18.4317C19.5751 18.4317 24.5 16.5513 24.5 14.2317C24.5 11.9121 19.5751 10.0317 13.5 10.0317C7.42487 10.0317 2.5 11.9121 2.5 14.2317C2.5 16.5513 7.42487 18.4317 13.5 18.4317Z" stroke="#8049C7"></path>
            <path d="M13.5 17.4317C19.5751 17.4317 24.5 15.5513 24.5 13.2317C24.5 10.9121 19.5751 9.03174 13.5 9.03174C7.42487 9.03174 2.5 10.9121 2.5 13.2317C2.5 15.5513 7.42487 17.4317 13.5 17.4317Z" stroke="#A259FF"></path>
          </g>
          <defs>
            <radialGradient id="paint0_radial_201_55" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13 13) rotate(59.0362) scale(2.91548)">
              <stop stopColor="#1ABCFE"></stop>
              <stop offset="0.796102" stopColor="#1ABCFE"></stop>
              <stop offset="0.796202" stopColor="#1C87B3"></stop>
            </radialGradient>
          </defs>
        </svg>
        {'Figma -> React Native'}
      </>
    ),
  },
  /** @see https://fumadocs.dev/docs/ui/navigation/links */
  links: [
    // Footer icons
    {
      icon: <SiGithub />,
      text: 'GitHub',
      url: 'https://github.com/kat-tax/figma-to-react-native',
      type: 'icon',
      external: true,
    },
    {
      icon: <SiX />,
      text: '𝕏',
      type: 'icon',
      external: true,
      url: 'https://x.com/theultdev',
    },
    {
      icon: <SiDiscord />,
      text: 'Discord',
      url: 'https://discord.kat.tax',
      type: 'icon',
      external: true,
    },
  ],
};
