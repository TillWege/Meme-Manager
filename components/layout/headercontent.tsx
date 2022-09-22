import { Text } from "@mantine/core"
import Link from "next/link"

export default function HeaderContent() {
  return (
    <Link href="/">
      <Text style={{ cursor: "pointer" }}>Meme-Manger</Text>
    </Link>
  )
}
