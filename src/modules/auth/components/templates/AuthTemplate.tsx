import { FooterAuth } from "../organisms/FooterAuth/FooterAuth";
import { HeaderAuth } from "../organisms/HeaderAuth/HeaderAuth";
import './AuthTemplate.scss';

interface props {
  children: JSX.Element | JSX.Element[];
}

export const AuthTemplate = ({ children }: props): JSX.Element => {
  return (
    <div className="authTemplate">
      <HeaderAuth />
      {children}
      <FooterAuth />
    </div>
  );
};
