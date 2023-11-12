import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          A demo of a token-gated blog built with Next.js and{' '}Unlock Protocol!
          More <Link src="https://github.com/julien51/locked-blog-example/">details on Github!</Link>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
