import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
}

const isExternalHref = (href) => /^https?:\/\//i.test(href)
const isMailOrTelHref = (href) => /^(mailto:|tel:)/i.test(href)

export function Button({ variant = 'primary', className, ...props }) {
  const href = props.href

  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className,
  )

  // return typeof props.href === 'undefined' ? (
  //   <button className={className} {...props} />
  // ) : (
  //   <Link className={className} {...props} />
  // )

  // No href => real button
  if (typeof href === 'undefined') {
    return <button className={className} {...props} />
  }

  // mailto:/tel: should be a real <a> (Next <Link> can interfere with protocol handlers)
  if (isMailOrTelHref(href)) {
    const { href: _href, ...rest } = props
    return <a className={className} href={href} {...rest} />
  }

  // External links should also be a real <a>
  if (isExternalHref(href)) {
    const { href: _href, target, rel, ...rest } = props
    return (
      <a
        className={className}
        href={href}
        target={target ?? '_blank'}
        rel={rel ?? 'noopener noreferrer'}
        {...rest}
      />
    )
  }

  // Internal routes => Next.js Link
  return <Link className={className} {...props} />
}
