import { ChangeEventHandler, FocusEventHandler, LegacyRef } from "react";

export interface InputInterface {
  label: string;
  classNameInput: string;
  classNameLabel: string;
  name: string;
  type: string;
  autoComplete: string;
  required: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  value: string | number | readonly string[] | undefined;
}
