declare namespace NodeJS {
    interface Global {
    localStorage: {
      getItem: (key: string) => any;
      setItem: (key: string, value: string) => any;
    };
    }
}

declare module "jwt-autorefresh";
declare module "react-scrollspy-nav";
declare module "react-spy-scroll";
declare module "react-scroll";
declare module "react-copy-to-clipboard";
declare module "marked";
