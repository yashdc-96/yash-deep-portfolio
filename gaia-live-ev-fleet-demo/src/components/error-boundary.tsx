import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false }

  public static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unhandled UI error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto mt-20 w-full max-w-xl rounded-2xl border border-red-400/30 bg-red-500/10 p-6 text-red-50">
          <h2 className="text-xl font-semibold">Something went wrong</h2>
          <p className="mt-2 text-sm text-red-100/90">
            The app hit an unexpected error. Refresh the page to recover.
          </p>
        </div>
      )
    }
    return this.props.children
  }
}
