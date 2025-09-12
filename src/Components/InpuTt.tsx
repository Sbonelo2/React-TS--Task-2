import Tabled from './Tabled'
export default function Input({ text, ...rest }) {
  return (
    <div>
      <label>{text}</label>
      <input {...rest} />
    </div>
  );
}
