import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import {memo, FC, useEffect, useCallback} from "react"
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser.ts";
import { useLoginUser } from "../../hooks/useLoginUser.ts";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManegement: FC = memo(() => {
  const {isOpen, onClose, onOpen} = useDisclosure();
  const {getUsers, users, loading} = useAllUsers();
  const {loginUser} = useLoginUser();
  console.log(loginUser)
  useEffect(() => getUsers(), []);

  const {onSlectUser, selectedUser} = useSelectUser();  
  const onClickuser = useCallback((id:number) => {
    onSlectUser({id: id, users: users, onOpen});
  },[users]);


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
              id={user.id}
              imageUrl="https://source.unsplash.com/random"
              userName={user.username}
              fullName={user.name}
              onClick={onClickuser}/>
          </WrapItem>)
        )}

      
    </Wrap>
    )}
    <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  )
});