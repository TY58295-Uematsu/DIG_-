import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import {memo, FC, useEffect, useCallback} from "react"
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManegement: FC = memo(() => {
  const {isOpen, onClose, onOpen} = useDisclosure();
  const {getUsers, users, loading} = useAllUsers();
  const onClickuser = useCallback(() => onOpen(),[]);

useEffect(() => getUsers(), []);

  return (
    <>
    {loading ? (
      <Center h="100vh">
        <Spinner />
      </Center>
    ) : (
    <Wrap p={{base: 4, md: 10}}>

        {users.map((user) => 
          (<WrapItem key={user.id} mx="auto">
            <UserCard
              imageUrl="https://source.unsplash.com/random"
              userName={user.username}
              fullName={user.name}
              onClick={onClickuser}/>
          </WrapItem>)
        )}

      
    </Wrap>
    )}
    <UserDetailModal isOpen={isOpen} onClose={onClose} />
    {/* <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
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
    </Modal> */}
    </>
  )
});