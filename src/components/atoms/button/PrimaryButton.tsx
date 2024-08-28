// PrimaryButton

import { Button } from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";

type Prosps = {
  children:ReactNode;
  disabled?: boolean
  loading?: boolean
  onClick:() => void;
}

export const PrimaryButton: FC<Prosps> = memo((props) => {
  const {children, disabled = true, loading = false, onClick} = props;
  return (
    <Button bg="teal.400" color="white" _hover={{opacity:0.8}} isDisabled={disabled || loading} isLoading={loading} onClick={onClick}>
      {children}
    </Button> 
  );
});