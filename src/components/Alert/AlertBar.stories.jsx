import AlertBar, { AlertType } from './AlertBar';

export default {
  title: 'UI/AlertBar',
  component: AlertBar,
};

export function Demos() {
  return (
    <div>
      <p>Demo</p>
      <AlertBar type={AlertType.Warning}>This is Warning Bar</AlertBar>
      <AlertBar type={AlertType.Error}>This is Error Bar</AlertBar>
    </div>
  );
}
function Template(args) {
  return <AlertBar {...args} />;
}

export const WarningAlertBar = Template.bind({});
WarningAlertBar.args = {
  preview: false,
  type: AlertType.Warning,
  children: (
    <div>
      This page is a preview.
      {' '}
      <a
        href="/api/exit-preview"
        className="underline hover:text-cyan duration-200 transition-colors"
      >
        Click here
      </a>
      {' '}
      to exit preview mode.
    </div>
  ),
};

export const ErrorAlertBar = Template.bind({});
ErrorAlertBar.args = {
  preview: true,
  type: AlertType.Error,
  children: (
    <>
      The source code for this blog is
      {' '}
      <a
        href="https://github.com/vercel/next.js/tree/canary/examples"
        className="underline hover:text-success duration-200 transition-colors"
      >
        available on GitHub
      </a>
      .
    </>
  ),
};
