import { FC } from "react";
import { useRouter } from "next/router";
import { Button } from "../styles/form";

const Home: FC = () => {
  const router = useRouter();
  return (
    <div>
      <Button onClick={() => router.push("/signup")} disabled={false}>
        Sign Up
      </Button>
    </div>
  );
};

export default Home;
