export default function Button({ onClick, children }) {
  console.debug('Button render');
  return <button onClick={onClick}>{children}</button>;
}