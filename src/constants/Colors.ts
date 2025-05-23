export const Colors = {
  // Primary colors
  primary: '#007AFF',
  primaryLight: '#5C9DFF',
  primaryDark: '#0058CC',
  
  // Grayscale
  white: '#FFFFFF',
  gray1: '#F8F9FA',
  gray2: '#E9ECEF',
  gray3: '#DEE2E6',
  gray4: '#CED4DA',
  gray5: '#ADB5BD',
  gray: '#6C757D',
  grayDark: '#343A40',
  black: '#000000',
  
  // Semantic colors
  success: '#28A745',
  danger: '#DC3545',
  warning: '#FFC107',
  info: '#17A2B8',
  
  // Background colors
  background: '#F8F9FA',
  card: '#FFFFFF',
  
  // Text colors
  text: '#212529',
  textSecondary: '#6C757D',
  textTertiary: '#ADB5BD',
  
  // Border colors
  border: '#E9ECEF',
  borderDark: '#DEE2E6',
} as const;

export type ColorKey = keyof typeof Colors;
