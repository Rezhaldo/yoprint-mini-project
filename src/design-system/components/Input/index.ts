import { Input as InternalInput } from './Input';

type CompoundedInput = typeof InternalInput & {};

const Input = InternalInput as CompoundedInput;

export { Input };
