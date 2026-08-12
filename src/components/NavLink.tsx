'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ComponentProps, ReactNode } from 'react'

type NavLinkProps = Omit<ComponentProps<typeof Link>, 'href' | 'className'> & {
  href: string
  end?: boolean
  className?: string | ((args: { isActive: boolean }) => string | undefined)
  children: ReactNode
}

export function NavLink({
  href,
  end = false,
  className,
  children,
  ...props
}: NavLinkProps) {
  const pathname = usePathname()
  const isActive = end
    ? pathname === href
    : pathname === href || (href !== '/' && pathname.startsWith(`${href}/`))
  const resolved =
    typeof className === 'function' ? className({ isActive }) : className

  return (
    <Link href={href} className={resolved} {...props}>
      {children}
    </Link>
  )
}
