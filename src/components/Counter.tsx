type CounterProps = {
  text: number;
};

function Counter({ text }: CounterProps) {
  return <p>nilai counter : {text}</p>;
}

type CounterProfile = {
  text: string;
};

// named export
export function CounterProfile({ text }: CounterProfile) {
  return (
    <>
      <hr />
      <p>{text}</p>
    </>
  );
}

export default Counter;
//default export
