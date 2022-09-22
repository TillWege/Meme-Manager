import {
  ThemeIcon,
  Text,
  Center,
  useMantineTheme,
  useInputProps,
  BackgroundImage,
} from "@mantine/core"
import { IconPhoto } from "@tabler/icons"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

export interface MainMenuLinkProps {
  children: JSX.Element
  LinkCaption: String
}

// const LinkWrapper = styled.div({
//   paddingTop: "8px",
//   paddingBottom: "8px",
//   marginTop: "8px",
//   display: "flex",
//   alignItems: "center",
//   borderRadius: "4px",
//   //background: "#1a1b1e",
//   cursor: "pointer",
//   ":hover": {
//     transition: "background 0.5s",
//     background: "gray",
//   },
// })
interface LinkWrapperProps {
  backgroundColor: string
  hoverColor: string
}

const LinkWrapper = styled("div")((props: LinkWrapperProps) => ({
  paddingTop: "8px",
  paddingBottom: "8px",
  marginTop: "8px",
  display: "flex",
  alignItems: "center",
  borderRadius: "4px",
  background: props.backgroundColor,
  cursor: "pointer",
  ":hover": {
    transition: "background 0.5s",
    background: props.hoverColor,
  },
}))

export default function MainMenuLink(props: MainMenuLinkProps) {
  const theme = useMantineTheme()

  return (
    <LinkWrapper
      backgroundColor={theme.colors.dark[7]}
      hoverColor={theme.colors.gray[7]}
    >
      <ThemeIcon
        size="lg"
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan" }}
        style={{ marginLeft: "6px" }}
      >
        {props.children}
      </ThemeIcon>
      <Text
        style={{
          display: "inline",
          paddingLeft: "6px",
          //color: theme.colors.red[9],
          color: theme.white,
        }}
      >
        {props.LinkCaption}
      </Text>
    </LinkWrapper>
  )
}
