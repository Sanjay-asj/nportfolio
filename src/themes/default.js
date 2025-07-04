export default {
  // Fonts
  fonts: {
    title: "Inter, sans-serif", // More modern alternative
    main: "Inter, sans-serif",
    code: "Fira Code, monospace" // Added for code snippets
  },
  
  // Color palette
  colors: {
    // Primary colors
    primary1: "#3B82F6", // Bright blue (replaces purple)
    primary2: "#2563EB", // Darker blue
    primary3: "#1D4ED8", // Deep blue
    
    // Backgrounds
    background1: "#0F172A", // Dark navy
    background2: "#1E293B", // Slightly lighter navy
    background3: "#334155", // For contrast
    
    // Text colors
    text: "#E2E8F0", // Light gray-blue
    text1: "#F8FAFC", // Nearly white
    text2: "#94A3B8", // Muted blue-gray
    text3: "#64748B", // Darker muted
    
    // Interactive elements
    button: "#3B82F6", // Matching primary
    buttonHover: "#2563EB",
    link: "#60A5FA", // Light blue
    
    // Special sections
    footerBackground: "#020617", // Very dark navy
    cardBackground: "#1E293B",
    
    // Status colors
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    
    // Borders
    border: "#1E293B",
    borderLight: "#334155"
  },
  
  // Shadows
  shadows: {
    small: "0 1px 3px rgba(0, 0, 0, 0.12)",
    medium: "0 4px 6px rgba(0, 0, 0, 0.15)",
    large: "0 10px 25px rgba(0, 0, 0, 0.2)",
    primaryGlow: "0 0 15px rgba(59, 130, 246, 0.3)"
  },
  
  // Breakpoints
  breakpoints: {
    xs: 'screen and (max-width: 480px)',
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)',
    xxl: 'screen and (min-width: 1281px)'
  },
  
  // Spacing
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem'
  },
  
  // Border radius
  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    circle: '50%'
  },
  
  // Transitions
  transitions: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.45s ease'
  }
}