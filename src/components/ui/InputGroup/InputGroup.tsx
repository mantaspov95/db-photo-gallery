import { useMemo, type HTMLAttributes, type PropsWithChildren, type ReactElement } from 'react';
import classNames from 'classnames/bind';
import InputGroupInput from './components/InputGroupInput';
import InputGroupLabel from './components/InputGroupLabel';
import styles from './InputGroup.module.scss';
import InputGroupContext from './context/InputGroupContext';
import InputGroupFeedback from './components/InputGroupFeedback';

const cx = classNames.bind(styles);

type InputGroupProps = { isError?: boolean; className?: string } & PropsWithChildren &
  Omit<HTMLAttributes<HTMLDivElement>, 'className'>;

const InputGroup = ({ isError = false, className, children, ...restProps }: InputGroupProps): ReactElement => {
  const InputGroupContextValue = useMemo(
    () => ({
      isError,
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
