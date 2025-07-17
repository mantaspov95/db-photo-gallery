import ErrorFallbackButton from '@components/ui/ErrorFallbackButton';
import type { PropsWithChildren } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

type ErrorBoundaryWrapperProps = {
  reset: () => void;
} & PropsWithChildren;

export const ErrorBoundaryWrapper = ({ reset, children }: ErrorBoundaryWrapperProps) => (
  <ErrorBoundary
    onReset={reset}
    fallbackRender={({ resetErrorBoundary }) => <ErrorFallbackButton onClick={resetErrorBoundary} />}
  >
    {children}
  </ErrorBoundary>
);

export default ErrorBoundaryWrapper;
