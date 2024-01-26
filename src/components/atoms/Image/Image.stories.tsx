import ACImage from './Image';

export default {
  title: 'UI/Image',
  component: ACImage,
};

const Template = (args) => <ACImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '400px',
  height: '300px',
  src: 'http://placekitten.com/1200/500',
};

export const DifferentSizes = () => (
  <div>
    <h1>size: 300 x 300</h1>
    <ACImage width="300px" height="300px" src="http://placekitten.com/800/500" alt="test" />
    <h1>size: 500 x 300</h1>
    <ACImage width="500px" height="300px" src="http://placekitten.com/800/400" alt="test" />
    <h1>size: 800 x auto</h1>
    <ACImage width="800px" src="http://placekitten.com/800/500" alt="test" />
    <h1>size: auto x 200</h1>
    <ACImage height="400px" src="http://placekitten.com/800/500" alt="test" />
    <h1>size: auto x auto</h1>
    <ACImage src="http://placekitten.com/900/500" alt="test" />
  </div>
);

export const CustomStyle = () => (
  <div>
    <h1>Class name</h1>
    <ACImage
      width="300px"
      height="300px"
      src="http://placekitten.com/800/500"
      alt="test"
      className="rounded-lg"
    />
    <h1>Custom style</h1>
    <ACImage
      width="300px"
      height="300px"
      src="http://placekitten.com/800/500"
      alt="test"
      style={{ borderRadius: '2rem' }}
    />
  </div>
);
