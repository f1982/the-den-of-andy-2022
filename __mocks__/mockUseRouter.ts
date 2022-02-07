// Mocks useRouter
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

/**
 * mockNextUseRouter
 * Mocks the useRouter React hook from Next.js on a test-case by test-case basis
 */
export default function mockNextUseRouter(props: {
    route: string;
    basePath:string,
    pathname: string;
    query: string;
    asPath: string;
}) {
  useRouter.mockImplementation(() => ({
    route: props.route,
    basePath: props.basePath,
    pathname: props.pathname,
    query: props.query,
    asPath: props.asPath,
  }));
}
