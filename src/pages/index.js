import Link from 'next/link'
import Container from '../components/container'

function Index() {

  return (
    <Container>
      <h1>This is the welcome page of the website</h1>
      <h1>Here should be have a animation here</h1>
      <Link href="/home">Homepage</Link>
    </Container>
  )
}

export default Index;