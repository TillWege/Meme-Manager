import {
  AppShell,
  Aside,
  Burger,
  Footer,
  Header,
  MediaQuery,
  Navbar,
  useMantineTheme,
  Text,
  ThemeIcon,
} from "@mantine/core"
import { Icon2fa, IconHome, IconList, IconPhoto, IconUser } from "@tabler/icons"
import { useState } from "react"
import HeaderContent from "./headercontent"
import MainMenuLink from "./mainmenulink"
import UserInfo from "./userinfo"

export interface ShellProps {
  children: JSX.Element
}

export default function Shell(props: ShellProps) {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 275 }}
        >
          <Navbar.Section mt="xs">
            <div style={{ borderBottom: `1px solid ${theme.colors.gray[8]}` }}>
              <h1
                style={{
                  textAlign: "center",
                  marginBottom: "10px",
                  marginTop: "-20px",
                }}
              >
                Navigation
              </h1>
            </div>
          </Navbar.Section>

          <Navbar.Section grow mx="-xs" px="xs">
            <MainMenuLink LinkCaption={"Home"}>
              <IconHome size={20} />
            </MainMenuLink>
            <MainMenuLink LinkCaption={"Memes"}>
              <IconPhoto size={20} />
            </MainMenuLink>
            <MainMenuLink LinkCaption={"Lists"}>
              <IconList size={20} />
            </MainMenuLink>
            <MainMenuLink LinkCaption={"Profile"}>
              <IconUser size={20} />
            </MainMenuLink>
          </Navbar.Section>

          <Navbar.Section>
            <div style={{ borderTop: `1px solid ${theme.colors.gray[8]}` }}>
              <UserInfo />
            </div>
          </Navbar.Section>
        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <HeaderContent />
          </div>
        </Header>
      }
    >
      {props.children}
    </AppShell>
  )
}
