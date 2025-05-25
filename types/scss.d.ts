declare module '*.module.scss' {
  import { Variables } from '@/styles/variables';
  
  const classes: { readonly [key: string]: string };
  const vars: Variables;
  
  export { vars };
  export default classes;
}