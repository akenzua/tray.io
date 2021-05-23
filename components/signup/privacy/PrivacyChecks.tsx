import { FormEvent, useEffect, useState } from "react";
import {
  Form,
  Checkbox,
  Button,
  ButtonWrapper,
  Label,
  CheckWrapper,
} from "../../../styles/form";
import { Privacy, State } from "../../../type";
import { useSelector, useDispatch } from "react-redux";
import { privacyActionCreator } from "../../../redux/userSignUpSlice";
import { useRouter } from "next/router";

const PrivacyChecks = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { privacy, info } = useSelector((state: State) => state.user);
  const [button, setButton] = useState<boolean>(true);

  const defaultPrivacy: Privacy = {
    update: false,
    communication: false,
  };
  const currentPrivacy =
    privacy.update === false && privacy.communication === false
      ? defaultPrivacy
      : privacy;
  const [localPrivacy, setLocalPrivacy] = useState<Privacy>(currentPrivacy);

  const handleChange = <P extends keyof Privacy>(
    prop: P,
    value: Privacy[P]
  ) => {
    setLocalPrivacy({ ...localPrivacy, [prop]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(privacyActionCreator(localPrivacy));
    router.push("/signup/done");
  };

  useEffect(() => {
    if (info.email !== "") {
      setButton(false);
    }
  });

  return (
    <Form onSubmit={handleSubmit}>
      <CheckWrapper>
        <Checkbox
          type="checkbox"
          checked={localPrivacy.update}
          onChange={(e) => {
            handleChange("update", !localPrivacy.update);
          }}
          data-testid="update"
          aria-label="update"
        />
        <Label>Recieve updates about Tray.io product by email</Label>
      </CheckWrapper>
      <CheckWrapper>
        <Checkbox
          type="checkbox"
          checked={localPrivacy.communication}
          onChange={(e) => {
            handleChange("communication", !localPrivacy.communication);
          }}
          data-testid="communication"
          aria-label="communication"
        />
        <Label>
          Recieve communication by email for other products created by the
          Tray.io team
        </Label>
      </CheckWrapper>
      <ButtonWrapper>
        <Button disabled={button}>Next</Button>
      </ButtonWrapper>
    </Form>
  );
};
export default PrivacyChecks;
