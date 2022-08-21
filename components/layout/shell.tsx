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
} from "@mantine/core"
import { useState } from "react"
import HeaderContent from "./headercontent"
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
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Navbar.Section mt="xs">
            <div style={{ borderBottom: `1px solid ${theme.colors.gray[8]}` }}>
              <p>header der navbar</p>
            </div>
          </Navbar.Section>

          <Navbar.Section grow mx="-xs" px="xs">
            <p>Hier steht scrollbarer Text</p>
          </Navbar.Section>

          <Navbar.Section>
            <div style={{ borderTop: `1px solid ${theme.colors.gray[8]}` }}>
              <UserInfo></UserInfo>
            </div>
          </Navbar.Section>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
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
