import tailwindConfig from '../../tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'

const fullConfig = resolveConfig<any>(tailwindConfig)
const customModalStyles = {
  content: {
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '0',
    backgroundColor: fullConfig.theme.colors.surface,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  },
}

export default customModalStyles
