import { icons } from "./Icons";

type IconName = keyof typeof icons;

type Props = {
  name: IconName;
  size?: number;
};

const Icon = ({ name, size = 54 }: Props) => {
  return (
    <span style={{ width: size, height: size, display: "inline-block" }}>
      {icons[name]}
    </span>
  );
};

export default Icon;
