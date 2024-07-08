import { forwardRef, ForwardedRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface BaseProps {
  label: string;
  textarea?: boolean;
}

type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Input = forwardRef(function Input(
  { label, textarea, ...props }: InputProps | TextareaProps,
  ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>,
) {
  const classes =
    'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
      {textarea ? (
        <textarea
          ref={ref as ForwardedRef<HTMLTextAreaElement>}
          className={classes}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          ref={ref as ForwardedRef<HTMLInputElement>}
          className={classes}
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </p>
  );
});

export default Input;
