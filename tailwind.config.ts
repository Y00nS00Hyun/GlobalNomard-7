import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        black: '#1B1B1B',
        'black-nomad': '#112211',
        gray: {
          '4b': '#4B4B4B',
          '79': '#79747E',
          a1: '#A1A1A1',
          a4: '#A4A1AA',
          ad: '#ADAEB8',
          cb: '#CBC9CF',
          dd: '#DDDDDD',
          ee: '#EEEEEE',
          fa: '#FAFAFA',
        },
        green: {
          '0B': '#0B3B2D',
          ce: '#CED8D5',
          '00': '#00AC07',
        },
        red: {
          ff4: '#FF472E',
          ffc: '#FFC2BA',
          ffe: '#FFE4E0',
        },
        orange: {
          ff7: '#FF7C1D',
          fff: '#FFF4E8',
        },
        yellow: '#FFC23D',
        blue: {
          '00': '#0085FF',
          '2e': '#2EB4FF',
          e5: '#E5F3FF',
        },
      },
      fontSize: {
        'main-lg': ['68px', { lineHeight: '81px' }],
        'main-md': ['54px', { lineHeight: '64px' }],
        '3xl': ['32px', { lineHeight: '42px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        xl: ['20px', { lineHeight: '32px' }],
        '2lg': ['18px', { lineHeight: '26px' }],
        lg: ['16px', { lineHeight: '26px' }],
        md: ['14px', { lineHeight: '24px' }],
        sm: ['13px', { lineHeight: '22px' }],
        xs: ['12px', { lineHeight: '18px' }],
      },
      fontWeight: {
        bold: '700',
        semibold: '600',
        medium: '500',
        regular: '400',
      },
      backgroundImage: {
        'main-gradient':
          'linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%)',
      },
      boxShadow: {
        sm: '0 4px 16px 0px rgba(17, 34, 17, 0.05)',
      },
    },
  },
  plugins: [],
};
export default config;
