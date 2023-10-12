import { Container } from '@/src/components/Container';
import { Flex } from '@/src/components/Flex';
import { Link } from '@/src/components/Link';
import { Paragraph } from '@/src/components/Paragraph';
import { SidebarLink } from '@/src/components/SidebarLink';
import { CONTENT, ROUTE_SIGNIN } from '@/src/constants';
import { UserCircle } from '@phosphor-icons/react/dist/ssr';

export default async function Index() {
  return (
    <Container className="text-center">
      <h2 className="mt-l">
        🦦
        <br />
        {CONTENT.appName}
      </h2>
      <Flex align="center" justify="center" gapX="xs" className="my-s">
        <SidebarLink href={ROUTE_SIGNIN}>
          <UserCircle weight="duotone" width="18" />
          {CONTENT.signInTitle}
        </SidebarLink>
        {/* <NextLink href={ROUTE_SIGNUP} passHref>
            <SidebarLink>
              <PlusCircledIcon />
              {CONTENT.signUpTitle}
            </SidebarLink>
          </NextLink> */}
      </Flex>

      <Paragraph className="mt-m">
        This is an instance of{' '}
        <Link variant="accent" href="https://github.com/mrmartineau/Otter">
          Otter
        </Link>{' '}
        by{' '}
        <Link variant="accent" href="https://zander.wtf">
          Zander Martineau
        </Link>
        . It is an open-source, private bookmarking app built on{' '}
        <Link variant="accent" href="https://nextjs.org">
          next.js
        </Link>{' '}
        and{' '}
        <Link variant="accent" href="https://supabase.com">
          Supabase
        </Link>
        .
      </Paragraph>
      <Paragraph>
        If you want to create your own instance, find out more at{' '}
        <Link variant="accent" href="https://github.com/mrmartineau/Otter">
          the project home page
        </Link>
        .
      </Paragraph>
    </Container>
  );
}
