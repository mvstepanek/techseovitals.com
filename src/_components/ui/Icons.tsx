import React from 'react';

interface IconProps {
  className?: string;
  fill?: string;
  stroke?: string;
  viewBox?: string;
}

export const Icons = {
  // Lightning/Speed icon
  lightning: (props: IconProps) => (
    <svg className={props.className || 'w-6 h-6'} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),

  // Check/Success icon
  check: (props: IconProps) => (
    <svg className={props.className || 'w-6 h-6'} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  ),

  // Growth/Chart icon
  growth: (props: IconProps) => (
    <svg className={props.className || 'w-6 h-6'} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),

  // Users/People icon
  users: (props: IconProps) => (
    <svg className={props.className || 'w-6 h-6'} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
      />
    </svg>
  ),

  // Document/File icon
  document: (props: IconProps) => (
    <svg className={props.className || 'w-6 h-6'} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ),

  // Monitor/Analytics icon
  monitor: (props: IconProps) => (
    <svg className={props.className || 'w-6 h-6'} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  ),

  // Migration/Transfer icon
  transfer: (props: IconProps) => (
    <svg className={props.className || 'w-6 h-6'} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),

  // Email/Newsletter icon
  email: (props: IconProps) => (
    <svg className={props.className || 'w-6 h-6'} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22.0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5A2 2 0 003 7v10a2 2 0 002 2z" />
    </svg>
  ),

  // Clock/Time icon
  clock: (props: IconProps) => (
    <svg className={props.className || 'w-6 h-6'} fill="currentColor" viewBox="0 0 20 20" {...props}>
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
    </svg>
  ),

  // Star/Rating icon
  star: (props: IconProps) => (
    <svg className={props.className || 'w-6 h-6'} fill="currentColor" viewBox="0 0 20 20" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),

  // CheckCircle/Verified icon
  checkCircle: (props: IconProps) => (
    <svg className={props.className || 'w-6 h-6'} fill="currentColor" viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  ),

  // Conversation/Chat icon
  chat: (props: IconProps) => (
    <svg className={props.className || 'w-6 h-6'} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  ),

  // Settings/Gear icon
  settings: (props: IconProps) => (
    <svg className={props.className || 'w-6 h-6'} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),

  // User/Person icon
  user: (props: IconProps) => (
    <svg className={props.className || 'w-6 h-6'} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7A4 4 0 118 7a4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),

  // Badge/Shield icon
  badge: (props: IconProps) => (
    <svg className={props.className || 'w-6 h-6'} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42.0 001.946-.806 3.42 3.42.0 014.438.0 3.42 3.42.0 001.946.806 3.42 3.42.0 013.138 3.138 3.42 3.42.0 00.806 1.946 3.42 3.42.0 010 4.438 3.42 3.42.0 00-.806 1.946 3.42 3.42.0 01-3.138 3.138 3.42 3.42.0 00-1.946.806 3.42 3.42.0 01-4.438.0 3.42 3.42.0 00-1.946-.806 3.42 3.42.0 01-3.138-3.138 3.42 3.42.0 00-.806-1.946 3.42 3.42.0 010-4.438 3.42 3.42.0 00.806-1.946 3.42 3.42.0 013.138-3.138z"
      />
    </svg>
  ),

  // Verified Badge/Shield icon (filled)
  verifiedBadge: (props: IconProps) => (
    <svg className={props.className || 'w-6 h-6'} fill="currentColor" viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  ),

  // Pulse/Loading animation dot
  pulsingDot: (props: IconProps) => <div className={props.className || 'w-2 h-2 bg-white rounded-full animate-pulse'} />,

  // Heart icon
  heart: (props: IconProps) => (
    <svg className={props.className || 'w-6 h-6'} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.318 6.318a4.5 4.5.0 000 6.364L12 20.364l7.682-7.682a4.5 4.5.0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5.0 00-6.364.0z"
      />
    </svg>
  ),

  // Lightbulb/Idea icon
  lightbulb: (props: IconProps) => (
    <svg className={props.className || 'w-6 h-6'} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072.0l-.548.547A3.374 3.374.0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  ),

  // Target/Focus icon
  target: (props: IconProps) => (
    <svg className={props.className || 'w-6 h-6'} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  ),

  // Question mark/Help icon
  questionMark: (props: IconProps) => (
    <svg className={props.className || 'w-6 h-6'} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),

  // Eye/View icon
  eye: (props: IconProps) => (
    <svg className={props.className || 'w-6 h-6'} fill="currentColor" viewBox="0 0 20 20" {...props}>
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
      <path
        fillRule="evenodd"
        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
        clipRule="evenodd"
      />
    </svg>
  ),

  // Video/Play icon
  video: (props: IconProps) => (
    <svg className={props.className || 'w-6 h-6'} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  ),

  // Arrow Trend Up icon
  arrowTrendUp: (props: IconProps) => (
    <svg className={props.className || 'w-5 h-5'} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17l9.2-9.2M17 17V7H7" />
    </svg>
  ),

  // Checkmark icon
  checkmark: (props: IconProps) => (
    <svg className={props.className || 'w-4 h-4'} fill="currentColor" viewBox="0 0 20 20" {...props}>
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  ),

  // LinkedIn icon
  linkedin: (props: IconProps) => (
    <svg className={props.className || 'h-8 w-8'} fill="currentColor" viewBox="0 0 640 640" {...props}>
      <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM165 266.2L231.5 266.2L231.5 480L165 480L165 266.2zM236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160C219.5 160 236.7 177.2 236.7 198.5zM413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480L413.9 480z" />
    </svg>
  ),

  // Bluesky icon
  bluesky: (props: IconProps) => (
    <svg className={props.className || 'h-8 w-8'} fill="currentColor" viewBox="0 0 640 640" {...props}>
      <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM320 311.4C334.5 281.4 374 225.6 410.7 198.1C437.2 178.2 480 162.9 480 211.8C480 221.6 474.4 293.9 471.1 305.6C459.7 346.4 418.1 356.8 381.1 350.5C445.8 361.5 462.3 398 426.7 434.5C359.2 503.8 329.7 417.1 322.1 394.9L321.8 394C320.9 391.4 320.4 389.9 320 389.9C319.6 389.9 319.1 391.4 318.2 394C318.1 394.3 318 394.6 317.9 394.9C310.3 417.1 280.8 503.7 213.3 434.5C177.8 398 194.2 361.5 258.9 350.5C221.9 356.8 180.3 346.4 168.9 305.6C165.6 293.9 160 221.6 160 211.8C160 162.9 202.9 178.3 229.3 198.1C266 225.6 305.5 281.5 320 311.4z" />
    </svg>
  ),

  // YouTube icon
  youtube: (props: IconProps) => (
    <svg className={props.className || 'h-8 w-8'} fill="currentColor" viewBox="0 0 640 640" {...props}>
      <path d="M378 320.2L282.8 266.1L282.8 374.3L378 320.2zM480 96L160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96zM494.4 232.1C502 260.7 502 320.3 502 320.3C502 320.3 502 379.9 494.4 408.4C490.2 424.2 477.9 436.1 462.2 440.3C433.9 448 320 448 320 448C320 448 206.1 448 177.8 440.4C162.1 436.2 149.8 424.3 145.6 408.5C138 379.9 138 320.3 138 320.3C138 320.3 138 260.6 145.6 232.1C149.8 216.3 162.1 203.9 177.8 199.7C206.1 192 320 192 320 192C320 192 433.9 192 462.2 199.7C477.9 203.9 490.2 216.3 494.4 232.1z" />
    </svg>
  ),

  // Menu/Hamburger icon
  menu: (props: IconProps) => (
    <svg className={props.className || 'h-6 w-6'} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  ),

  // Arrow Right icon
  arrowRight: (props: IconProps) => (
    <svg className={props.className || 'w-4 h-4'} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
};

export default Icons;
