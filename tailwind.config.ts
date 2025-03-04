
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
				display: ['Poppins', 'sans-serif']
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors based on new theme
				orange: {
					50: '#FFF7E6',
					100: '#FFECC6',
					200: '#FFD980',
					300: '#FFC64D',
					400: '#FFB21A',
					500: '#FFA400', // Primary
					600: '#E69400',
					700: '#CC8400',
					800: '#996300',
					900: '#664200',
					950: '#332100',
				},
				green: {
					50: '#E6FAF8',
					100: '#CCF5F1',
					200: '#99EBE3',
					300: '#66E0D5',
					400: '#33D6C7',
					500: '#00A896', // Secondary
					600: '#009787',
					700: '#007A6F',
					800: '#005C52',
					900: '#003D36',
					950: '#001E1B',
				},
				blue: {
					50: '#E6F0F9',
					100: '#CCE2F3',
					200: '#99C5E7',
					300: '#66A8DB',
					400: '#338BCF',
					500: '#005B9A', // Accent
					600: '#00528B',
					700: '#00437C',
					800: '#00345D',
					900: '#00233E',
					950: '#00111F',
				},
				gray: {
					50: '#F7F7F7', // Background
					100: '#E3E3E3',
					200: '#C8C8C8',
					300: '#ADADAD',
					400: '#929292',
					500: '#777777',
					600: '#5C5C5C',
					700: '#404040',
					800: '#252525',
					900: '#0B0B0B',
					950: '#050505',
				},
				hellofresh: {
					50: '#F1FAE6',
					100: '#E3F5CD',
					200: '#CAECA9',
					300: '#B0E385',
					400: '#96D961',
					500: '#67BC3C',
					600: '#5E9F36',
					700: '#4A7E2B',
					800: '#3E6A24',
					900: '#2E501B',
					950: '#1D3211',
				},
				cookme: {
					400: '#7ED242',
					500: '#67BC3C',
					600: '#5E9F36',
					700: '#4A7E2B',
				},
				hfpurple: {
					500: '#552F60',
				},
				hforange: {
					500: '#F9A528',
				},
				hfblue: {
					500: '#037DB5',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'fade-up': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-right': {
					from: { transform: 'translateX(100%)' },
					to: { transform: 'translateX(0)' }
				},
				'spin-slow': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-up': 'fade-up 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'spin-slow': 'spin-slow 8s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
