import dynamic from 'next/dynamic';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function vimeImport<T = any>(module: string) {
  return dynamic(
    () =>
      import('@vime/react').then((mod: any) => mod[module]) as Promise<
        React.FC<T>
      >,
    {
      ssr: false,
    },
  );
}
