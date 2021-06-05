interface ChildProps {
  color: string;
  onClick: () => void;
}

//This method is quick and easy, but doesn't know that Child is a React
//component.
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

//This method gives you access to all React component methods.
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div color="red">
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
