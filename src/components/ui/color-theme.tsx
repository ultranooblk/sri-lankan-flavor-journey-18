
import { useTheme } from "@/hooks/use-theme";

export interface ColorThemeProps {
  /**
   * Optional className for additional styling
   */
  className?: string;
  /**
   * The component to render color theme value within
   */
  children?: React.ReactNode;
  /**
   * When true, shows the current theme name (light/dark/system)
   */
  showName?: boolean;
}

/**
 * A utility component for displaying and accessing the current theme
 */
export function ColorTheme({ className, children, showName = false }: ColorThemeProps) {
  const { theme, setTheme } = useTheme();
  
  return (
    <div className={className}>
      {showName && <div className="text-sm text-medium-contrast">Current theme: {theme}</div>}
      {children}
    </div>
  );
}

/**
 * Hook for accessing color theme values in components
 * This can be extended later to provide more theme-related utilities
 */
export function useColorTheme() {
  const { theme } = useTheme();
  
  const isDark = theme === "dark";
  
  // Return useful theme-related values
  return {
    isDark,
    isLight: !isDark,
    themeName: theme,
    // Add more theme-related values as needed
  };
}
