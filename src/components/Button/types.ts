export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

export interface ButtonContainerStyle {
    isInvalid?: boolean;
}