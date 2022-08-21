import React from "react"
import { useUser } from "@auth0/nextjs-auth0"
import Image from "next/image"

export default function UserInfo() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  console.log(user?.sub)
  return (
    user && (
      <div>
        <div style={{ paddingTop: "8px" }}>
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
      </div>
    )
  )
}
