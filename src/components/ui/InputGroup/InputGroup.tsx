import { useMemo, type HTMLAttributes, type PropsWithChildren } from 'react';
import InputGroupInput from './components/Input';
import InputGroupLabel from './components/Label';
import styles from './InputGroup.module.scss';
import classNames from 'classnames/bind';
import InputGroupContext from './context/InputGroupContext';
import InputGroupFeedback from './components/Feedback';

const cx = classNames.bind(styles);

type InputGroupProps = { isError?: boolean; className?: string } & PropsWithChildren &
  Omit<HTMLAttributes<HTMLDivElement>, 'className'>;

const InputGroup = ({ isError = false, className, children, ...restProps }: InputGroupProps) => {
  const InputGroupContextValue = useMemo(
    () => ({
      isError: isError,
    }),
    [isError]
  );

  return (
    <InputGroupContext.Provider value={InputGroupContextValue}>
      <div {...restProps} className={cx('input-group', className)}>
        {children}
      </div>
    </InputGroupContext.Provider>
  );
};

InputGroup.Label = InputGroupLabel;
InputGroup.Input = InputGroupInput;
InputGroup.Feedback = InputGroupFeedback;

export default InputGroup;
