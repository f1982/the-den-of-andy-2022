import Image from './Image';

export default {
  title: 'UI/Image',
  component: Image,
};

function Template(args) {
  return <Image {...args} />;
}

export const Default = Template.bind({});
Default.args = { width: '400px', height: '300px', src: 'http://placekitten.com/1200/500' };

export const DifferentSizes = () => {
  return (
    <div>
      <h1>size: 300 x 300</h1>
      <Image width='300px' height='300px' src='http://placekitten.com/800/500' alt="test" />
      <h1>size: 500 x 300</h1>
      <Image width='500px' height='300px' src='http://placekitten.com/800/400' alt="test" />

      <h1>size: 800 x auto</h1>
      <Image width='800px' src='http://placekitten.com/800/500' alt="test" />

      <h1>size: auto x 200</h1>
      <Image height='400px' src='http://placekitten.com/800/500' alt="test" />

      <h1>size: auto x auto</h1>
      <Image src='http://placekitten.com/900/500' alt="test" />
    </div>
  );
}


export const CustomStyle = () => {
  return (
    <div>
      <h1>Class name</h1>
      <Image width='300px' height='300px' src='http://placekitten.com/800/500' alt="test" className='rounded-lg' />
      <h1>Custom style</h1>
      <Image
        width='300px'
        height='300px'
        src='http://placekitten.com/800/500'
        alt="test"
        style={{ borderRadius: '2rem' }} />
    </div>
  );
}
