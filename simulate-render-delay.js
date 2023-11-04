// Simulate render delay in React

const Component = lazy(() =>
  import('./Component').then((module) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(module as any)
      }, 5000)
    })
  })
)
