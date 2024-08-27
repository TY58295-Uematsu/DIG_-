import {memo, FC, useCallback} from "react";
import {Box, Flex, Heading, Link, useDisclosure} from "@chakra-ui/react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { useHistory } from "react-router-dom";



export const Header: FC = memo(() => {
  const {isOpen, onOpen,onClose } = useDisclosure();
  const history = useHistory();
  const onClickHome = useCallback(()=> history.push("/Home"), []);
  const onClickUserManegement = useCallback(()=> history.push("/Home/user_manegement"), []);
  const onClickSetting = useCallback(()=> history.push("/Home/setting"), []);
  return (
    <>
    <Flex
      as="nav"
      bg="teal.500"
      align="center"
      justify="space-between"
      padding={{base:3, md:5}}
      w="100vw"
    >
      <Flex align="center" as= "a" mr={8} _hover={{cursor:"pointer"}} onClick={onClickHome}>
        <Heading as="h1" fontSize={{base: "md", md:"lg"}}>
          ユーザー管理アプリ
        </Heading>
      </Flex>
      <Flex align="center" fontSize="sm" flexGrow={2} display={{base:"none", md:"flex"}} >
        <Box pr={4}>
        <Link onClick={onClickUserManegement}>ユーザー一覧</Link>
        </Box>
        <Link onClick={onClickSetting}>設定</Link>
      </Flex>
      <MenuIconButton onOpen={onOpen} />

    </Flex>
    <MenuDrawer onClose={onClose} isOpen={isOpen} onClickHome={onClickHome} onClickSetting={onClickSetting} onClickUserManegement={onClickUserManegement}/>
    </>

  )
});

