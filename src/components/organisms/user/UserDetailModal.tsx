import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";
import { FC, memo } from "react";

type Prosps = {
  isOpen: boolean;
  onClose: () => void;
}

export const UserDetailModal: FC<Prosps> = memo((props) => {
  const {isOpen, onClose} = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
    <ModalOverlay />
      <ModalContent pb={4}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>
                名前
              </FormLabel>
              <Input value="jakee" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>
                フルネーム
              </FormLabel>
              <Input value="jakee" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>
                Mail
              </FormLabel>
              <Input value="jakee" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>
                電話番号
              </FormLabel>
              <Input value="jakee" isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
  </Modal>
  );
});