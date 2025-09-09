interface Props {
  text: string;
}
export default function input({ text }: Props) {
  return (
    <div>
      <input type="text" name="name" placeholder={text}></input>
    </div>
  );
}
