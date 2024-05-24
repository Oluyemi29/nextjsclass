'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const[count, setCount] = useState(0)

  const router = useRouter()

  return (
    <div>
      <h1>Hello world!</h1>

      <button onClick={()=>router.push('/signIn')}>Sign In</button>
      <Link href='/signUp'><button>Sign Up</button></Link>
      <button onClick={()=>router.push('/signIn') }>Dashboard</button>
      <Link href='/blog'><button>Blog</button></Link>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count + 5)}>Increment</button>
      <button onClick={()=>setCount(count - 5)}>Decrement</button>
      
    </div>

  );
}
