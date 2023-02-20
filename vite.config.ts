import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig((res) => {
  console.log('res', res)
  return {
    plugins: [react()],
  }
})
