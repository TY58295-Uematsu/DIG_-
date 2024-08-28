import { Box, Button, Center, Divider, Flex, Heading, Input, Spacer } from "@chakra-ui/react";
import {memo, FC, useState, ChangeEvent} from "react"
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: FC = memo(() => {
  const {login, loading} = useAuth();
  const [userId,setUserId] = useState("");
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)
  const onClickLogin = () => login(userId)
  
  return (
    <Flex align="center" justify="center" height="100vh">
      <Spacer />
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md" textAlign="center">
        <Heading as="h1" size="lg">ユーザー管理アプリ</Heading>
        <Divider my={4} px={4} py={4}/>
        <Input  placeholder="ユーザーID" value={userId} onChange={onChangeUserId} mb={2}/>
       <PrimaryButton disabled={userId === ""} loading={loading} onClick={onClickLogin}>ログイン</PrimaryButton>
      </Box>
      <Spacer />
    </Flex>
  )
});