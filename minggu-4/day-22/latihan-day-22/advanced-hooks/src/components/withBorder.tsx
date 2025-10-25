import React from 'react'

export default function withBorder<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const ComponentWithBorder = (props: P) => {
    return (
      <div
        style={{
          border: '2px solid #007bff',
          borderRadius: '8px',
          marginBottom: '1rem',
          padding: '1rem',
        }}
      >
        {/* Casting ke React.createElement untuk memastikan type inference aman */}
        {React.createElement(WrappedComponent, props)}
      </div>
    )
  }

  ComponentWithBorder.displayName = `WithBorder(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`

  return ComponentWithBorder
}
