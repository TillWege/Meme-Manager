import { Container, Grid, Skeleton } from "@mantine/core"
import type { NextPage } from "next"

const MemePage: NextPage = () => {
  const child = <Skeleton height={140} radius="md" animate={false} />

  return (
    <Container my="xl">
      <h1>meme hier</h1>
    </Container>
  )
}

export default MemePage
