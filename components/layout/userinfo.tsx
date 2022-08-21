import React from "react"
import { useUser } from "@auth0/nextjs-auth0"
import Image from "next/image"
import { Button, Text } from "@mantine/core"
import Link from "next/link"

export default function UserInfo() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  console.log(user?.sub)
  return (
    <div
      style={{
        paddingTop: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {user ? (
        <div>
          <div>
            <Image
              src={user.picture || ""}
              alt={user.name || "Profilbild"}
              width={32}
              height={32}
            />
            <h2
              style={{
                display: "inline",
                verticalAlign: "top",
                paddingLeft: "8px",
              }}
            >
              {user.name}
            </h2>
          </div>
          <p>{user.email}</p>

          <div
            style={{
              paddingTop: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href="/api/auth/logout">
              <Button>Logout</Button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <Link href="/api/auth/login">
            <Button>login</Button>
          </Link>
        </>
      )}
    </div>
  )
}
