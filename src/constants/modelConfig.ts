import Modal from 'react-modal';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

Modal.setAppElement('#__next');
const fullConfig = resolveConfig(tailwindConfig);
const customModalStyles = {
  content: {
    top: '39px',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '20px 0 0',
    backgroundColor: fullConfig.theme.colors.surface,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

export default customModalStyles;