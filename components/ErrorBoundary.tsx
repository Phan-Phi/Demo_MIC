import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback() {
  // { error: any, resetErrorBoundary: any }
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      {/* <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button> */}
    </div>
  );
}

const UI = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};
export default UI;
