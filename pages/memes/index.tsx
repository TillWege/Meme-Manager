import { Container, Grid, Skeleton } from "@mantine/core"
import type { NextPage } from "next"

const MemeIndex: NextPage = () => {
  const child = <Skeleton height={140} radius="md" animate={false} />

  return (
    <Container my="xl">
      <p> ToDo Grid</p>
    </Container>
  )
}

export default MemeIndex
