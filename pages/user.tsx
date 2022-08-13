import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Image from 'next/image';

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  console.log(user?.sub);
  return (
    user && (
      <div>
        <Image src={user.picture||""} alt={user.name||""} width={256} height={256}/>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.org_id}</p>
      </div>
    )
  );
}