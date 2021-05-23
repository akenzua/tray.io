import { FC } from "react";
import { Container } from "../../styles/container";
import { UserFormNav } from "../nav/UserFormNav";

const Layout: FC = ({ children }) => {
  return (
    <Container>
      <div>
        <UserFormNav />
        {children}
      </div>
    </Container>
  );
};

export default Layout;
