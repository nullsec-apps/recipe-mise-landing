import { Component, ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'

interface Props { children: ReactNode }
interface State { hasError: boolean }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }
  static getDerivedStateFromError() { return { hasError: true } }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FBF6EF] flex items-center justify-center px-6">
          <div className="text-center max-w-sm">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-[#F6DED8] flex items-center justify-center">
              <AlertTriangle size={26} className="text-[#A8432F]" strokeWidth={1.5} />
            </div>
            <h2 className="font-serif-display text-3xl mt-5 text-[#2B2420]">Something burned in the kitchen</h2>
            <p className="mt-2 text-[#7A6F63]">Let\u2019s try plating that again.</p>
            <Button onClick={() => window.location.reload()} className="mt-6 bg-[#C8553D] hover:bg-[#A8432F] text-[#FBF6EF] h-11 px-6 rounded-full transition-all duration-200">
              Reload
            </Button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
