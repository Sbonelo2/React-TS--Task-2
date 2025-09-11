interface Props {
  text: string;
}
export default function input({ text }: Props) {
  return (
    <div>
      <input className="SearchBar" type="text" name="Search" placeholder={text}></input>
    </div>
  );
}
