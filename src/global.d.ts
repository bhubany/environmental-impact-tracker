interface Window {
  google?: {
    accounts: {
      id: {
        initialize: (options: { client_id: string; callback: (response: any) => void }) => void
        renderButton: (parent: HTMLElement, options: Record<string, unknown>) => void
        prompt: () => void
      }
    }
  }
}
