import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      green: '#01FF13';
      black: '#131518';
      gray1: '#1A202C';
      gray2: '#2D3748';
      gray3: '#4A5568';
      gray4: '#718096';
      white: '#FFFFFF';
    };
    fontWeight: {
      thin: 100;
      extraLight: 200;
      light: 300;
      regular: 400;
      medium: 500;
      semiBold: 600;
      bold: 700;
      extraBold: 800;
      black: 900;
    };
  }
}
