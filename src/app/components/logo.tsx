//src/app/components/logo.tsx

"use client"

import Link from "next/link";
import Image from 'next/image'

export function Logo() {
  return (
    <div  className="hover:opacity-50">
        <Link href="/">
            <Image src="/mandala-tochange.svg" alt="Home Page" width={50} height={50} objectFit="contain" />
        </Link>
    </div>
  )
}
 